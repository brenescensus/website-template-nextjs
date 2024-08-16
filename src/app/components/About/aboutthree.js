import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaPlus } from "react-icons/fa";
import { FaArrowRight } from 'react-icons/fa';

export default function Aboutthree() {
  return (
    <section className='mt-12 container mx-auto grid grid-cols-1 gap-8  lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2'>
        <div className='flex items-center justify-center'>
            <Image src="/Assets/Images/About/about2.jpg" alt="about us" height={500} width={400} className=' w-full rounded-lg'/>
        </div>
        <div className='flex flex-col items-center justify-start'>
            <h4 className='text-black text-2xl font-bold'>About Us</h4>
            <h1 className='text-amber-500 text-6xl font-bold text-center mb-3'>Experience the best services.</h1>
            <p className='text-black mb-12'>Lorem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><br></br>
            <p className='text-black mb-12'>Quisquam, voluptatumLorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, voluptatumLorem ipsum dolor sit amet
            consectetur adipisicing elit. Quisquam, voluptatumLorem ipsum
            voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
           </p>
            
            <button className=  ' bg-amber-500 text-white text-2xl font-bold px-4 py-2 rounded-lg mt-4 hover:bg-black hover:text-amber-400'><Link className='capitalize flex items-center' href="/about">Learn More < FaArrowRight/></Link></button>
        </div>




    </section>
  );
}
