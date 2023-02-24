import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/styles/pages/product";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import Stripe from "stripe";
import { useCallback, useState } from "react";

import { stripe } from "@/lib/stripe";
import { formatPriceToDollar } from "@/utils/price-formatter";
import Head from "next/head";
import useCart from "@/hooks/useCart";

interface ProductProps {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  price: string;
  defaultPriceId: string;
}

export default function Product({
  id,
  name,
  imageUrl,
  description,
  price,
  defaultPriceId,
}: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);
  const { addProductToCart } = useCart();

  const onAddToCart = useCallback(
    () =>
      addProductToCart({
        id,
        name,
        imageUrl,
        price,
        priceId: defaultPriceId,
      }),
    [addProductToCart, id, imageUrl, name, price]
  );

  return (
    <>
      <Head>
        <title>{name} | Ignite shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image height={520} width={520} alt="T-shirt" src={imageUrl} />
        </ImageContainer>
        <ProductDetails>
          <h1>{name}</h1>
          <span>{formatPriceToDollar(price)}</span>
          <p>{description}</p>
          <button disabled={isCreatingCheckoutSession} onClick={onAddToCart}>
            Add to cart
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "prod_NEhY3wmlU0owSD" } }],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params?.id;

  if (!productId) {
    return {
      props: {},
    };
  }

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const productPrice = product.default_price as Stripe.Price;

  return {
    props: {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      description: product.description,
      price: (productPrice.unit_amount || 0) / 100,
      defaultPriceId: productPrice.id,
    },
    revalidate: 60 * 60 * 1, // 1h
  };
};
