import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "../components/layouts/mainLayout";
import MenuContextProvider from "../contexts/MenuContexts";
import AuthContextProvider from "../contexts/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>

      <MenuContextProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </MenuContextProvider>
    </AuthContextProvider>
  );
}
