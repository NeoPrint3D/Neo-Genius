import { createContext, useContext, useState } from "react";




const AuthContext = createContext({
    isSignedIn: false,
    setIsSignedIn: (value: boolean) => { },
});

export default function AuthContextProvider({ children }: { children: React.ReactNode }) {
    const [isSignedIn, setIsSignedIn] = useState(false);
    return (
        <AuthContext.Provider
            value={{
                isSignedIn,
                setIsSignedIn,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);