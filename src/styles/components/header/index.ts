import { styled } from "@/styles";

export const Header = styled('header', {
  position: 'sticky',
  top: 0,
  background: '$gray900',
  width: '100%',
  zIndex: 1,
  borderBottom: '1px solid $gray800',
})

export const HeaderWrapper = styled('div', {
  padding: '2rem 0', 
  width: '100%',
  maxWidth: 1100,
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  div: {
    position: 'relative',

    span: {
      position: 'absolute',
      top: '-8px',
      right: '-8px',
      height: 24,
      width: 24,
      minWidth: 24,
      borderRadius: '50%',
      background: '$green300',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '$sm',
      fontWeight: 'bold',
      pointerEvents: 'none',
    }
  }
})