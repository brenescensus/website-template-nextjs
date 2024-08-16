import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollReveal from "scrollreveal";
export default function Hero() {

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '30px',
      duration: 1000,
      delay: 400,
    });

    sr.reveal('.here_text', { origin: 'top' });
    sr.reveal('.here_txt2', { origin: 'left' });
    sr.reveal('.here_txt3', { origin: 'right' });
    sr.reveal('.stp', { distance: '188px', interval: 100 });

  }, []);
  const settings = {
    // dots: true,
    fade: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    // cssEase: 'ease-in-out'
    cssEase: 'linear'
  };

  return (
    <>
      <section className="slider-container  relative ">
        <Slider {...settings}>
          <div className='w-full  flex-col flex items-center h-[600px] max-h-[590px]  background-image-center bg-no-repeat bg-cover bg-[url("/Assets/Images/Hero/hero1.jpg")] lg:flex-col sm:flex-col md:flex-col  2xl:flex-col'>
            <div className="  slider-content text-center flex flex-col items-center justify-center h-full  ">
              <h4 className=" here_text text-6xl font-bold text-white ">
                Welcome to Company Limited
              </h4>
              <p className=" stp text-2xl">Description od the content</p>
            </div>
          </div>
          <div className='w-full flex flex-col  items-center justify-center h-[600px] max-h-[590px]   background-image-center bg-no-repeat bg-cover  bg-[url("/Assets/Images/Hero/hero1.jpg")] lg:flex-col sm:flex-col md:flex-col  2xl:flex-col'>
            <div className="slider-content text-center text-black flex flex-col items-center justify-center h-full">
              <h4 className=" here_text2 text-6xl font-bold text-white">
                {" "}
                2 nd Company Limited
              </h4>
              <p className="text-2xl">Description od the content</p>
            </div>
          </div>
          <div className='w-full  flex flex-col  items-center justify-center h-[600px] max-h-[590px]   background-image-center bg-no-repeat bg-cover  bg-[url("/Assets/Images/Hero/hero1.jpg")] lg:flex-col sm:flex-col md:flex-col  2xl:flex-col'>
            <div className="slider-content text-center text-black flex flex-col items-center justify-center h-full ">
              <h4 className=" here_text3 text-6xl font-bold text-white ">
                3rdto Company Limited
              </h4>
              <p className="text-2xl">Description od the content</p>
            </div>
          </div>
        </Slider>
      </section>
    </>
  );
}
