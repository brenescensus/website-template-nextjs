import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGreaterThan,FaCode,FaPlus } from "react-icons/fa";
import { MdCarpenter } from "react-icons/md";
import { GiChainsaw } from "react-icons/gi";


export default function Serviceone() {
  return (
    // h1>Services Page</h1>
    <section className="bg-white  container mx-auto">
      <div className=" flex flex-col items-center justify-center text-black my-4">
        <h6 className="text-base font-medium">What We do</h6>
        <h1 className=" text-5xl font-bold items-center justify-center mb-4 ">
          Our Services
        </h1>
      </div>
      {/* <h1 className='text-[26px] mb-2 content-center text-black'>Our Services</h1> */}
      <div className=" group grid grid-cols-1 gap-5 mt-4 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
        <div className=" h-[500px] mb-5 rounded-3xl flex flex-col    ">
         <div className="h-[60%]">
         <Image
            src={"/Assets/Images/About/about1.jpg"}
            alt="service"
            width={402}
            height={500}
            className=" h-full w-full hover: ease-in-out "
          />
         </div>
         
          <div className=" mb-2 content-center place-content-center flex justify-center items-center mt-[-38px] ml-5 h-20 rounded-xl bg-black w-20 group-hover:bg-amber-400 hover:color-white hover:opacity-100 hover:transition ease-in-out">
            <MdCarpenter className="text-white text-6xl" />
            {/* <h1 className='text-amber-800 text-center text-3xl font-bold hover:text-white '>Service 1 </h1> */}
          </div>
          <div className= "ml-5 mb-2 text-black text-2xl font-bold  uppercase">service Title</div>
          
          <div className="ml-5 mb-2 text-black text-base">Yellow Hats has full service renovation expertise, we are equipped with the right tools and people to handle projects of all sizes & provide high quality renovation work</div>
       <div className=" flex flex-row ml-5 mb-2 text-black group-hover:text-amber-400 group  "> 
       <FaPlus />
        <Link href="#" className=" mx-1 uppercase font-semibold hidden group-hover:block"> Read More </Link>
         </div>
        </div>

        <div className="bg-blue-500 h-96"></div>
        <div className="bg-blue-500 h-96"></div>
        {/* <div className="bg-blue-500 h-96"></div> */}
       
      </div>
    </section>
  );
}
