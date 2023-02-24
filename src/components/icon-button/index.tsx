import { IconButtonContainer } from "@/styles/components/icon-button";
import React, { ButtonHTMLAttributes, useCallback } from "react";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: JSX.Element;
  ariaLabel: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "opaque" | "ghost";
};

export default function IconButton({
  icon,
  ariaLabel,
  onClick,
  variant = "primary",
  ...restProps
}: IconButtonProps) {
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation();
      onClick(event);
    },
    [onClick]
  );

  return (
    <IconButtonContainer
      variant={variant}
      aria-label={ariaLabel}
      onClick={handleClick}
      {...restProps}
    >
      {icon}
    </IconButtonContainer>
  );
}
