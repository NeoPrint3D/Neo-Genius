import Image from "next/image"
import Link from "next/link"
export default function Header() {
    return (
        <header className='grid grid-cols-3 items-center bg-[#0b132b]/60 h-20'>
            <Link href="/">
                <Image src="/logo.png" alt="Neo Genius Logo" width={512} height={512} className="h-20 w-20" />
            </Link>
            <div>

            </div>
            <div className="flex justify-end gap-5 font-main text-white mr-5">
                <Link href={"/signin"} className="bg-[#00e2f4] px-3 py-3 rounded">
                    Sign In
                </Link>
                <Link href={"/signup"}>
                    Sign Up
                </Link>
            </div>
        </header>
    )
}