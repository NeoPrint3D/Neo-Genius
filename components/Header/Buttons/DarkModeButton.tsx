import { m } from "framer-motion";
import React from "react";
import { CgDarkMode } from "react-icons/cg";
import { useDarkMode } from "../../../contexts/MenuContexts";
export function DarkModeButton({ size = 20 }: { size?: number }) {
    const { darkMode, setDarkMode } = useDarkMode();


    return (
        <m.button className={"flex justify-center items-center p-2 sm:p-3 shadow-2xl rounded-full"}
            onClick={() => {
                setDarkMode(!darkMode);
                localStorage.setItem("darkMode", JSON.stringify(!darkMode));
            }}
            initial={{ backgroundColor: "#000" }}
            animate={{
                backgroundColor: darkMode ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 1)",
                rotate: darkMode ? 360 : 0
            }}
        >
            <CgDarkMode className='text-white dark:text-black' size={size} />
        </m.button >
    );
}
