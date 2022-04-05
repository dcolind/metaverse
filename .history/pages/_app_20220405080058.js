import '../styles/globals.css'
import { MoralisProvider } from "react-moralis";


function MyApp({ Component, pageProps }) {
  return 
  <MoralisProvider appId={process/env.NEXT_PUBLIC}>
  <Component {...pageProps} />
  </MoralisProvider>
}

export default MyApp
 