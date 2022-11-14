import { domAnimation, domMax, LazyMotion } from "framer-motion";
import Footer from "../Footer";
import Header from "../Header/Header";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <LazyMotion features={domMax}>
            <div className="bg-white min-h-screen">
                <Header />
                {children}
                <Footer />
            </div>
        </LazyMotion>
    )
}
