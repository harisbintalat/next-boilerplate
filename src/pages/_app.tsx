import { AppPropsWithLayout } from '@customTypes/layouts'
import '@assets/styles/global.css'


export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps} />)
}