import { UserMenu } from './UserMenu';
import { useScroll, useWindowSize } from "react-use"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { AnimatePresence, m, Variants } from "framer-motion"
import { GoSearch } from "react-icons/go"
import { useRouter } from "next/router"
import { CgDarkMode, CgMenuRight } from "react-icons/cg"
import { useDarkMode } from '../../contexts/DarkModeContext';


export default function Header() {
    const router = useRouter()
    const [isScrolled, setIsScrolled] = useState(false)
    const [isSearchedFocused, setIsSearchedFocused] = useState(false)
    const [userMenuOpen, setUserMenuOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const boxRef = useRef<HTMLDivElement>(null)
    const searchButtonRef = useRef<HTMLButtonElement>(null)
    const { width } = useWindowSize()
    const [boxWidth, setBoxWidth] = useState(0)
    const headerRef = useRef<HTMLHeadingElement>(null)
    const { darkMode, setDarkMode } = useDarkMode()
    const isSignedIn = false


    //see if the user clicks off the header element

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
                setIsSearchedFocused(false)
                setSearchQuery("")
            }
        }
        document.addEventListener("click", handleClick)
        return () => {
            document.removeEventListener("click", handleClick)
        }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps


    useEffect(() => {
        setBoxWidth(boxRef.current?.clientWidth || 0)
    }, [width, boxRef.current?.clientWidth, isSignedIn])




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


    function handleSearch(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(searchQuery)
        router.push(`/search?query=${searchQuery}`)
    }

    const isMobile = width < 768


    return (
        <>
            <div className='flex justify-center items-center fixed z-40 h-20 w-full'>
                <AnimatePresence>
                    {isScrolled &&
                        <m.div
                            initial={{
                                backgroundColor: "rgba(255, 255, 255, 0)",
                                width: "0%",
                                borderRadius: 500,
                                opacity: 0
                            }}
                            animate={{
                                backgroundColor: darkMode ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.5)",
                                width: "100%",
                                borderRadius: 0,
                                opacity: 1
                            }}
                            exit={{
                                backgroundColor: "rgba(255, 255, 255, 0)",
                                width: "0%",
                                borderRadius: 500,
                                opacity: 0,
                            }}
                            transition={{
                                type: "tween",
                                duration: .75,
                            }}
                            style={{
                                transformOrigin: "center",
                            }}
                            className="z-40 h-full  backdrop-blur-3xl"

                        />
                    }
                </AnimatePresence>
            </div>
            <m.header
                ref={headerRef}

                className="w-full z-50 fixed"

            >
                <div className={`flex h-20 w-full`}>
                    <Link href="/">
                        <Image src="/logo.png" alt="Neo Genius Logo" width={512} height={512} className="h-20 w-20" />
                    </Link>
                    {!isMobile &&
                        <div className="flex justify-center items-center mx-auto">
                            <AnimatePresence>
                                {isSearchedFocused && (
                                    <m.form
                                        className={"h-10 text-xl font-body font-semibold bg-white"}
                                        initial={{ width: 0, paddingLeft: 0, paddingRight: 0 }}
                                        animate={{
                                            width: "20rem",
                                            paddingLeft: "1rem",
                                            paddingRight: "1rem",
                                            borderRadius: "50rem",
                                            boxShadow: " rgba(247, 177, 103) 0px 15px 10px -12px",
                                            transition: {
                                                ease: "easeInOut",
                                                duration: 0.75,
                                            },
                                        }}
                                        exit={{
                                            width: 0,
                                            paddingLeft: 0,
                                            paddingRight: 0,
                                            borderRadius: 0,
                                            transition: {
                                                ease: "easeInOut",
                                                duration: 0.75,
                                            },
                                        }}
                                        onSubmit={(e) => handleSearch(e)}
                                    >
                                        <input
                                            className={"w-[calc(100%-1.75rem)] h-full bg-transparent outline-none"}
                                            placeholder={"Search"}
                                            type="text"
                                            name="search"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)} />
                                    </m.form>
                                )}
                            </AnimatePresence>
                        </div>
                    }
                    <div className="flex gap-3 justify-end items-center font-main text-white w-full">
                        <m.button
                            ref={searchButtonRef}
                            onClick={() => {
                                if (!isMobile) setIsSearchedFocused(true)
                                else router.push(`/search`)
                            }}
                            className="flex justify-center items-center bg-primary p-2 sm:p-3 rounded-full"
                            animate={{
                                x: isMobile ? 0 : !isSearchedFocused ? 0 : isSignedIn ? `calc(${-width / 2 + boxWidth}px + 13.5rem)` : `calc(${-width / 2 + boxWidth}px +  8.75rem)`,
                                rotate: !isSearchedFocused && !isMobile ? 0 : width < 768 ? 360 : 360 * 2,
                            }}
                            transition={{
                                x: {
                                    ease: "easeInOut",
                                    duration: 0.75,
                                },
                                rotate: {
                                    type: "spring",
                                    stiffness: 70,
                                    damping: 10,
                                    duration: 1,
                                },
                            }}
                        >
                            <GoSearch size={20} />
                        </m.button>
                        <m.button
                            className='flex justify-center items-center p-2 sm:p-3 rounded-full'
                            onClick={() => setDarkMode(!darkMode)}
                            animate={{
                                backgroundColor: darkMode ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 1)",
                                rotate: darkMode ? 360 : 0,
                            }}

                        >
                            <CgDarkMode className='dark:text-black' size={20} />
                        </m.button>

                        {!isSignedIn ?
                            <div className="flex items-center gap-3 font-body font-[510] text-sm sm:text-lg" ref={boxRef}>
                                <Link href="login">
                                    <button
                                        className="px-2.5 py-2 sm:px-3 sm:py-2 bg rounded-lg text-black dark:text-white hover:scale-105 active:scale-95 transition-all  border-2 border-primary">

                                        Log In
                                    </button>
                                </Link>
                                <Link href="signup">
                                    <button
                                        className="px-2.5 py-2 sm:px-3 sm:py-2 bg-primary border border-primary  rounded-lg hover:scale-105 active:scale-95 transition-all">
                                        Sign Up
                                    </button>
                                </Link>
                            </div> :
                            <UserMenu setUserMenuOpen={setUserMenuOpen} userMenuOpen={userMenuOpen} />
                        }
                        <CgMenuRight size={30} className="sm:hidden mr-3 dark:text-white text-black" />
                    </div>
                </div>
            </m.header>
        </>
    )
}