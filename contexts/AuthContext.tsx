import { createContext } from "react";


const AuthContext = createContext(null);

export default function AuthContextProvider({ children }: { children: React.ReactNode }) {
    return (
        <AuthContext.Provider value={null}>
            {children}
        </AuthContext.Provider>
    )
}