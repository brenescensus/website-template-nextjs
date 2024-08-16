import React from "react";
import Image from "next/image";
import { MdCarpenter } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";
// t-app\src\app\data\aboutdata.js
import { AboutData } from "@/app/data/aboutdata";

export default function Aboutone() {
  return (
    <>
      <section className="container   mx-auto   bg-white text-black">
        {/* <div className="flex items-center h-auto w-[100%]  p-5 m-6 border border-solid sm:flex-col md:flex-row xl:flex-row 2xl:flex-row  ">     */}
        <div className="flex items-center flex-col justify-center mb-10 ">
          {" "}
          <h6 className="text-base font-medium">What We do</h6>
          <h1 className="  font-bold mb-1 mt-2  text-5xl  justify-center ">
            About US
          </h1>
          <p className=" text-center font-light justify-center text-base  mt-2 sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptatumLorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, voluptatumLorem ipsum dolor sit amet
            consectetur adipisicing elit. Quisquam, voluptatumLorem ipsum
          </p>
        </div>

        <div className="  grid grid-cols-1 gap-5 mt-4 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
          {AboutData.map(( abtdata,i)=>(

          
          <div key={i}
          className=" hover:shadow-xl hover:shadow-amber-400 h-[300px] mb-5 rounded-3xl flex flex-col items-center justify-center">
            <div className=" mb-2 content-center place-content-center flex justify-center text-white text-6xl items-center mt-[-38px] ml-5 h-20 rounded-full bg-amber-400 w-20 group-hover:bg-amber-400 hover:color-white hover:opacity-100 hover:transition ease-in-out hover:skew-x-12">
              {/* <MdCarpenter className="text-white text-6xl" /> */}{abtdata.icon}
              {/* <h1 className='text-amber-800 text-center text-3xl font-bold hover:text-white '>Service 1 </h1> */}
            </div>
            <div className="ml-5 mb-2 text-black text-2xl font-bold  uppercase">
             {abtdata.title}
            </div>
            <div className=" mb-2 text-black text-base text-center">
             {abtdata.content}
            </div>
          </div>
         ))}

        </div>
        <div className=" flex flex-row items-center justify-center px-3">
          <Link
            href="#"
            className=" flex flex-row px-3 py-3 items-center uppercase font-bold border border-amber-400"
          >
            {" "}
            <FaPlus /> Read More
          </Link>
        </div>
      </section>
    </>
  );
}
