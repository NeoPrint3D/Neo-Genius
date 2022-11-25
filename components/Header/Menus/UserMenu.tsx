import { m, AnimatePresence } from "framer-motion";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import Image from "next/image";
import { drew } from "../../../fake-data/users/drew";
import { useClickAway } from "react-use";
export function UserMenu() {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = React.useRef<HTMLDivElement>(null);

  useClickAway(userMenuRef, () => {
    setUserMenuOpen(false);
  });


  return (
    <div ref={userMenuRef} className="relative">
      <m.button className="flex w-full justify-end" onClick={() => setUserMenuOpen(!userMenuOpen)}>
        <Image className="rounded-full w-12 h-12" src={drew.profilePicture} alt="Profile Picture" width={20} height={20} />
      </m.button>
      <AnimatePresence>
        {userMenuOpen &&
          <m.div
            className="bg-white/20 border border-primary text-black shadow-2xl  backdrop-blur-xl w-40 p-1 rounded-xl z-[20000] absolute mt-3 right-0"
            initial={{ scale: 0, x: 100 }}
            animate={{ scale: 1, x: 0 }}
            exit={{ scale: 0, x: 100 }}
            transition={{
              x: {
                type: "spring",
                stiffness: 100,
                damping: 10
              },
              scale: {
                type: "tween",
                duration: 0.375
              }
            }}>
            <div className="flex flex-col items-center font-logo last:mb-1">
              <div className="flex mb-2 border-b-2 border-primary w-full">
                <div className="mx-auto">
                  <h1 className="text-xl">
                    {"Username"}
                  </h1>
                  <h2 className="text-gray-700 text-sm">
                    {"Email"}
                  </h2>
                </div>
              </div>
              <Link href={"/signup?action=signout"} className="text-left transition-color duration-300 p-2.5 hover:bg-primary/20 rounded-lg w-full text-xl">
                Sign Out
              </Link>
            </div>

          </m.div>}
      </AnimatePresence>
    </div>
  );
}
