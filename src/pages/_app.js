import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { ClerkProvider } from "@clerk/nextjs";

export default function App({ Component, pageProps }) {
  return (
    <>
    <ClerkProvider {...pageProps}>
    <Navbar/>
    <Component {...pageProps} />
    </ClerkProvider>
    </>
  )
}
