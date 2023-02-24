import { theme } from "@/styles";
import { ArrowButton } from "@/styles/components/arrow";
import { CaretLeft, CaretRight } from "phosphor-react";

interface ArrowProps {
  type: "left" | "right";
  onClick: () => void;
  disabled: boolean;
}

export default function Arrow({ type, onClick, disabled }: ArrowProps) {
  return (
    <ArrowButton
      icon={
        type === "left" ? (
          <CaretLeft size={32} color={theme.colors.white.value} />
        ) : (
          <CaretRight size={32} color={theme.colors.white.value} />
        )
      }
      disabled={disabled}
      ariaLabel={`${type} arrow`}
      variant="ghost"
      onClick={onClick}
      position={type}
    />
  );
}
