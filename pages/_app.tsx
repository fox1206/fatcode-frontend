import '../styles/globals.css'
import type { AppProps } from 'next/app';
import MemoNavBar from '../layouts/Header/NavBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MemoNavBar>
      <Component {...pageProps} />
    </MemoNavBar>      
  )
}

export default MyApp;
