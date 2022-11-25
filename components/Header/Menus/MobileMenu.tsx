import Link from "next/link"
import { useState } from "react"
import { useDarkMode } from "../../../contexts/DarkModeContext"
import Hamburger from "../../Hamburger"

export default function MobileMenu() {
    const [menuOpen, setMenuOpen] = useState(false)
    const { darkMode } = useDarkMode()
    return (
        <div className="flex gap-2 sm:gap-3 justify-end items-center font-body font-semibold text-white dark:text-[#2f2e3e] w-full ssm:w-[30%] ">
            <Link href="/signup">
                <button
                    className="px-2.5 py-2 sm:px-3 sm:py-2 bg-primary rounded-lg hover:scale-105 active:scale-95 transition-all">
                    Sign Up
                </button>
            </Link>
            <Hamburger color={darkMode ? "#fff" : "#000"} toggled={menuOpen} toggle={setMenuOpen} />
        </div>
    )
}