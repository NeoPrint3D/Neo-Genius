"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
export default function Wrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // see if the user scrolled down

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        setIsScrolled(window.scrollY > header.clientHeight);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    console.log(isScrolled);

    return () => {};
  }, [isScrolled]);

  const variants: Variants = {
    hidden: { width: "100%" },
    visible: {
      backdropFilter: "blur(20px) hue-rotate(-45deg)",
      width: "97.5%",
      position: pathname !== "/" ? "fixed" : "relative",
      boxShadow:
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
    },
  };
  return (
    <div className="fixed mt-5 flex w-full justify-center">
      <motion.header
        className="grid h-20 w-full grid-cols-2 items-center rounded-3xl p-2 px-5"
        animate={isScrolled ? "visible" : "hidden"}
        variants={variants}
      >
        {children}
      </motion.header>
    </div>
  );
}
