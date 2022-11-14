import { useScroll, useWindowSize } from "react-use"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { AnimatePresence, m, Variants } from "framer-motion"
import { IoSearch } from "react-icons/io5"
import { useRouter } from "next/router"

export default function Header() {
    const router = useRouter()
    const [isScrolled, setIsScrolled] = useState(false)
    const [isSearchedFocused, setIsSearchedFocused] = useState(false)
    const boxRef = useRef<HTMLDivElement>(null)
    const searchButtonRef = useRef<HTMLButtonElement>(null)
    const { width } = useWindowSize()
    const [boxWidth, setBoxWidth] = useState(0)
    const isSignedIn = false






    useEffect(() => {
        setBoxWidth(boxRef.current?.clientWidth || 0)
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
        <m.header
            animate={{
                backdropFilter: isScrolled ? "blur(5px)" : "blur(0px)",
                backgroundColor: isScrolled ? "rgba(247, 178, 103,0.3)" : "rgba(255,255,255,0)",
            }}
            transition={{
                duration: 0.5,
                ease: "easeInOut",

            }}
            className="w-full z-50 fixed"

        >
            <div className={`grid grid-cols-5 h-20 w-full`}>

                <Link href="/">
                    <Image src="/logo.png" alt="Neo Genius Logo" width={512} height={512} className="h-20 w-20" />
                </Link>
                <div className="flex justify-center items-center w-full col-span-3">
                    <AnimatePresence>
                        {isSearchedFocused && (
                            <m.div
                                className={"w-52 h-10 bg-gray-200 text-black text-xl font-main"}
                                initial={{ width: 0, paddingLeft: 0, paddingRight: 0 }}
                                animate={{
                                    width: "20rem",
                                    paddingLeft: "1rem",
                                    paddingRight: "1rem",
                                    borderRadius: "50rem",
                                    transition: {
                                        ease: "easeInOut",

                                    },
                                }}
                                exit={{
                                    width: 0,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    borderRadius: 0,
                                    transition: {
                                        ease: "easeInOut",
                                        duration: 0.5,
                                    },
                                }}
                            >
                                <input
                                    className={"w-[calc(100%-1.75rem)] h-full bg-transparent outline-none"}
                                    placeholder={"Search"}
                                />
                            </m.div>
                        )}
                    </AnimatePresence>
                </div>
                <div className="flex justify-end items-center font-main text-white">
                    <m.button
                        ref={searchButtonRef}
                        onClick={() => setIsSearchedFocused(!isSearchedFocused)}
                        className="bg-blue-300 p-3 rounded-full absolute mr-6 right-0"
                        animate={{
                            x: !isSearchedFocused ? -boxWidth : `calc(${-width / 2 + boxWidth}px + 2rem)`,
                            rotate: !isSearchedFocused ? 0 : 360,
                            boxShadow: isSearchedFocused ? "0px 0px 0px 0px rgba(0,0,0,0)" :
                                ["0px 0px 0px 0px rgba(0,0,0,0)", "0px 0px 0px 10px #ccd82633", "0px 0px 0px 20px #ccd82633", "0px 0px 0px 30px #ccd82633", "0px 0px 0px 40px #ccd82633", "0px 0px 0px 50px #ccd82633", "0px 0px 0px 60px #ccd82633", "0px 0px 0px 70px #ccd82633", "0px 0px 0px 80px #ccd82633", "0px 0px 0px 90px #ccd82633", "0px 0px 0px 100px #ccd82633", "0px 0px 0px 110px #ccd82633", "0px 0px 0px 120px #ccd82633", "0px 0px 0px 130px #ccd82633", "0px 0px 0px 140px #ccd82633", "0px 0px 0px 150px #ccd82633", "0px 0px 0px 160px #ccd82633", "0px 0px 0px 170px #ccd82633", "0px 0px 0px 180px #ccd82633", "0px 0px 0px 190px #ccd82633", "0px 0px 0px 200px #ccd82633", "0px 0px 0px 210px #ccd82633", "0px 0px 0px 220px #ccd82633", "0px 0px 0px 230px #ccd82633", "0px 0px 0px 240px #ccd82633", "0px 0px 0px 100px #ccd82633", "0px 0px 0px 50px #ccd82633"]
                        }}
                        transition={{
                            x: {
                                ease: "easeInOut",
                                duration: 0.5,
                            },
                            rotate: {
                                type: "spring",
                                stiffness: 70,
                                damping: 10,
                                duration: 0.75,
                            },
                            boxShadow: {
                                type: "spring",
                                stiffness: 70,
                                damping: 10,
                                delay: 0.75,
                                duration: 0.5,
                            },
                        }}
                    >
                        <IoSearch className="text-black" />
                    </m.button>
                    <div className="flex gap-3 mr-3" ref={boxRef}>
                        <Link href={"/signin"} className="bg-red-500 px-3 py-2 rounded">
                            Sign In
                        </Link>
                        <Link href={"/signup"} className="bg-red-500 px-3 py-2 rounded">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2">
                <m.div
                    animate={{
                        opacity: isScrolled ? 1 : [1, .5, 0],
                        scaleX: isScrolled ? 1 : 0,
                    }}
                    transition={{
                        opacity: { duration: 0.5 },
                        scaleX: { duration: 0.5 },
                    }}

                    style={{
                        transformOrigin: "left",
                    }}
                >
                    <div className="w-full bg-[#ffa69e]/90 h-1" />
                </m.div>
                <m.div
                    animate={{
                        opacity: isScrolled ? 1 : [1, .5, 0],
                        scaleX: isScrolled ? 1 : 0,
                    }}
                    transition={{
                        opacity: { duration: 0.5 },
                        scaleX: { duration: 0.5 },
                    }}

                    style={{
                        transformOrigin: "right",
                    }}
                >
                    <div className="w-full bg-[#ffa69e]/90 h-1" />
                </m.div>
            </div>

        </m.header >
    )
}