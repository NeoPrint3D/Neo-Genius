"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import { useAuth } from "../ProviderAuth/ProviderAuth";
import { useEffect } from "react";
export default async function BaseHeaderUserDropdown() {
  const { user } = useAuth();

  return (
    <div>
      <div>{}</div>
    </div>
  );
}
