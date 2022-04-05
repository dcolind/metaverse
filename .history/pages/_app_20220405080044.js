import '../styles/globals.css'
import { MoralisProvider } from "react-moralis";


function MyApp({ Component, pageProps }) {
  return 
  <MoralisProvider appId={procc}>
  <Component {...pageProps} />
  </MoralisProvider>
}

export default MyApp
 