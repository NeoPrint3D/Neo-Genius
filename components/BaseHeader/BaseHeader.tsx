import Link from "next/link";
import Wrapper from "./Wrapper";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { useServerAuth } from "@/lib/SupabaseUseServerAuth";
import BaseHeaderUserDropdown from "../BaseHeaderUserDropdown/BaseHeaderUserDropdown";

export default async function BaseHeader() {
  const { auth } = await useServerAuth();

  return (
    <Wrapper>
      <Link href="/" className="font-mono text-4xl font-black">
        Neo Genius
      </Link>
      <div></div>
      <div className="flex items-center justify-end gap-5">
        {auth?.user ? (
          <BaseHeaderUserDropdown />
        ) : (
          <>
            <Link href="/auth/login" className="font-poppins text-xl">
              Login
            </Link>
            <Link
              href="/auth/signup"
              className="rounded-[1.5rem] bg-black px-5 py-2 font-poppins text-xl text-white  shadow-xl"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </Wrapper>
  );
}
