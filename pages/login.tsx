import Input from "../components/custom/Input";
import { HiOutlineMail } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";
import { m } from "framer-motion";
import { useWindowSize } from "react-use";
import { useDarkMode } from "../contexts/MenuContexts";

const mobileSylesObj = {
    backgroundColor: "#fff",
    backgroundImage: "linear-gradient(135deg,rgb(247, 177, 103) 0%, rgb(239, 68, 68, .6) 25% ,rgb(250, 125, 189) 50%,rgb(239, 68, 68, .6) 75%, rgb(247, 177, 103) 100%)",
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
};

export default function SignUpPage() {
    const emailRef = useRef<HTMLInputElement>(null);
    const [mobileSyles, setMobileStyles] = useState<any>(mobileSylesObj);
    const { width } = useWindowSize();
    const { darkMode } = useDarkMode();


    useEffect(() => {
        setMobileStyles(width < 1024 ? mobileSylesObj : {});
    }, [width]);




    function sendVerificationEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (emailRef.current) {
            console.log(emailRef.current.value);
        }
    }





    //design a signup page for me with a email input and a place for social sign ins
    return (
        <div className="grid lg:grid-cols-5 justify-center items-center  h-screen w-screen font-main  ">
            <div className="flex items-center h-full w-screen lg:w-full lg:col-span-2 "
                style={width < 1024 ? mobileSyles : {}}
            >

                <div className="flex flex-col items-center w-full ">
                    <div className="flex flex-col gap-9  bg-base-white/70 sm:scale-[1.2] lg:scale-100 lg:bg-transparent lg:dark:bg-transparent dark:bg-base-black/70 max-w-md lg:max-w-lg w-full px-10 sm:px-20 py-10 rounded-3xl shadow-2xl lg:shadow-none"

                        style={{
                            "boxShadow": width < 1024 ? "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(245, 218, 191, 0.35) 0px -2px 6px 0px inset" : "none"
                        }}
                    >
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
                            >Log In with Google</m.button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="hidden lg:flex items-center justify-center w-full h-full col-span-3 rounded-l-3xl "
                style={{
                    backgroundColor: "#fff",
                    backgroundImage: "linear-gradient(135deg,rgb(247, 177, 103) 0%, rgb(239, 68, 68, .6) 25% ,rgb(250, 125, 189) 50%,rgb(239, 68, 68, .6) 75%, rgb(247, 177, 103) 100%)",
                    boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
                }}
            >
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