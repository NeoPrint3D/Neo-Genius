import { AnimatePresence, LayoutGroup, m } from "framer-motion";
import { forwardRef, ReactElement, useState } from "react";
import { useDarkMode } from "../../contexts/MenuContexts";


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    props?: React.HTMLProps<HTMLInputElement>;
    filler: string;
    icon?: ReactElement;
    customClass?: string;
}


export default function CustomInput({ props, filler, icon, customClass }: InputProps) {
    const [focused, setFocused] = useState(false);
    const { darkMode } = useDarkMode();
    return (
        <div className={customClass || ""}>
            <div className="flex group items-center outline rounded-md bg-inherit  outline-2 outline-black dark:outline-white  transition-colors duration-700 h-full">
                <LayoutGroup>
                    <m.p
                        style={{
                            pointerEvents: "none",
                        }}
                        animate={{
                            opacity: focused ? 0 : 1,
                            color: focused ? "#fff" : darkMode ? "#d6d6d6ff" : "#292828ff",
                        }}
                        transition={{
                            duration: 0.25
                        }}
                        className="absolute font-main px-1 py-0.5 rounded-lg "  >
                        {filler}
                    </m.p>
                </LayoutGroup>
                <input  {...props} className="bg-transparent pl-2 py-2 rounded outline-none w-full h-full" onFocus={() => setFocused(true)} onBlur={(e) => setFocused(e.target.value ? true : false)} />
                {icon &&
                    <div className="flex justify-end transition-colors duration-300 w-fit">
                        <div className="p-1 mr-1 rounded-full ">
                            {icon}
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}


