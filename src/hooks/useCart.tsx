import { useQuery, useQueryClient } from "react-query";

type Product = {
  id: string;
  imageUrl: string;
  name: string;
  price: string;
  priceId: string;
};

type ProductQueryProps = {
  products: Product[];
};

const useCart = () => {
  const queryClient = useQueryClient();

  const productsCachedQuery = useQuery<ProductQueryProps, Error>(["Cart"], {
    enabled: false,
  });

  const productsList = productsCachedQuery.data?.products || [];

  const addProductToCart = (product: Product) => {
    if (productsList.some((cartProduct) => cartProduct.id === product.id)) {
      return;
    }

    queryClient.setQueryData(["Cart"], {
      products: [...productsList, product],
    });
  };

  const removeProductFromCart = (id: string) => {
    const filteredProducts = productsList.filter(
      (product) => product.id !== id
    );
    queryClient.setQueryData(["Cart"], {
      products: filteredProducts,
    });
  };

  return { productsList, addProductToCart, removeProductFromCart };
};

export default useCart;
