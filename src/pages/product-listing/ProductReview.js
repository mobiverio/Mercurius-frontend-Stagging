import React, { useState } from "react";
import "../../index.css";
import { BsStar, BsChevronDown } from "react-icons/bs";
import Img1 from "../../assets/images/pro1.png";
import Img2 from "../../assets/images/pro2.png";
import Img3 from "../../assets/images/pro3.png";
import Img4 from "../../assets/images/pro4.png";

const DATA = [
  {
    id: 1,
    name: "Grace Carey",
    date: "12 Jan 2024",
    img: Img1,
    desc: "The Nike Beige Cargo Pant is my new daily essential.The fit is relaxed, and the cargo pockets are a nice touch for my phone and keys. Versatile and comfortable for any casual    occasion.",
  },
  {
    id: 2,
    name: "Grace Carey",
    date: "12 Jan 2024",
    img: Img2,
    desc: "The Nike Beige Cargo Pant is my new daily essential.The fit is relaxed, and the cargo pockets are a nice touch for my phone and keys. Versatile and comfortable for any casual    occasion.",
  },
  {
    id: 3,
    name: "Grace Carey",
    date: "12 Jan 2024",
    img: Img3,
    desc: "The Nike Beige Cargo Pant is my new daily essential.The fit is relaxed, and the cargo pockets are a nice touch for my phone and keys. Versatile and comfortable for any casual    occasion.",
  },
  {
    id: 4,
    name: "Grace Carey",
    date: "12 Jan 2024",
    img: Img4,
    desc: "The Nike Beige Cargo Pant is my new daily essential.The fit is relaxed, and the cargo pockets are a nice touch for my phone and keys. Versatile and comfortable for any casual    occasion.",
  },
  {
    id: 1,
    name: "Grace Carey",
    date: "12 Jan 2024",
    img: Img1,
    desc: "The Nike Beige Cargo Pant is my new daily essential.The fit is relaxed, and the cargo pockets are a nice touch for my phone and keys. Versatile and comfortable for any casual    occasion.",
  },
  {
    id: 2,
    name: "Grace Carey",
    date: "12 Jan 2024",
    img: Img2,
    desc: "The Nike Beige Cargo Pant is my new daily essential.The fit is relaxed, and the cargo pockets are a nice touch for my phone and keys. Versatile and comfortable for any casual    occasion.",
  },
  {
    id: 3,
    name: "Grace Carey",
    date: "12 Jan 2024",
    img: Img3,
    desc: "The Nike Beige Cargo Pant is my new daily essential.The fit is relaxed, and the cargo pockets are a nice touch for my phone and keys. Versatile and comfortable for any casual    occasion.",
  },
  {
    id: 4,
    name: "Grace Carey",
    date: "12 Jan 2024",
    img: Img4,
    desc: "The Nike Beige Cargo Pant is my new daily essential.The fit is relaxed, and the cargo pockets are a nice touch for my phone and keys. Versatile and comfortable for any casual    occasion.",
  },
];

const ProductReview = () => {
  const [reviews, setReviews] = useState(3);

  const handleReviews = () => {
    setReviews(reviews + 3);
  };

  return (
    <div className="relative w-full">
      <div className="review_bar my-4 p-3 max-h-[60vh] overflow-y-auto bg-gradient-to-b from-white from-[65%]  via-transparent to-[rgba(273,273,273,0.1)]">
        {DATA?.slice(0, reviews).map((product) => {
          return (
            <div key={product?.id} className="flex gap-x-4 mb-6 w-[95%]">
              <img
                className="w-14 h-14 rounded-full"
                src={product?.img}
                alt="/"
              />
              <div className="text-[#333]">
                <div className="flex justify-between mb-1">
                  <h4 className="interpolate font-bold">{product.name}</h4>
                  <p className="text-sm text-slate-400">{product.date}</p>
                </div>
                <div className="flex">
                  <BsStar />
                </div>
                <p className="leading-5 mt-1 text-sm">{product.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
      {reviews < DATA.length && (
        <div className="w-10 h-10 border border-[#a7a7a7] rounded-full absolute right-5 bottom-5">
          <button
            onClick={handleReviews}
            className="flex justify-center items-center py-1 px-2 text-center bg-transparent w-full"
          >
            <BsChevronDown size={25} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductReview;
