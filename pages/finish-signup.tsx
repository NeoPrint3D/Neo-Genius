import { signInWithEmailLink } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { auth } from "../lib/firebase/client";

export default function FinishSignup() {
    const { authRef } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (//see if the router has apiKey and oobCode
            router.query.apiKey &&
            router.query.oobCode) {
            console.log("signing in with email link");
            const email = localStorage.getItem("emailForSignIn");
            signInWithEmailLink(auth, email!, router.asPath).then((result) => {
                console.log("result", result);
                router.push("/");
            });
        }
    }, [router]);


    return (
        <div className="new-page">
            hello
        </div>
    );
}