import React, { useEffect, useState } from "react";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsArrowRight,
} from "react-icons/bs";
import "../../styles/Styles.css";
import { slides } from "../../db_local/store";

export const Slider = function ({
  autoSlide = false,
  autoSlideInterval = 1000,
}) {
  const [currentIndex, SetCurrentIndex] = useState(0);

  const prevSlide = () => {
    SetCurrentIndex((curr) =>
      curr === 0 ? slides.length - 1 : currentIndex - 1
    );
  };

  const nextSlide = () => {
    SetCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (slideIndex) => {
    SetCurrentIndex(slideIndex);
  };

  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(slideInterval);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[470px] m-auto bg-white/40 group px-6 md:px-12 mt-1">
      <div className="w-full h-full duration-1000 bg-cover bg-no-repeat flex flex-col justify-center items-center sm:items-start gap-1 px-4 sm:pl-[5rem] bg-black/95 rounded-t">
        <img
          src={slides[currentIndex].src}
          alt="/"
          className="hidden sm:block absolute right-[10%] w-[0] md:w-[25%] xl:max-w-[16%] xxl-max-w-[15%] bottom-0"
        />
        <div className="w-full lg:w-1/2">
          <h3 className="font-semibold leading-tight text-[1.2rem] sm:text-2xl md:text-5xl w-full md:w-[70%] text-[#fff] text-center sm:text-left">
            {slides[currentIndex].title}
          </h3>
          <p className="w-[80%] mx-auto sm:mx-0 semibold leading-8 text-[1.1rem] text-[#fff] text-center sm:text-left">
            {slides[currentIndex].pitch}
          </p>
          {slides[currentIndex].cta ? (
            <button className="bg-white/90 hover:bg-black/50 transition-colors duration-300 w-fit py-2 px-4 border-2 border-white/50 rounded-md text-black hover:text-white my-4 flex items-center mx-auto sm:mx-0">
              {slides[currentIndex].cta}
              <BsArrowRight className=" mx-2 inline-block" />
            </button>
          ) : null}
        </div>
      </div>
      {/* Arrow Button Left */}
      <div
        onClick={prevSlide}
        className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] left-4 sm:left-[4rem] text-2xl rounded-full bg-white/90 hover:bg-white/30 text-black cursor-pointer p-2"
      >
        <BsChevronCompactLeft />
      </div>
      {/* Arrow Button Right */}
      <div
        onClick={nextSlide}
        className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] right-4 sm:right-[4rem] text-2xl rounded-full bg-white/90 hover:bg-white/30 text-black cursor-pointer p-2"
      >
        <BsChevronCompactRight />
      </div>
      {/* Indicators */}
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex flex-row justify-center items-center gap-2">
          {slides?.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`transition-all w-2 h-2 rounded-full bg-white/50 cursor-pointer ${
                currentIndex === slideIndex ? "p-[.4rem]" : "bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
