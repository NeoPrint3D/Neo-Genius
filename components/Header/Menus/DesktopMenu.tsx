import { AnimatePresence, m } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";
import { CgDarkMode } from "react-icons/cg";
import { GoSearch } from "react-icons/go";
import { useWindowSize } from "react-use";
import { useDarkMode } from "../../../contexts/MenuContexts";
import { UserMenu } from "./UserMenu";

interface DesktopMenuProps {
    isSearchFocused: boolean
    setIsSearchFocused: React.Dispatch<React.SetStateAction<boolean>>
    searchQuery: string
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}


export default function DesktopMenu({ isSearchFocused, setIsSearchFocused, searchQuery, setSearchQuery }: DesktopMenuProps) {
    const router = useRouter();
    const { darkMode, setDarkMode } = useDarkMode();
    const { width } = useWindowSize();
    const searchBarParentRef = useRef<HTMLDivElement>(null);
    const boxRef = useRef<HTMLDivElement>(null);
    const isSignedIn = false;
    const [elementWidths, setElementWidths] = useState({
        search: 0,
        nav: 0,
    });

    function handleSearch(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        router.push(`/search?query=${searchQuery}`);
    }

    useEffect(() => {
        setElementWidths({
            search: searchBarParentRef.current?.offsetWidth || 0,
            nav: boxRef.current?.offsetWidth || 0,
        });

    }, [width, isSignedIn]);



    return (
        <>
            <div className="hidden sm:flex justify-center items-center w-[60%]" ref={searchBarParentRef}>
                <AnimatePresence>
                    {isSearchFocused && (
                        <m.form
                            className={"h-10 text-xl font-body font-semibold bg-white text-black "}
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
            <div className="hidden sm:flex gap-2 sm:gap-3 justify-end items-center font-main font-[600] text-white w-[30%] ">
                <m.button
                    onClick={() => { setIsSearchFocused(true); }}
                    className="flex justify-center items-center shadow-2xl bg-primary p-2 sm:p-3 rounded-full"
                    animate={{
                        x: !isSearchFocused ? 0 : isSignedIn ? `calc(-${elementWidths.search}px + ${elementWidths.nav}px + 18rem)` : `calc(-${elementWidths.search}px + ${elementWidths.nav}px + 15.25rem)`,
                        rotate: !isSearchFocused ? 0 : width < 768 ? 360 : 360 * 2,
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
                    className='flex justify-center items-center p-2 sm:p-3 shadow-2xl rounded-full'
                    onClick={() => setDarkMode(!darkMode)}
                    initial={{ backgroundColor: "#000" }}
                    animate={{
                        backgroundColor: darkMode ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 1)",
                        rotate: darkMode ? 360 : 0,
                    }}

                >
                    <CgDarkMode className='dark:text-black' size={20} />
                </m.button>
                {!isSignedIn ?
                    <div className="flex items-center gap-3 font-body font-semibold text-sm sm:text-lg mr-3" ref={boxRef}>
                        <Link href="/login">
                            <button className="px-2.5 py-2 sm:px-3 sm:py-2 bg rounded-lg text-black dark:text-white bg-white dark:bg-base-black dark:shadow-white/5 dark:shadow-xl shadow-2xl hover:scale-105 active:scale-95 transition-all">
                                Log In
                            </button>
                        </Link>
                        <Link href="/signup">
                            <button
                                className="px-2.5 py-2 sm:px-3 sm:py-2 bg-primary  rounded-lg hover:scale-105 dark:shadow-white/5 dark:shadow-xl shadow-2xl active:scale-95 transition-all">
                                Sign Up
                            </button>
                        </Link>
                    </div> :
                    <UserMenu />
                }
            </div>
        </>
    );
}
