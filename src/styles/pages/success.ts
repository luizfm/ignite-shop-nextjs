import { styled } from "..";

export const SuccessContainer = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    height: 656,

    h1: {
        fontSize: '$2xl',
        color: '$gray100',
    },

    p: {
        marginTop: '2rem',
        fontSize: '$xl',
        color: '$gray300',
        maxWidth: 560,
        textAlign: 'center',
        lineHeight: 1.4
    },

    a: {
        marginTop: '5rem',
        display: 'block',
        fontSize: '$lg',
        color: '$green500',
        textDecoration: 'none',
        fontWeight: 'bold',

        '&:hover': {
            color: '$green300',
        }
    }
})

export const ProductsImageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  'div:not(:first-child)': {
    marginLeft: '-40.5px',
  }
})

export const ImageContainer = styled('div', {
    marginBottom: 48, 
    width: '100%',
    maxWidth: 140,
    height: 140,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: '50%',
    padding: '0.25rem',
    boxShadow: '0 0 60px 0 rgba(0, 0, 0, 0.8)',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    objectFit: 'cover',
})