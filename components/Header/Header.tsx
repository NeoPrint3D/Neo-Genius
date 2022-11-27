/* eslint-disable no-unused-vars */
import { useClickAway, useWindowSize } from "react-use";
import Image from "next/image";
import Link from "next/link";
import { SetStateAction, useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, m, Variants } from "framer-motion";
import { useDarkMode, useMobileMenu } from "../../contexts/MenuContexts";
import DesktopMenu from "./Menus/DesktopMenu";
import MobileMenu from "./Menus/MobileMenu";
import { UserMenu } from "./Menus/UserMenu";
import Hamburger from "./Buttons/Hamburger";
import { useAuth } from "../../contexts/AuthContext";



export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const { isMobileMenuOpen, setIsMobileMenuOpen } = useMobileMenu();
    const { width } = useWindowSize();
    const headerRef = useRef<HTMLHeadingElement>(null);
    const { darkMode } = useDarkMode();
    const { isSignedIn } = useAuth();





    //see if the user clicks off the header element
    useClickAway(headerRef, () => {
        setIsSearchFocused(false);
        setSearchQuery("");
    });






    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);









    return (
        <header ref={headerRef}>
            <AnimatePresence>
                {isMobileMenuOpen &&
                    <m.div
                        className="z-40 fixed h-20 w-screen bg-base-white/80 dark:bg-base-black/80 backdrop-blur-xl"
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
                    />
                }
            </AnimatePresence>
            <div className={`flex items-center h-20 w-full z-50 fixed   transition-all duration-300  ${isScrolled && !isMobileMenuOpen && "shadow-2xl bg-base-white dark:bg-base-black/70 backdrop-blur-xl"}`}>
                <Link href="/" className="md:w-[10%]">
                    <button className="w-20 -translate-y-1" onClick={() => setIsMobileMenuOpen(false)}>
                        <Image src="/images/logo.png" alt="Neo Genius Logo" width={512} height={512} priority />
                    </button>
                </Link>
                <div className="flex sm:hidden gap-1 justify-end items-center font-body font-semibold text-white dark:text-[#2f2e3e] w-full ssm:w-[30%] ">
                    <Hamburger />
                </div>
                <DesktopMenu isSearchFocused={isSearchFocused} setIsSearchFocused={setIsSearchFocused} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            </div>
            <MobileMenu />
            {width < 1024 && isSignedIn && <UserMenu />}
        </header>
    );
}