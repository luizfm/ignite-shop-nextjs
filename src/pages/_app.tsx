import type { AppProps } from 'next/app'
import Image from 'next/image'

import { globalStyles, ROBOTO } from '@/styles/global'
import IgniteShopLogo from '@/assets/ignite-shop-logo.svg'
import { Container, Header } from '@/styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>  
      <style jsx global>{`
        html {
          font-family: ${ROBOTO.style.fontFamily};
        }
      `}</style>
      <Header>
        <Image src={IgniteShopLogo} alt="Two triangles one above other in diagonal" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
