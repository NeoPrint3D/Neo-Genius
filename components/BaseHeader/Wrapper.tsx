"use client";

import { usePathname } from "next/navigation";
import { motion, Variants } from "framer-motion";
import { useWindowScroll } from "react-use";
import { useMemo } from "react";
export default function Wrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { y } = useWindowScroll();

  const excluededPaths = useMemo(() => {
    return ["/auth/login", "/auth/signup"];
  }, []);
  // see if the user scrolled down

  const variants: Variants = {
    hidden: {
      backdropFilter: "blur(0px) hue-rotate(0deg)",
      width: "100vw",
      boxShadow: "rgba(0, 0, 0, 0) 0px 3px 6px, rgba(0, 0, 0, 0) 0px 3px 6px",
    },
    visible: {
      backdropFilter: "blur(20px) hue-rotate(-45deg)",
      width: "97.5vw",
      boxShadow:
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
    },
  };

  return !excluededPaths.includes(pathname) ? (
    <div className="flex w-full justify-center fixed">
      <motion.header
        initial={false}
        className="h-20 rounded-3xl w-full grid grid-cols-3 items-center px-3 mt-5"
        animate={y > 0 ? "visible" : "hidden"}
        variants={variants}
      >
        {children}
      </motion.header>
    </div>
  ) : (
    <></>
  );
}
