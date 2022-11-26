import React from "react";
import { useMobileMenu } from "../../../contexts/MenuContexts";


export default function Hamburger() {
    const { isMobileMenuOpen, setIsMobileMenuOpen } = useMobileMenu();
    return (
        <div
            aria-label={"Hamburger Menu"}
            data-testid="sling"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            role="button"
            style={{
                cursor: "pointer",
                height: "48px",
                position: "relative",
                transition: "0.4s cubic-bezier(0, 0, 0, 1)",
                userSelect: "none",
                width: "48px",
                rotate: "180deg",
                transform: `${isMobileMenuOpen ? "rotateY(180deg)" : "none"}`,
            }}
            tabIndex={0}
        >
            <div
                style={{
                    height: "3px",
                    left: "8px",
                    position: "absolute",
                    width: `${isMobileMenuOpen ? "36px" : "28.8px"}`,
                    top: "11.5px",
                    transition: "0.4s cubic-bezier(0, 0, 0, 1)",
                    transform: `${isMobileMenuOpen ? "rotate(45deg) translate(7.7711818672px, 7.7711818672px)" : "none"}`,
                }}
                className="bg-black dark:bg-white"
            />

            <div
                style={{
                    height: "3px",
                    left: "8px",
                    position: "absolute",
                    width: "20.5714285714px",
                    top: "22.5px",
                    transition: "0.4s cubic-bezier(0, 0, 0, 1)",
                    transform: `${isMobileMenuOpen ? "scale(0, 1) translate(155.423637344px, 0)" : "none"}`,
                }}
                className="bg-black dark:bg-white"
            />

            <div
                style={{
                    height: "3px",
                    left: "8px",
                    position: "absolute",
                    width: "36px",
                    top: "33.5px",
                    transition: "0.4s cubic-bezier(0, 0, 0, 1)",
                    transform: `${isMobileMenuOpen ? "rotate(-45deg) translate(7.7711818672px, -7.7711818672px)" : "none"}`,
                }}
                className="bg-black dark:bg-white"
            />
        </div>
    );
}