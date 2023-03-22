// import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'

import { Footer, Header } from "@/Components";

export default function App({ Component, pageProps }) {
  return <>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
}
