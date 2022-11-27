import { domAnimation, domMax, LazyMotion } from "framer-motion";
import Footer from "../Footer";
import Header from "../Header/Header";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <LazyMotion features={domAnimation}>
            <div className="min-h-screen dark:bg-base-dark dark:text-white duration-500 w-screen overflow-x-hidden">
                <Header />
                {children}
                <Footer />
            </div>
        </LazyMotion>
    );
}
