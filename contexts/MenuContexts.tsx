import { createContext, useContext, useEffect, useState } from "react";



interface MobileMenuContextProps {
    isMobileMenuOpen: boolean
    setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DarkModeContext = createContext({
    darkMode: true,
    setDarkMode: (darkMode: boolean) => { }
});
const MobileMenuContext = createContext<MobileMenuContextProps>({
    isMobileMenuOpen: false,
    setIsMobileMenuOpen: null as unknown as React.Dispatch<React.SetStateAction<boolean>>
});

export default function MenuContextProvider({ children }: { children: React.ReactNode }) {
    const [darkMode, setDarkMode] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


    useEffect(() => {
        const localStorageDarkMode = localStorage.getItem("darkMode");
        console.log(localStorageDarkMode);
        setDarkMode(localStorageDarkMode === "true");

        //set the html tag to dark have the dark
        if (localStorageDarkMode === "true") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);



    return (
        <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
            <MobileMenuContext.Provider value={{ isMobileMenuOpen, setIsMobileMenuOpen }}>
                {children}
            </MobileMenuContext.Provider>
        </DarkModeContext.Provider>
    );
}

export const useDarkMode = () => useContext(DarkModeContext);
export const useMobileMenu = () => useContext(MobileMenuContext);