"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

interface BaseInputProps {
  customClass?: string;
  value?: string;
  type?: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  maxLength?: number;
  minLength?: number;
  linkHref?: string;
  linkContent?: string;
}

export default function BaseInput({
  customClass = "h-12 w-full",
  type = "text",
  placeholder = "",
  label = "",
  required = false,
  disabled = false,
  maxLength = 64,
  minLength = 0,
  linkHref = "",
  linkContent = "",
}: BaseInputProps) {
  const [value, setValue] = useState("");
  return (
    <div className={`group flex flex-col ${customClass}`}>
      <label
        htmlFor={label}
        className="text-md font-semibold font-poppins text-black/60 group-focus-within:text-black/80 transition-all duration-300"
      >
        {label}
      </label>
      <input
        className={`rounded-lg border-[1.5px] border-black/20 focus:border-black/80 font-poppins px-3 py-2 transition-all duration-300 focus:shadow-sm`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required={required}
        disabled={disabled}
        maxLength={maxLength}
        minLength={minLength}
      />

      {linkContent && (
        <div className="flex justify-end">
          <Link href={linkHref} className="font-poppins text-sm">
            {linkContent}
          </Link>
        </div>
      )}
    </div>
  );
}
