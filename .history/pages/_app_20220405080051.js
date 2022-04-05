import '../styles/globals.css'
import { MoralisProvider } from "react-moralis";


function MyApp({ Component, pageProps }) {
  return 
  <MoralisProvider appId={process/env.}>
  <Component {...pageProps} />
  </MoralisProvider>
}

export default MyApp
 