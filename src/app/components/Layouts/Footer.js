import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    // const currentYear = new Date().getFullYear();

    <>
      <footer className=" bg-gray-500 py-3 mt-5">
        <div className=" border-b-2 border-white mt-4 w-full  px-24 pt-12  grid grid-cols-1 gap-5  lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 ">
          {/* <div className="    "> */}
          {/* <div className="  "> */}

          <div className="  hover:shadow-xl  h-[300px]   flex flex-col gap-4  justify-start">
            <div className="border border-s-amber-400 w-[80px]">
              {" "}
              Image Logo
            </div>
            <div className="text-white  ">
              <p className="text-xl ">
                {" "}
                Handle projects of all sizes & provide high quality renovation
                work{" "}
              </p>
            </div>
            <div className="flex gap-4 lg:gap-6 pr-2">
              <Link
                href="#"
                className="text-[28px] text-white hover:text-amber-400 hover:translate-y-1 transition-all duration-500 "
              >
                {" "}
                <FaFacebook />
              </Link>
              <Link
                href="#"
                className="text-[28px] text-white hover:text-amber-400 hover:translate-y-1 transition-all duration-500"
              >
                {" "}
                <FaTwitter />
              </Link>
              <Link
                href="#"
                className="text-[28px] text-white hover:text-amber-400 hover:translate-y-1 transition-all duration-500"
              >
                {" "}
                <FaInstagram />
              </Link>
              <Link
                href="#"
                className="text-[28px] text-white hover:text-amber-400 hover:translate-y-1 transition-all duration-500"
              >
                {" "}
                <FaTiktok />
              </Link>
            </div>
          </div>
          <div className="   mb-5 rounded-3xl flex flex-col items-center  py-2">
            <h1 className="font-bold text-2xl mb-4">Our Services</h1>

            <ul className=" gap-8 justify-center">
              <li className="text-xl gap-8">
                <Link href="#">Service one</Link>
              </li>
              <li className="text-xl">
                <Link href="#">Service two</Link>
              </li>

              <li className="text-xl">
                <Link href="#">Service Three</Link>
              </li>

              <li className="text-xl">
                <Link href="#">Service Four</Link>
              </li>
            </ul>
          </div>
            <div className="   mb-5 rounded-3xl flex flex-col items-center  py-2">
            <h1 className="font-bold text-2xl mb-4">Quick Links</h1>

            <ul className=" gap-8 justify-center">

              <li className="text-xl hover:text-amber-400">
                <Link href="/">Home</Link>
              </li>
              <li className="text-xl hover:text-amber-400">
                <Link href="/about">About</Link>
              </li>

              <li className="text-xl  hover:text-amber-400">
                <Link href="/service">Service</Link>
              </li>

              <li className="text-xl hover:text-amber-400">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
           <div className="   mb-5 rounded-3xl flex flex-col gap-5 items-center  justify-start py-2">
            <h1 className="font-bold text-2xl mb-4">Contact Us</h1>
            <p>Phone:<a href="tel:087654322333">087654322333</a></p>
            <p>Email:<a href="mailto:example@gmail.com">example@gmail.com</a></p>

            <p>Address:<a href="">123456789 Soy kakamega</a></p>
          </div>

         
        </div>
        <div className="flex flex-col items-center justify-center text-black py-3 text-center">
        {/* <hr className="h-px my-8 bg-white border-0 dark:bg-white"></hr> */}

          <p className="capitalize text-white text-center ">
            {" "}
            All rights reserved .&copy; {new Date().getFullYear()} This Company.Designed By{" "}
            <Link href="#">Brenes Census</Link>
          </p>
        </div>
      </footer>
    </>
  );
}
