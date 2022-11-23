import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '../components/layouts/mainLayout'
import DarkModeContextProvider from '../contexts/DarkModeContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DarkModeContextProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </DarkModeContextProvider>
  )
}
