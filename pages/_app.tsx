import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '../components/Layouts/mainLayout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}
