/* eslint-disable no-unused-vars */
import { useClickAway, useWindowSize } from "react-use";
import Image from "next/image";
import Link from "next/link";
import { SetStateAction, useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, m, Variants } from "framer-motion";
import { useDarkMode, useMobileMenu } from "../../contexts/MenuContexts";
import { Sling as Hamburger } from "../Hamburger/Sling";
import DesktopMenu from "./Menus/DesktopMenu";
import MobileMenu from "./Menus/MobileMenu";
import { UserMenu } from "./Menus/UserMenu";



export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const { width } = useWindowSize();
    const headerRef = useRef<HTMLHeadingElement>(null);
    const { darkMode } = useDarkMode();
    const { isMobileMenuOpen, setIsMobileMenuOpen } = useMobileMenu();
    const isSignedIn = true;





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
                        className="z-40 fixed h-20 w-screen bg-base-white dark:bg-base-black"
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
                    />
                }
            </AnimatePresence>
            <div className={`flex items-center h-20 w-full z-50 fixed   transition-all duration-1000  ${isScrolled && !isMobileMenuOpen && "shadow-2xl"}`}>
                <Link href="/" className="sm:w-[10%]">
                    <div className="w-20 -translate-y-1">
                        <Image src="/images/logo.png" alt="Neo Genius Logo" width={512} height={512} priority />
                    </div>
                </Link>
                <div className="flex sm:hidden gap-1 justify-end items-center font-body font-semibold text-white dark:text-[#2f2e3e] w-full ssm:w-[30%] ">
                    {isSignedIn ?
                        <UserMenu /> :
                        <Link href="/signup">
                            <button className="px-2.5 py-2 sm:px-3 sm:py-2 bg-primary rounded-lg hover:scale-105 active:scale-95 transition-all">
                                Sign Up
                            </button>
                        </Link>
                    }

                    <Hamburger color={darkMode ? "#fff" : "#000"} toggled={isMobileMenuOpen} toggle={setIsMobileMenuOpen!} />
                </div>
                <DesktopMenu isSearchFocused={isSearchFocused} setIsSearchFocused={setIsSearchFocused} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            </div>
            <div className='flex justify-center items-center fixed z-40 h-20 overflow-hidden w-screen'>
                <AnimatePresence>
                    {isScrolled && !isMobileMenuOpen &&
                        <m.div
                            initial={{
                                scale: 1,
                                opacity: 1,
                                backgroundColor: "rgba(247, 177, 103)",
                            }}
                            animate={{
                                scale: width > 1440 ? 40 : 22,
                                opacity: 1,
                                backgroundColor: darkMode ? "rgba(0, 51, 86)" : "rgba(248, 248, 248)"

                            }}
                            exit={{
                                scale: 0,
                                opacity: 0,
                                backgroundColor: "rgba(247, 177, 103)",
                            }}
                            transition={{
                                scale: {
                                    type: "ease",
                                    ease: "easeInOut",
                                    duration: 1,
                                },
                                backgroundColor: {
                                    type: "ease",
                                    ease: "easeInOut",
                                    duration: 1.5,
                                },
                                opacity: {
                                    type: "ease",
                                    ease: "easeInOut",
                                    duration: 1,
                                }
                            }}
                            style={{
                                transformOrigin: "center",
                            }}
                            className="z-40 w-20 h-20 rounded-full "

                        />
                    }
                </AnimatePresence>
            </div>
            <MobileMenu />
        </header>
    );
}