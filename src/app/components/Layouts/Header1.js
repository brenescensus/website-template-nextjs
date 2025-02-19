"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MenuData } from "@/app/data/menudata";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Header() {
  const { scrollY } = useScroll();
  const bgColor = useTransform(scrollY, [0, 50], ["#9e9e9e", "#f59e0b"]); // Changes to amber-400

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.div
      className="sticky top-0 w-full z-20 py-5 transition-colors duration-300"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex flex-row items-center justify-between px-10">
        <div className="logo">
          <h1 className="text-white text-4xl font-extrabold">My Logo Here</h1>
        </div>
        <div className="hidden lg:flex flex-row items-center">
          <ul className="flex flex-row items-center">
            {MenuData.map((data, i) => (
              <li key={i} className="mx-4 text-white hover:text-black">
                <Link href={data.link}>{data.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <button className="lg:hidden text-2xl text-white" onClick={() => setMenuOpen(!menuOpen)}>
          &#9776;
        </button>
      </div>
      {menuOpen && (
        <div className="lg:hidden bg-black text-white w-full px-12 py-4">
          <ul className="flex flex-col items-start">
            {MenuData.map((data, i) => (
              <li key={i} className="py-2 w-full">
                <Link href={data.link}>{data.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
}
