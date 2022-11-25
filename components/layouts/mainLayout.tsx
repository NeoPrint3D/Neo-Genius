import { domAnimation, domMax, LazyMotion } from "framer-motion";
import { useDarkMode } from "../../contexts/DarkModeContext";
import Footer from "../Footer";
import Header from "../Header/Header";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const { darkMode } = useDarkMode()
    return (
        <LazyMotion features={domMax}>
            <div className="min-h-screen transition-colors bg-[#f8f8f8] text-black dark:bg-gray-900 dark:text-white duration-500 w-screen">
                <Header />
                {children}
                <Footer />
            </div>
        </LazyMotion>
    )
}
