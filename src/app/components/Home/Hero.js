"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

export default function Hero() {
  const settings = {
    fade: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    cssEase: "linear",
  };

  return (
    <section className="slider-container relative">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className='w-full flex flex-col items-center h-[600px] bg-cover bg-center bg-[url("/Assets/Images/Hero/hero1.jpg")]'>
          <motion.div
            className="slider-content text-center flex flex-col items-center justify-center h-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h4 className="text-6xl font-bold text-white">
              Welcome to Company Limited
            </h4>
            <p className="text-2xl">Description of the content</p>
          </motion.div>
        </div>

        {/* Slide 2 */}
        <div className='w-full flex flex-col items-center h-[600px] bg-cover bg-center bg-[url("/Assets/Images/Hero/hero1.jpg")]'>
          <motion.div
            className="slider-content text-left w-1/2 ml-30 text-white flex flex-col items-start justify-center h-full"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h4 className="text-6xl font-bold">2nd Company Limited</h4>
            <p className="text-2xl">Description of the content</p>
          </motion.div>
        </div>

        {/* Slide 3 */}
        <div className='w-full flex flex-col items-center h-[600px] bg-cover bg-center bg-[url("/Assets/Images/Hero/hero1.jpg")]'>
          <motion.div
            className="slider-content text-center flex flex-col items-center justify-center h-full"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h4 className="text-6xl font-bold text-white">
              3rd Company Limited
            </h4>
            <p className="text-2xl">Description of the content</p>
          </motion.div>
        </div>
      </Slider>
    </section>
  );
}
