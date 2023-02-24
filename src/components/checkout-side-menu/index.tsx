import CartProduct from "../cart-product";
import SideMenu from "../side-menu";

import {
  CheckoutSideMenuProductsContainer,
  CheckoutSideMenuTotalPriceContainer,
  ProceedToCheckoutButton,
} from "@/styles/components/checkout-side-menu";
import useCart from "@/hooks/useCart";
import { useCallback, useState } from "react";
import { formatPriceToDollar } from "@/utils/price-formatter";
import axios from "axios";

interface CheckoutSideMenu {
  onOpenChange: () => void;
}

export function CheckoutSideMenu({ onOpenChange }: CheckoutSideMenu) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);
  const { productsList, removeProductFromCart } = useCart();

  const productsQuantity = productsList.length;
  const total = productsList.reduce<number>((acc, product) => {
    return acc + Number(product.price);
  }, 0);

  const onRemoveClick = useCallback((id: string) => {
    removeProductFromCart(id);
  }, []);

  const onProceedToCheckout = useCallback(async () => {
    try {
      const pricesIds = productsList.map((product) => product.priceId);
      setIsCreatingCheckoutSession(true);

      const response = await axios.post("/api/checkout", {
        pricesIds: pricesIds,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);
      alert("Falha ao redirecionar ao checkout");
    }
  }, []);

  return (
    <SideMenu title="Checkout cart" onOpenChange={onOpenChange}>
      <CheckoutSideMenuProductsContainer>
        {productsList.map((product) => (
          <CartProduct
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
            onRemoveClick={onRemoveClick}
          />
        ))}
      </CheckoutSideMenuProductsContainer>
      <CheckoutSideMenuTotalPriceContainer>
        <div>
          <p>Quantity</p>
          <p>
            {productsQuantity} item{productsQuantity === 1 ? "s" : ""}
          </p>
        </div>
        <div>
          <strong>Total</strong>
          <strong>{formatPriceToDollar(total)}</strong>
        </div>
      </CheckoutSideMenuTotalPriceContainer>
      <ProceedToCheckoutButton
        type="button"
        onClick={onProceedToCheckout}
        aria-label="Proceed to checkout"
        disabled={isCreatingCheckoutSession}
      >
        Proceed to checkout
      </ProceedToCheckoutButton>
    </SideMenu>
  );
}

export default CheckoutSideMenu;
