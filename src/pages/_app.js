// import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'

import { Footer, Header } from "@/Components";

export default function App({ Component, pageProps }) {
  return <div className='container-fluid'>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </div>
}
