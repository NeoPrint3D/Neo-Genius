import { useClickAway, useScroll, useWindowSize } from "react-use"
import Image from "next/image"
import Link from "next/link"
import { SetStateAction, useEffect, useLayoutEffect, useRef, useState } from "react"
import { AnimatePresence, m, Variants } from "framer-motion"
import { GoSearch } from "react-icons/go"
import { useRouter } from "next/router"
import { CgDarkMode, CgMenuRight } from "react-icons/cg"
import { useDarkMode } from '../../contexts/DarkModeContext';
import Hamburger from '../Hamburger';
import DesktopMenu from './Menus/DesktopMenu';
import MobileMenu from "./Menus/MobileMenu"



export default function Header() {
    const router = useRouter()
    const [isScrolled, setIsScrolled] = useState(false)
    const [isSearchFocused, setIsSearchFocused] = useState(false)
    const [userMenuOpen, setUserMenuOpen] = useState(false)
    const [boxWidth, setBoxWidth] = useState(0)
    const [searchQuery, setSearchQuery] = useState("")
    const boxRef = useRef<HTMLDivElement>(null)
    const { width } = useWindowSize()
    const headerRef = useRef<HTMLHeadingElement>(null)
    const { darkMode, setDarkMode } = useDarkMode()
    const isMobile = width < 768


    //see if the user clicks off the header element
    useClickAway(headerRef, () => {
        console.log("click away")
        setUserMenuOpen(false)
        setIsSearchFocused(false)
        setSearchQuery("")
    })






    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])









    return (
        <header ref={headerRef}>
            <div className={`flex items-center h-20 w-full z-50 fixed`}>
                <Link href="/" className="sm:w-[10%]">
                    <Image src="/logo.png" alt="Neo Genius Logo" width={isMobile ? 92 : 100} height={isMobile ? 92 : 100} className=" -translate-y-1 sm:-translate-y-2" priority />
                </Link>
                {isMobile ? <MobileMenu /> : <DesktopMenu isSearchFocused={isSearchFocused} setIsSearchFocused={setIsSearchFocused} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}
            </div>
            <div className='flex justify-center items-center fixed z-40 h-20 overflow-hidden w-screen'>
                <AnimatePresence>
                    {isScrolled &&
                        <m.div
                            initial={{
                                scale: 1,
                                opacity: 1,
                                backgroundColor: "rgba(247, 177, 103)",
                            }}
                            animate={{
                                scale: width > 1440 ? 40 : 22,
                                opacity: 1,
                                backgroundColor: darkMode ? "rgba(0, 0, 0, 0.9)" : "rgba(255, 255, 255, 0.9)",

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
        </header>
    )
}