import { onAuthStateChanged, User } from "firebase/auth";
import { collection, getDocs, limit, query, where } from "firebase/firestore/lite";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, firetoreLite } from "../lib/firebase/client";




interface GeniusUser {
    uid: string
    username: string
    email: string
    photoURL: string
    geniuses: string[]
}

interface AuthContextProps {
    isSignedIn: boolean
    user: GeniusUser | null
    authRef: User | null
}

const AuthContext = createContext<AuthContextProps>({
    isSignedIn: false,
    user: null,
    authRef: null,
});

export default function AuthContextProvider({ children }: { children: React.ReactNode }) {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [authRef, setAuthRef] = useState<User | null>(null);
    const [user, setUser] = useState<GeniusUser | null>(null);


    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, async (user) => {
    //         console.log("user", user);
    //         if (!auth.currentUser) { setIsSignedIn(false); setAuthRef(null); setUser(null); return; }
    //         const potentialUser = (await getDocs(query(collection(firetoreLite, "users"), where("email", "==", auth.currentUser.email), limit(1)))).docs[0]?.data();
    //         if (!potentialUser) { setIsSignedIn(false); return; }
    //         setIsSignedIn(true);
    //         setUser(potentialUser as GeniusUser);
    //     });
    // }, []);




    return (
        <AuthContext.Provider
            value={{
                isSignedIn,
                user,
                authRef,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);