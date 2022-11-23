import { domAnimation, domMax, LazyMotion } from "framer-motion";
import Footer from "../Footer";
import Header from "../Header/Header";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <LazyMotion features={domMax}>
            <div className="bg-[#f8f8f8] min-h-screen text-black">
                <Header />
                {children}
                <Footer />
            </div>
        </LazyMotion>
    )
}
