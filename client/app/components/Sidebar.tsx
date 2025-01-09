"use client";
import clsx from "clsx";
import { LockIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Sidebar = () => {
  return (
    <div
      className={clsx(
        "fixed z-40 flex h-full flex-col justify-between overflow-y-auto bg-white shadow-xl transition-all duration-300 dark:bg-black",
      )}
    >
      <div className="flex h-[100%] w-full flex-col justify-start">
        <div className="text-xl font-bold text-gray-800 dark:text-white">
          HYLIST
        </div>
      </div>
      {/* Team */}
      <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
        <Image src="/logo.png" alt="logo" width={40} height={40} />
        <div>
          <h3 className="text-md font-bold tracking-wide dark:text-gray-200">
            HABEEB TEAM
          </h3>
          <div className="mt-1 flex items-start gap-2">
            <LockIcon className="mt-[0.1rem] h-3 w-3 text-gray-500 dark:text-gray-400" />
            <p className="text-xs text-gray-500">Private</p>
          </div>
        </div>
      </div>
      {/* Navbar Links */}
      <nav className="z-10 w-full"></nav>
    </div>
  );
};

export default Sidebar;
