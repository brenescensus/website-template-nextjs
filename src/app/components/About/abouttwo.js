"use client";
import React from "react";
import { AboutData } from "@/app/data/aboutdata";
import { motion } from "framer-motion";

export default function Abouttwo() {
  return (
    <div className="container mx-auto mt-[-70px] grid grid-cols-1 gap-9 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
      {AboutData.map((abtdata, i) => (
        <motion.div
          key={i}
          className="hover:shadow-xl hover:shadow-amber-400 h-[300px] mb-5 rounded-3xl flex flex-col items-center justify-center transition transform hover:scale-105 bg-white bg-opacity-90 p-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: i * 0.2 }}
        >
          <motion.div
            className="mb-2 flex justify-center text-white text-6xl items-center h-20 rounded-full bg-amber-400 w-20 transition ease-in-out"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {abtdata.icon}
          </motion.div>
          <div className="ml-5 mb-2 text-black text-2xl font-bold uppercase">
            {abtdata.title}
          </div>
          <div className="mb-2 text-black text-base text-center">
            {abtdata.content}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
