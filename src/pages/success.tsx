import { stripe } from "@/lib/stripe";
import {
  ImageContainer,
  ProductsImageContainer,
  SuccessContainer,
} from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import Stripe from "stripe";

type ProductProps = {
  name: string;
  imageUrl: string;
};

interface SuccessProps {
  customerName: string;
  products: ProductProps[];
}

export default function Success({ customerName, products }: SuccessProps) {
  const renderProductText = useMemo(() => {
    return products.length > 1
      ? `buy of ${products.length} t-shirts`
      : products[0].name;
  }, []);
  return (
    <>
      <Head>
        <title>Buy confirmation | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <ProductsImageContainer>
          {products.map((product: ProductProps) => (
            <ImageContainer key={product.name}>
              <Image
                src={product.imageUrl}
                height={140}
                width={140}
                alt="T-shirt"
              />
            </ImageContainer>
          ))}
        </ProductsImageContainer>
        <h1>Buy Confirmed!</h1>

        <p>
          Uhuul, <strong>{customerName}</strong>, your{" "}
          <strong>{renderProductText}</strong> is on the way to your address.
        </p>

        <Link href="/">Back to catalog</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = query.session_id as string;

  if (!sessionId) {
    return {
      props: {
        notFound: true,
      },
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session?.customer_details?.name;
  const products = session?.line_items?.data.map((item) => {
    const product = item?.price?.product as Stripe.Product;

    return {
      name: product.name,
      imageUrl: product.images[0],
    };
  });

  if (!products?.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      customerName,
      products,
    },
  };
};
