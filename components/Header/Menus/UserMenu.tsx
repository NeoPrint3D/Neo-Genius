import { m, AnimatePresence } from "framer-motion";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import Image from "next/image";
import { drew } from "../../../fake-data/users/drew";
import { useClickAway, useWindowSize } from "react-use";
export function UserMenu() {
  const [userMenuOpen, setUserMenuOpen] = useState(true);
  const userMenuRef = React.useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();
  useClickAway(userMenuRef, () => {
    setUserMenuOpen(false);
  });


  return (
    <div className={width < 768 ? "right-0 fixed z-[100] mr-14" : "relative mr-3"}>
      <div className="flex items-center h-20">
        <div className="" ref={userMenuRef}>
          <m.button className="flex w-full justify-end" onClick={() => setUserMenuOpen(!userMenuOpen)}>
            <Image className="rounded-full w-12 h-12" src={drew.profilePicture} alt="Profile Picture" width={20} height={20} />
          </m.button>
        </div>
        <AnimatePresence>
          {userMenuOpen &&
            <m.div
              className="bg-base-light/70  border-2 dark:border-black border-white  text-white dark:text-black shadow-2xl  backdrop-blur-xl w-40 p-1 rounded-xl z-[50] absolute mt-48 right-0"
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
                <div className="flex mb-2 border-b-2 dark:border-black border-white w-[95%]">
                  <div className="mx-auto">
                    <h1 className="text-xl">
                      {"Username"}
                    </h1>
                    <h2 className="text-gray-700 dark:text-gray-200 text-sm">
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

    </div>
  );
}
