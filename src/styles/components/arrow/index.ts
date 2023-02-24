import IconButton from "@/components/icon-button";
import { styled } from "@/styles";

export const ArrowButton = styled(IconButton, {
  position: 'absolute',


  variants: {
    position: {
      left: {
        left: 0,
        top: 116,
        height: 'calc(100% - 116px)',
        background: 'linear-gradient(270deg, transparent 0%, #121214 100%)',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.10)',
        }
      },
      right: {
        right: 0,
        top: 116,
        height: 'calc(100% - 116px)',
        background: 'linear-gradient(90deg, transparent 0%, #121214 100%)',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.10)',
        }
      }
    }
  }
})