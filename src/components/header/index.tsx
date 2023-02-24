import Image from "next/image";

import IgniteShopLogo from "@/assets/ignite-shop-logo.png";
import {
  Header as HeaderContainer,
  HeaderWrapper,
} from "@/styles/components/header";
import IconButton from "@/components/icon-button";
import { Handbag } from "phosphor-react";
import { theme } from "@/styles";
import useCart from "@/hooks/useCart";
import Link from "next/link";
import { useCallback, useState } from "react";
import SideMenu from "../side-menu";
import { CheckoutSideMenu } from "../checkout-side-menu";

export default function Header() {
  const [isCheckoutMenuOpen, setIsCheckoutMenuOpen] = useState(false);
  const { productsList } = useCart();

  const onToggleCheckoutMenu = useCallback(() => {
    setIsCheckoutMenuOpen((prevValue) => !prevValue);
  }, []);

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Link href="/">
          <Image
            src={IgniteShopLogo}
            alt="Two triangles one above other in diagonal"
          />
        </Link>
        <div>
          <IconButton
            icon={<Handbag size={24} color={theme.colors.gray100.value} />}
            ariaLabel="Check cart now"
            variant="opaque"
            onClick={onToggleCheckoutMenu}
          />
          {productsList.length > 0 && <span>{productsList.length}</span>}
        </div>
      </HeaderWrapper>
      {isCheckoutMenuOpen && (
        <CheckoutSideMenu onOpenChange={onToggleCheckoutMenu} />
      )}
    </HeaderContainer>
  );
}
