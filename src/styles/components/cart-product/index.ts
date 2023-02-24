import { styled } from "@/styles";

export const CartProductContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  columnGap: '1.25rem',
})

export const CartProductImage = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,

  img: {
    objectFit: 'cover',
  }
})

export const CartProductInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',

  p: {
    fontSize: '$lg',
    color: '$gray300',
  },

  strong: {
    marginTop: '2px',
    fontSize: '$lg',
    color: '$gray100',
  },

  button: {
    marginTop: '0.5rem',
    border: 0,
    background: 'transparent',
    color: '$green500',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '$lg',

    '&:hover': {
      opacity: 0.6,
    }
  }
})