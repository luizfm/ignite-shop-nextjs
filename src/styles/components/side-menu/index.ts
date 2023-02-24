import { Content, Close, Overlay, Title } from '@radix-ui/react-dialog'
import { styled } from '@/styles'

export const DialogOverlay = styled(Overlay, {
  height: '100vh',
  widthj: '100vw',
  position: 'fixed',
  inset: 0,
  zIndex: 2,
})

export const DialogContent = styled(Content, {
  padding: '5rem 3.2rem 3rem',
  backgroundColor: '$gray800',
  display:  'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: 480,
  maxHeight: '100vh',
  position: 'fixed',
  top: 0,
  bottom: 0,
  right: 0,
  zIndex: 3,
  boxShadow: '-4px 0 30px 0 rgba(0, 0, 0, 0.8)',
})

export const DialogTitle = styled(Title, {
  fontSize: '$lg',
  fontWeight: 'bold',
  color: '$gray100',
  marginBottom: '2rem',
})

export const DialogClose = styled(Close, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 0,
  background: 'transparent',
  position: 'absolute',
  top: 24,
  right: 16,
  cursor: 'pointer',
})

