import { styled } from "@/styles";

export const CheckoutSideMenuProductsContainer = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  rowGap: '1.5rem',
  flex: '1',
  overflow: 'auto',
})

export const CheckoutSideMenuTotalPriceContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '2rem 0 3.625rem',
  rowGap: '0.5rem',

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',

    p: {
      color: '$gray100',
    },
  
    strong: {
      color: '$gray100',
      fontWeight: 'bold',
      fontSize: '$md',
    }
  },
})

export const ProceedToCheckoutButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,
  border: 0,
  padding: '1.25rem 2rem',
  color: '$white',
  fontWeight: 'bold',
  fontSize: '$md',
  backgroundColor: '$green300',
  transition: 'background 0.2s',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$green500',
  }
})