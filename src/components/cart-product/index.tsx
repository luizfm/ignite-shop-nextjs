import {
  CartProductContainer,
  CartProductImage,
  CartProductInfo,
} from "@/styles/components/cart-product";
import { formatPriceToDollar } from "@/utils/price-formatter";
import Image from "next/image";
import { useCallback } from "react";

interface CartProductProps {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  onRemoveClick: (id: string) => void;
}

export function CartProduct({
  id,
  name,
  price,
  imageUrl,
  onRemoveClick,
}: CartProductProps) {
  const handleOnRemoveClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const {
        dataset: { id },
      } = event.currentTarget;

      if (!id) return;
      onRemoveClick(id);
    },
    []
  );

  return (
    <CartProductContainer>
      <CartProductImage>
        <Image src={imageUrl} height="93" width="100" alt={`${name} T-shirt`} />
      </CartProductImage>
      <CartProductInfo>
        <p>T-shirt</p>
        <strong>{formatPriceToDollar(price)}</strong>
        <button
          type="button"
          onClick={handleOnRemoveClick}
          aria-label="Remove from cart"
          data-id={id}
        >
          Remove
        </button>
      </CartProductInfo>
    </CartProductContainer>
  );
}

export default CartProduct;
