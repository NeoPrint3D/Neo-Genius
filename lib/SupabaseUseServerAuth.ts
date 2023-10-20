import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";


export async function useServerAuth() {
    const supabase = createServerComponentClient({
        cookies,
    });

    const { data: user, error } = await supabase.auth.getUser();
    const auth = user
    return {
        auth,
        error,
        supabase
    }
}