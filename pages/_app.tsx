import GlobalCSS from '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AppProvider } from '@/context/App';

export function MyApp({ Component, pageProps }: AppProps) {
  return(
    <AppProvider>
      <GlobalCSS />
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
