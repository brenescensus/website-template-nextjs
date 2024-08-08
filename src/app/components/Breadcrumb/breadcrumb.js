import React from "react";
import { GoDotFill } from "react-icons/go";
import { FaGreaterThan } from "react-icons/fa";
import { RxSlash } from "react-icons/rx";


export default function breadcrumb() {
  return (
    <div className=' w-full mb-14 flex-col flex items-center justify-center background-image-center bg-no-repeat bg-cover h-52 bg-[url("/Assets/Images/About/about1.jpg")] lg:flex-col sm:flex-col md:flex-col sm:h-52 md:h-72 2xl:h-72 2xl:flex-col '>
      <div>
        <h1 className="text-white font-light text-6xl uppercase">Page Title</h1>
      </div>

      <div className="flex flex-row justify-center  items-center">
        <h2 className="text-white font-bold items-center ">Home</h2>
        <div className="text-white  m-2 rounded-full">
          <RxSlash />
        </div>
        <h6 className="text-amber-400 font-bold items-center">About Us</h6>
      </div>
    </div>
  );
}
