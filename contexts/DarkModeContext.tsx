import { createContext, useContext, useEffect, useState } from "react"


const DarkModeContext = createContext({
    darkMode: false,
    setDarkMode: (darkMode: boolean) => { }
})

export default function DarkModeContextProvider({ children }: { children: React.ReactNode }) {
    const [darkMode, setDarkMode] = useState(false)


    useEffect(() => {
        const localStorageDarkMode = localStorage.getItem("darkMode")
        console.log(localStorageDarkMode)
        setDarkMode(localStorageDarkMode === "true")

        //set the html tag to dark have the dark
        if (localStorageDarkMode === "true") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode))
        if (darkMode) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [darkMode])



    return (
        <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}

export const useDarkMode = () => useContext(DarkModeContext)