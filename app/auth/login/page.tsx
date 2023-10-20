"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

import type { Database } from "@/lib/SupabaseDB.types";
import BaseInput from "@/components/BaseInput/BaseInput";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  const handleSignIn = async () => {
    const auth = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    router.refresh();
  };
  const main = async () => {
    const user = await supabase.auth.getUser();
    console.log(user);
  };
  useEffect(() => {
    main();
  }, []);

  return (
    <div className="grid grid-cols-5 h-screen">
      <div className="w-full h-screen bg-primary col-span-3"></div>
      <div className="flex flex-col items-center my-7 col-span-2">
        <Image src="/logo.png" alt={""} width={72} height={72} />
        <div className="flex  items-center justify-center w-full">
          <div className="flex flex-col items-center w-full mt-5">
            <h1 className="text-xl font-semibold font-poppins mt-14">
              Ready to become a genius
            </h1>

            <form className="flex flex-col items-center w-full mt-5">
              <BaseInput
                type="email"
                label="Email"
                customClass="w-full max-w-sm mt-5"
              />
              <BaseInput
                type="password"
                label="Password"
                customClass="w-full max-w-sm mt-5"
                linkContent="Forgot Password?"
                linkHref="/auth/forgot-password"
              />

              <button className="rounded-lg bg-black w-full max-w-sm h-12 mt-7 text-white font-poppins">
                Submit
              </button>
            </form>
            <div className="w-[90%] h-0.5 bg-black/20 rounded-full mt-7" />
            <div className="flex justify-center items-center w-full mt-5  gap-3 h-20">
              <h2 className="text-lg font-poppins">Or sign in with</h2>
              <div>
                <FcGoogle height={36} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
