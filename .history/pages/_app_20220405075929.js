import '../styles/globals.css'
import { MoralisProvider } from "react-moralis";


function MyApp({ Component, pageProps }) {
  return 
  <MoralisProvider></MoralisProvider>
  <Component {...pageProps} />
}

export default MyApp
 