import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "../components/layouts/mainLayout";
import MenuContextProvider from "../contexts/MenuContexts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MenuContextProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </MenuContextProvider>
  );
}
