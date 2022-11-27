import { AnimatePresence, LayoutGroup, m } from "framer-motion";
import { forwardRef, ReactElement, useState } from "react";
import { useDarkMode } from "../../contexts/MenuContexts";


interface InputProps {
    props?: React.HTMLProps<HTMLInputElement>;
    filler: string;
    icon?: ReactElement;
    customClass?: string;
}



const Input = forwardRef<HTMLInputElement, InputProps>(({ props, filler, icon, customClass }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const { darkMode } = useDarkMode();

    return (
        <div className={customClass || ""} >
            <div className="flex group items-center rounded-lg bg-inherit border-2 border-black dark:border-white  transition-colors duration-700 h-full">
                <LayoutGroup>
                    <m.p
                        style={{
                            pointerEvents: "none",
                        }}
                        animate={{
                            opacity: isFocused ? 0 : 1,
                            color: isFocused ? "#fff" : darkMode ? "#d6d6d6ff" : "#8a8c8f",
                        }}
                        transition={{
                            duration: 0.25
                        }}
                        className="absolute font-main px-3 py-0.5 rounded-lg "  >
                        {filler}
                    </m.p>
                </LayoutGroup>
                <input  {...props} ref={ref} className="bg-transparent pl-2 py-2 rounded outline-none w-full h-full" onFocus={() => setIsFocused(true)} onBlur={(e) => setIsFocused(e.target.value ? true : false)} />
                {icon &&
                    <div className="flex justify-end transition-colors duration-300 w-fit">
                        <div className="p-1 mr-1 rounded-full ">
                            {icon}
                        </div>
                    </div>
                }
            </div>
        </div >
    );
});


Input.displayName = "Input";

export default Input;

