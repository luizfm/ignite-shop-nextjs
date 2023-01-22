import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'

import { HomeContainer, Product } from '@/styles/pages/home'
import IgniteLabTShirtImage from '@/assets/ignite-lab-t-shirt.png'
import IgniterAboardTShirt from '@/assets/igniter-aboard-t-shirt.png'
import MarathonShirt from '@/assets/marathon-shirt.png'

import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
   <HomeContainer ref={sliderRef} className="keen-slider">
     <Product className="keen-slider__slide">
       <Image src={IgniteLabTShirtImage} width={520} height={480} alt="A T-shirt image with a logo on its front-center" />
       <footer>
         <strong>T-shirt X</strong>
         <span>$ 49.9</span>
       </footer>
     </Product>
     <Product className="keen-slider__slide">
       <Image src={IgniterAboardTShirt} width={520} height={480} alt="A T-shirt image with a logo on its front-center" />
       <footer>
         <strong>T-shirt X</strong>
         <span>$ 49.9</span>
       </footer>
     </Product>
     <Product className="keen-slider__slide">
       <Image src={MarathonShirt} width={520} height={480} alt="A T-shirt image with a logo on its front-center" />
       <footer>
         <strong>T-shirt X</strong>
         <span>$ 49.9</span>
       </footer>
     </Product>
     <Product className="keen-slider__slide">
       <Image src={MarathonShirt} width={520} height={480} alt="A T-shirt image with a logo on its front-center" />
       <footer>
         <strong>T-shirt X</strong>
         <span>$ 49.9</span>
       </footer>
     </Product>
   </HomeContainer>
  )
}
