import React from "react";
import Image from "next/image";
import { MdCarpenter } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";
import { AboutData } from "@/app/data/aboutdata";
import { useEffect } from "react";
import ScrollReveal  from "scrollreveal";

export default function Abouttwo() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "30px",
      duration: 1000,
      delay: 600,
    });

    sr.reveal(".here_text", { origin: "top" });
    sr.reveal(".abt", { distance: "188px", interval: 100 });
  }, []);

  return (
    <div className=" container   mx-auto  mt-[-70px] border grid grid-cols-1 gap-9 z-15 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
      {AboutData.map((abtdata, i) => (
        <div
          key={i}
          className=" hover:shadow-xl hover:shadow-amber-400 h-[300px] mb-5 rounded-3xl flex flex-col items-center justify-center transition  transform hover:scale-105 bg-white bg-opacity-90 p-5"
        >
          <div className=" mb-2 content-center place-content-center flex justify-center text-white text-6xl items-center  ml-5 h-20 rounded-full bg-amber-400 w-20 group-hover:bg-amber-400 hover:color-white hover:opacity-100 hover:transition ease-in-out hover:skew-x-12">
            {/* <MdCarpenter className="text-white text-6xl" /> */}
            {abtdata.icon}
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
  );
}
