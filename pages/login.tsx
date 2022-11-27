import Input from "../components/custom/Input";
import { HiOutlineMail } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";
import { m } from "framer-motion";
import { z } from "zod";
import { GoogleAuthProvider, sendSignInLinkToEmail, signInWithPopup } from "firebase/auth";
import { auth } from "../lib/firebase/client";
import { useRouter } from "next/router";

const actionCodeSettings = {
    url: "http://localhost:3000/signup",
    handleCodeInApp: true,
};
export default function SignUpPage() {
    const router = useRouter();
    const emailRef = useRef<HTMLInputElement>(null);

    const emailSchema = z.string().email();


    async function sendVerificationEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (emailRef.current?.value && emailSchema.safeParse(emailRef.current?.value).success) {
            // Send verification email
            // alert("Verification email sent!");
            console.log("Verification email sent!", emailRef.current.value);
            sendSignInLinkToEmail(auth, emailRef.current?.value, actionCodeSettings).then((result) => {
                console.log("result", result);
                window.localStorage.setItem("emailForSignIn", "test");
                router.push("/signup");
            }).catch((error) => {
                console.log("error", error);
            });
            localStorage.setItem("emailForSignIn", emailRef.current.value);


            emailRef.current.value = "";

        } else {
            alert("Invalid email");
            emailRef.current?.focus();
        }
    }

    async function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
        router.push("finish-signup");
    }





    //design a signup page for me with a email input and a place for social sign ins
    return (
        <div className="grid lg:grid-cols-5 justify-center items-center  h-screen w-screen font-main  ">
            <div className="flex items-center h-full w-screen lg:w-full lg:col-span-2 bg-gradient-to-tr bg-white from-[#f7b167] via-[#fa7dbd]/90 to-[#f7b167] dark:from-[#087ee1]/90 dark:via-[#98fcbd]/70 dark:to-[#087ee1]/90 lg:bg-none lg:bg-transparent">
                <div className="flex flex-col items-center w-full ">
                    <div className="flex flex-col gap-9  bg-base-light md:scale-[1.2] lg:scale-100 lg:bg-transparent lg:dark:bg-transparent dark:bg-base-dark   max-w-sm sm:max-w-md lg:max-w-lg w-full px-10 sm:px-20 py-10 rounded-3xl shadow-base-primary-light dark:shadow-base-primary-dark lg:shadow-none">
                        <div className="flex flex-col gap-5">
                            <h1 className="text-5xl font-bold text-left">Log In</h1>
                            <p className="text-[1rem] font-[550] font-body text-left text-[#8a8c8f] dark:text-gray-200 ">Welcome back! Sign in to your account</p>
                        </div>
                        <form className="flex flex-col justify-center gap-5 items-center" onSubmit={(e) => sendVerificationEmail(e)}>
                            <Input filler="Email" icon={<HiOutlineMail size={24} />} ref={emailRef} customClass="w-full h-12 text-lg" />
                            <m.button className="bg-black text-white dark:bg-white dark:text-black font-main  font-semibold text-xl w-full py-3 rounded-lg shadow-2xl dark:shadow-xl dark:shadow-white/10 "

                                whileHover={{
                                    scale: 1.05,
                                }}
                                whileTap={{
                                    scale: 0.95,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 30,
                                }}
                            >Log In</m.button>
                        </form>
                        <div className="grid grid-cols-8 items-center">
                            <div className="w-full dark:bg-gray-50 bg-gray-700 h-1 rounded-l-full col-span-3 " />
                            <h3 className="text-center font-body text-2xl col-span-2">Or</h3>
                            <div className="w-full dark:bg-gray-50 bg-gray-700 h-1 rounded-r-full col-span-3" />
                        </div>
                        <div>
                            <m.button className=" bg-white text-black dark:bg-black dark:text-white font-main  font-semibold text-xl w-full py-3 rounded-lg shadow-2xl dark:shadow-xl dark:shadow-white/10 "
                                whileHover={{
                                    scale: 1.05,
                                }}
                                whileTap={{
                                    scale: 0.95,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 30,
                                }}
                                onClick={() => signInWithGoogle()}
                            >Log In with Google</m.button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden shadow-base-primary lg:flex items-center justify-center w-full h-full col-span-3 rounded-l-[3rem] bg-gradient-to-br from-[#f7b167] via-[#fa7dbd] to-[#f7b167] dark:from-[#087ee1]/90 dark:via-[rgb(40,246,115)]/70 dark:to-[#087ee1]/90 bg-white">
                <h1
                    className="text-6xl font-genius text-center text-white "
                    style={{ textShadow: "0px 0px 50px rgba(247, 177, 10, .35)" }}
                >
                    Ready To Become A Genius
                </h1>
            </div>
        </div >
    );
}