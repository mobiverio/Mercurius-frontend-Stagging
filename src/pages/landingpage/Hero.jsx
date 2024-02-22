import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsArrowRight,
} from "react-icons/bs";
import Image from "../../assets/images/Iphone.png";
import Swag from "../../assets/images/swag.png";
import Model from "../../assets/images/model.png";
import Friends from "../../assets/images/friends.png";
import "../../styles/Styles.css";
// import Background from "../../assets/images/backdrop.jpg";

const slides = [
  {
    title: "SHOP GADGETS & ACCESSORIES",
    pitch:
      "Shop the Latest Gadgets and Accessories for a Tech-Infused Lifestyle",
    cta: "View More",
    img: Image,
  },
  {
    title: "SHOP GADGETS & ACCESSORIES",
    pitch:
      "Shop the Latest Gadgets and Accessories for a Tech-Infused Lifestyle",
    cta: "View More",
    img: Image,
  },
  {
    title: "SHOP GADGETS & ACCESSORIES",
    pitch:
      "Shop the Latest Gadgets and Accessories for a Tech-Infused Lifestyle",
    cta: "View More",
    img: Image,
  },
  {
    title: "SHOP GADGETS & ACCESSORIES",
    pitch:
      "Shop the Latest Gadgets and Accessories for a Tech-Infused Lifestyle",
    cta: "View More",
    img: Image,
  },
];

const items = [
  {
    id: 1,
    title: "Apparel",
    pitch: "Buy now, Save 30%",
    url: Image,
  },
  {
    id: 2,
    title: "Gadget",
    pitch: "Buy now, Save 30%",
    url: Friends,
  },
  {
    id: 3,
    title: "Accessories",
    pitch: "Buy now, Save 30%",
    url: Model,
  },
  {
    id: 4,
    title: "New Arrivals",
    pitch: "Buy now, Save 30%",
    url: Swag,
  },
  {
    id: 5,
    title: "Furnitures",
    pitch: "Buy now, Save 30%",
    url: Friends,
  },
  {
    id: 6,
    title: "Utencils",
    pitch: "Buy now, Save 30%",
    url: Model,
  },
  {
    id: 7,
    title: "Wine",
    pitch: "Buy now, Save 30%",
    url: Swag,
  },
  {
    id: 8,
    title: "Product",
    pitch: "Buy now, Save 30%",
    url: Friends,
  },
  {
    id: 9,
    title: "Product",
    pitch: "Buy now, Save 30%",
    url: Image,
  },
  {
    id: 10,
    title: "Apparel",
    pitch: "Buy now, Save 30%",
    url: Image,
  },
  {
    id: 11,
    title: "Gadget",
    pitch: "Buy now, Save 30%",
    url: Friends,
  },
  {
    id: 12,
    title: "Accessories",
    pitch: "Buy now, Save 30%",
    url: Model,
  },
  {
    id: 13,
    title: "New Arrivals",
    pitch: "Buy now, Save 30%",
    url: Swag,
  },
];

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
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[470px] m-auto bg-white/40 group px-2 sm:px-12 mt-1">
      <div className="w-full h-full duration-1000 bg-cover bg-no-repeat flex flex-col justify-center items-center sm:items-start gap-1 px-4 sm:pl-[5rem] bg-black/95 rounded-t">
        <img
          src={slides[currentIndex].img}
          alt="/"
          className="hidden sm:block absolute right-[10%] md:w-[25%] bottom-0"
        />
        <h3 className="font-semibold leading-tight text-2xl sm:text-5xl w-full sm:w-[50%] text-[#fff] text-center sm:text-left">
          {slides[currentIndex].title}
        </h3>
        <p className="semibold leading-8 text-[1.1rem] w-[70%] sm:w-[40%] text-[#fff] text-center sm:text-left">
          {slides[currentIndex].pitch}
        </p>
        {slides[currentIndex].cta ? (
          <button className="bg-white/90 hover:bg-black/50 transition-colors duration-300 w-fit py-2 px-4 border-2 border-white/50 rounded-md text-black hover:text-white my-4 flex items-center">
            {slides[currentIndex].cta}
            <BsArrowRight className=" mx-2 inline-block" />
          </button>
        ) : null}
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
          {slides.map((_, slideIndex) => (
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

export const ItemSelling = function () {
  const leftSlide = function () {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 400;
  };

  const rightSlide = function () {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 400;
  };

  return (
    <div className="relative flex items-center my-4 sm:px-12 mx-2 sm:mx-12 bg-blue-200">
      <BsChevronCompactLeft
        size={30}
        className="cursor-pointer block absolute h-full p-2 text-white w-[4%] left-0"
        onClick={leftSlide}
      />
      <div
        id="slider"
        className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth hide_bar"
      >
        <div className="flex flex-row flex-nowrap items-center justify-center gap-4 py-4 px-8">
          {items.map((item) => (
            <Link to="/product">
              <figure
                key={item.id}
                className="flex items-center hover:scale-105 duration-300 ease-in-out"
              >
                <img
                  className="max-w-[90px] min-h-[100px] rounded-xl inline-block p-2 cursor-pointer "
                  src={item.url}
                  alt="/"
                />
                <figcaption className="px-2 py-1 -mt-3">
                  <h3 className="text-sm font-semibold leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-tight">{item.pitch}</p>
                </figcaption>
              </figure>
            </Link>
          ))}
        </div>
      </div>
      <BsChevronCompactRight
        size={30}
        className="cursor-pointer block absolute h-full p-2 text-white w-[4%] right-0"
        onClick={rightSlide}
      />
    </div>
  );
};
