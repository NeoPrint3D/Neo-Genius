import { AnimatePresence, m } from "framer-motion";
import { useMobileMenu } from "../../../contexts/MenuContexts";

export default function MobileMenu() {
    const { isMobileMenuOpen } = useMobileMenu();
    return (
        <AnimatePresence>
            {isMobileMenuOpen &&
                <m.div
                    className="w-screen h-page bottom-0 fixed z-10 bg-base-white dark:bg-base-black"
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        mass: 0.5,
                        duration: 0.5,
                    }}
                >

                </m.div>
            }
        </AnimatePresence>
    );
}