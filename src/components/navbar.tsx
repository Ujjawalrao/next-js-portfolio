"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-10 w-full z-[999] px-2 sm:px-4"
    >
      <div className="bg-black/75 backdrop-hue-rotate-15 backdrop-sepia-75 backdrop-blur-[6px] border-0 border-gray-600/50 rounded-2xl px-2 sm:px-6 md:px-8 py-2 sm:py-3 flex flex-row justify-between items-center shadow-xl shadow-gray-100/10 max-w-5xl mx-auto">
        
        {/* Logo */}
        <span className=" h-8 w-8 sm:h-10 sm:w-10 overflow-hidden cursor-pointer rounded-full">
          <img
            className="w-full h-full object-cover hover:scale-125 transition-transform duration-200 ease-linear"
            src="https://i.pinimg.com/736x/1f/c0/3a/1fc03a3035517ae69e7837434e53c1ff.jpg"
            alt="logo"
          />
        </span>

        {/* Navigation Links */}
        <ul className="flex flex-row justify-center items-center gap-2 sm:gap-4 md:gap-6">
          <Link href="/">
            <li className="list-none hover:text-blue-400 duration-300 ease-in-out text-white hover:underline cursor-pointer px-2 sm:px-3 py-1 sm:py-2 rounded hover:bg-gray-800 text-xs sm:text-base">
              Home
            </li>
          </Link>
          <Link href="/website">
            <li className="list-none hover:text-blue-400 duration-300 ease-in-out text-white hover:underline cursor-pointer px-2 sm:px-3 py-1 sm:py-2 rounded hover:bg-gray-800 text-xs sm:text-base">
              Websites
            </li>
          </Link>
        </ul>

        {/* Contact Button */}
        <div>
          <li className="list-none px-2 sm:px-3 md:px-4 py-1 sm:py-2 border border-gray-400 text-white rounded-xl hover:bg-gray-800 bg-[#121212] transition cursor-pointer text-center text-xs sm:text-base">
            Let's Talk ↗
          </li>
        </div>

      </div>
    </motion.nav>
  );
}

export default Navbar;