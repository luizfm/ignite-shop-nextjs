import { styled } from "../..";

export const IconButtonContainer = styled('button', {
  borderRadius: 6,
  padding: 12,
  border: 0,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  right: '2rem',

  '&:disabled': {
    opacity: 0.6,
    cursor: "not-allowed",
  },

  variants: {
    variant: {
      opaque: {
        height: 48,
        width: 48,
        backgroundColor: '$gray800',
        '&:hover': {
          backgroundColor: '$gray900',
        }
      },
      primary: {
        height: 56,
        width: 56,
        backgroundColor: '$green500',
        '&:hover': {
          backgroundColor: '$green300',
        }
      },
      ghost: {
        width: 140,
        borderRadius: 0,
      },
    }
  }
})