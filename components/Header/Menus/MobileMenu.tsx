import { AnimatePresence, m } from "framer-motion";
import { useMobileMenu } from "../../../contexts/MenuContexts";
import { DarkModeButton } from "../Buttons/DarkModeButton";

export default function MobileMenu() {
    const { isMobileMenuOpen } = useMobileMenu();
    return (
        <AnimatePresence>
            {isMobileMenuOpen &&
                <m.div
                    className="flex flex-col w-screen h-page bottom-0 fixed z-10 bg-base-light dark:bg-base-dark"
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        mass: 1.5,
                        duration: 0.25,
                    }}
                >
                    <div className="flex flex-col h-[90%]">
                        { }
                    </div>

                    <div className="flex items-center h-[10%]  ">
                        <DarkModeButton size={40} />
                    </div>
                </m.div>
            }
        </AnimatePresence >
    );
}