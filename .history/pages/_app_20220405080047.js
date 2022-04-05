import '../styles/globals.css'
import { MoralisProvider } from "react-moralis";


function MyApp({ Component, pageProps }) {
  return 
  <MoralisProvider appId={process/enc}>
  <Component {...pageProps} />
  </MoralisProvider>
}

export default MyApp
 