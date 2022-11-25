import React, { CSSProperties, FunctionComponent, useState } from "react";



interface BurgerProps {
    color?: string;
    direction?: "right" | "left";
    distance?: "sm" | "md" | "lg";
    duration?: number;
    easing?: string;
    hideOutline?: boolean;
    label?: string;
    lines?: 1 | 2 | 3;
    onToggle?: (toggled: boolean) => void;
    render?: (props: BurgerProps) => JSX.Element;
    rounded?: boolean;
    size?: number;
    toggle?: React.Dispatch<React.SetStateAction<boolean>>;
    toggled?: boolean;
}

export const Sling = (({
    color = "currentColor",
    direction = "right",
    easing = "cubic-bezier(0, 0, 0, 1)",
    label = "",
    onToggle,
    toggle,
    toggled,
}: BurgerProps) => {

    const [toggledInternal, toggleInternal] = useState(false);

    const width = 36;
    const room = 8;


    const margin = 8;

    const topOffset = 11.5;

    const move = 7.7711818672;
    const time = .4;




    const toggleFunction = toggle || toggleInternal;
    const isToggled = toggled !== undefined ? toggled : toggledInternal;
    const isLeft = false;

    const handler = () => {
        toggleFunction(!isToggled);
        if (typeof onToggle === "function") onToggle(!isToggled);
    };


    return (
        <div style={{ rotate: "180deg" }}>
            <div
                className=""
                aria-label={label}
                aria-expanded={isToggled}
                data-testid="sling"
                onClick={handler}
                onKeyUp={(e) => e.key === "Enter" && handler()}
                role="button"
                style={{
                    cursor: "pointer",
                    height: "48px",
                    position: "relative",
                    transition: `${time}s ${easing}`,
                    userSelect: "none",
                    width: "48px",
                    transform: `${isToggled
                        ? `rotateY(${180 * (isLeft ? -1 : 1)}deg)`
                        : "none"
                        }`,
                }}
                tabIndex={0}
            >
                <div style={{
                    background: color,
                    height: "3px",
                    left: `${room}px`,
                    position: "absolute",
                    width: `${isToggled ? `${width}px` : `${width / 1.25}px`}`,
                    top: `${topOffset}px`,
                    transformOrigin: "",
                    transform: `${isToggled
                        ? `rotate(45deg) translate(${move}px, ${move}px)`
                        : "none"
                        }`,
                }} />

                <div style={{
                    background: color,
                    height: "3px",
                    left: `${room}px`,
                    position: "absolute",
                    width: "20.5714285714px",
                    top: `${topOffset + 3 + margin}px`,
                    transition: `${time}s ${easing}`,
                    transform: `${isToggled
                        ? `scale(0, 1) translate(${(move * 20) * (isLeft ? -1 : 1)}px, 0)`
                        : "none"
                        }`,
                }} />

                <div style={{
                    background: color,
                    height: "3px",
                    left: `${room}px`,
                    position: "absolute",
                    width: `${width}px`,
                    top: `${topOffset + 3 * 2 + margin * 2}px`,
                    transition: `${time}s ${easing}`,
                    transform: `${isToggled
                        ? `rotate(${45 * (isLeft ? 1 : -1)}deg) translate(${move * (isLeft ? -1 : 1)}px, ${move * -1}px)`
                        : "none"
                        }`,
                }} />
            </div>
        </div>
    );
});