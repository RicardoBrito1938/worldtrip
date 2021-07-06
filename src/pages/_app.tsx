import {AppProps} from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import { theme } from '../styles/theme'
import NextNProgress from 'nextjs-progressbar';


import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';


function MyApp({ Component, pageProps }:AppProps) {
  return (
  <ChakraProvider theme={theme}>
     <NextNProgress
        color="#FFBA08"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
      />
   <Component {...pageProps} />
  </ChakraProvider>)
}

export default MyApp
