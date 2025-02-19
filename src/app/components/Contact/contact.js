import Link from "next/link";
import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { ContactData } from "@/app/data/contactdata";

export default function contact() {
  return (
    <>
    <section className=" container mx-auto bg-white text-black my-10">
      <div className=" items-center grid grid-cols-1 gap-5 mt-4 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-3 2xl:grid-cols-3">
        <div className="">
          <h1 className="text-3xl font-extrabold">Contact Us</h1>
          <p className="text-lg">In case of an queries,reach us through:</p>
          <div className="border-s-violet-200 flex flex-col gap-6 mt-5">
            {ContactData.map( (contactdata,i )=>(

          
            <div key={i} className="flex flex-row items-center justify-start gap-3 ">
              <div className="text-[40px] text-amber-400">
               {contactdata.icon}
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold">{contactdata.title}</h1>
                <Link href={contactdata.link}>{contactdata.description}</Link>
              </div>
            </div>
           
              ) )}
          </div>
        </div>
        <div className="col-span-2 ">
          <form
            action="" className="grid grid-cols-1 py-10 gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2"
          >
            <div className="flex flex-col ">
              <input
                type="text"
                placeholder="FullName"
                name="name"
                id="name"
                className="text-light border-b-2  focus:outline-none focus:border-b-amber-400 "
              />
            </div>
            <div className="flex flex-col">
              {/* <label htmlFor="name">Email</label> */}
              <input
                type="email"
                placeholder="Email Address"
                name="name"
                id="name"
                className="border-b-2  focus:outline-none focus:border-b-amber-400"
              />
            </div>
            <div className="flex flex-col">
              {/* <label htmlFor="name">Tel</label> */}
              <input
                type="phone"
                name="name"
                id="name"
                placeholder="Telephone"
                className="border-b-2 focus:outline-none focus:border-b-amber-400"
              />
            </div>
            <div className="flex flex-col">
              {/* <label htmlFor="name">Subject</label> */}
              <input
                type="text"
                name="subject"
                id="name"
                placeholder="Subject"
                className="border-b-2  focus:outline-none focus:border-b-amber-400"
              />
            </div>
            <div className="flex flex-col col-span-2">
              {/* <label htmlFor="name">Message</label> */}
              <textarea
                name="message"
                id="name"
                cols="30"
                rows="6"
                placeholder="Write your message here"
                className="border-b-2 focus:outline-none focus:border-b-amber-400 "
              ></textarea>
            </div>
            <div className="flex flex-col col-span-2">
              <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-amber-400">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    <section className="container mx-auto bg-white text-black ">
    <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77979.80009413049!2d4.9039604!3d52.354665649999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63fb5949a7755%3A0x6600fd4cb7c0af8d!2sAmsterdam%2C%20Netherlands!5e0!3m2!1sen!2ske!4v1723033956181!5m2!1sen!2ske"
     width="600" height="450" 
      allowFullScreen=""
       loading="lazy" 
       referrerPolicy="no-referrer-when-downgrade"></iframe>
        
    </section>
    </>
  );
}
