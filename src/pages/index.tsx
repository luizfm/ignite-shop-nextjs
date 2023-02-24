import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import Head from "next/head";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import Link from "next/link";
import {
  ButtonHTMLAttributes,
  MouseEvent,
  MouseEventHandler,
  useCallback,
  useState,
} from "react";
import { Handbag } from "phosphor-react";

import "keen-slider/keen-slider.min.css";

import { HomeContainer, Product, ProductInfo } from "@/styles/pages/home";
import { stripe } from "@/lib/stripe";
import { formatPriceToDollar } from "@/utils/price-formatter";
import useCart from "@/hooks/useCart";
import IconButton from "@/components/icon-button";
import { theme } from "@/styles";
import Arrow from "@/components/arrow-button";

type Product = {
  id: string;
  imageUrl: string;
  name: string;
  price: string;
  priceId: string;
};
interface HomeProps {
  products: Product[];
}

export default function Home({ products }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const { addProductToCart } = useCart();

  const onAddProductToCart = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const {
        dataset: { product },
      } = event.currentTarget;

      if (!product) return;

      const parsedProduct = JSON.parse(product);
      addProductToCart(parsedProduct);
    },
    [addProductToCart]
  );

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      origin: "center",
      perView: 2,
      spacing: 48,
    },
    mode: "free",
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const onNextSlideClick = useCallback(() => {
    event?.stopPropagation();
    instanceRef.current?.next();
  }, [instanceRef]);

  const onPreviousSlideClick = useCallback(() => {
    event?.stopPropagation();
    instanceRef.current?.prev();
  }, [instanceRef]);

  return (
    <>
      <Head>
        <title>Ignite shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            prefetch={false}
          >
            <Product className="keen-slider__slide">
              <Image
                src={product.imageUrl}
                width={520}
                height={480}
                alt="A T-shirt image with a logo on its front-center"
              />
              <footer>
                <ProductInfo>
                  <strong>{product.name}</strong>
                  <span>{formatPriceToDollar(product.price)}</span>
                </ProductInfo>

                <IconButton
                  icon={
                    <Handbag size={32} color={theme.colors.gray100.value} />
                  }
                  data-product={JSON.stringify(product)}
                  onClick={onAddProductToCart}
                  ariaLabel={`Buy ${product.name} now`}
                />
              </footer>
            </Product>
          </Link>
        ))}
      </HomeContainer>
      {loaded && instanceRef.current && (
        <>
          <Arrow
            type="left"
            onClick={onPreviousSlideClick}
            disabled={currentSlide === 0}
          />

          <Arrow
            type="right"
            onClick={onNextSlideClick}
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          />
        </>
      )}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: (price.unit_amount || 0) / 100,
      priceId: price.id,
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  };
};
