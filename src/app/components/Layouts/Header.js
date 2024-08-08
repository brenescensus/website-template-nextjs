"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Header() {
  const [header, SetHeader] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  const ScrollHeader = () => {
    if (window.scrollY >= 50) {
      SetHeader(true);
    } else {
      SetHeader(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", ScrollHeader);
    return () => {
      window.addEventListener("scroll", ScrollHeader);
    };
  }, []);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className={
        header? "fixed w-[100%] bg-black text-white "
          : "bg-[transparent] text-black "
      }
    >
      <div className=" headerpx-12 flex flex-row m-auto px-10 items-center justify-between w-full py-10">
        <div className="logo">
             {/* <Image src="/Assets/Images/Logo/brenny-logo.png" width={70} height={70}/>  */}
             </div>
        <div className="menu hidden lg:flex flex-row items-center justify-center">
          {/* <nav className="flex flex-row items-center justify-between mx-auto w-full"> */}
          <ul className="flex flex-row items-center justify-center">
            <li className="mx-4">
              <Link href="">Home</Link>{" "}
            </li>
            <li className="mx-4">
              {" "}
              <Link href="">Home</Link>
            </li>
            <li className="mx-4">
              {" "}
              <Link href="">Home</Link>
            </li>
            <li className="mx-4">
              {" "}
              <Link href="">Home</Link>
            </li>
            <li className="mx-4">
              {" "}
              <Link href="">Home</Link>
            </li>
          </ul>
          {/* </nav> */}
        </div>
        <button className="lg:hidden text-2xl" onClick={toggleMenu}>
          &#9776;
        </button>
      </div>
      {menuOpen && (
        <div className="lg:hidden bg-amber-400 text-white w-full px-12 py-4">
          <ul className="flex flex-col items-start">
            <li className="py-2 w-full">
              <Link href="/">Home</Link>
            </li>
            <li className="py-2 w-full">
              <Link href="/about">About</Link>
            </li>
            <li className="py-2 w-full">
              <Link href="/services">Services</Link>
            </li>
            <li className="py-2 w-full">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="py-2 w-full">
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
    // </div>
  );
}
