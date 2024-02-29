import React from "react";

import Apparel1 from "../../assets/images/Blouse.png";
import Apparel2 from "../../assets/images/Coat.png";
import Apparel3 from "../../assets/images/Suit.png";
import Jewelry from "../../assets/images/ring.png";

const apparel = [
  { id: 1, src: Apparel1, product: "Appliances" },
  { id: 2, src: Apparel2, product: "Accessories" },
  { id: 3, src: Apparel3, product: "Jewelries" },
];

const accessories = [
  { id: 1, src: Jewelry, product: "Stainless steel ring", color: "Gold" },
  { id: 2, src: Jewelry, product: "Stainless steel ring", color: "Gold" },
  { id: 3, src: Jewelry, product: "Stainless steel ring", color: "Gold" },
  { id: 4, src: Jewelry, product: "Stainless steel ring", color: "Gold" },
  { id: 5, src: Jewelry, product: "Stainless steel ring", color: "Gold" },
];

const Accessories = () => {
  return (
    <div className="px-2 py-3 sm:px-12">
      <h2 className="font-semibold text-[1.2rem] my-4">Shop by category</h2>
      <div className="w-full sm:w-fit mx-auto grid grid-cols-2 sm:grid-cols-[repeat(3,minmax(0,300px))] md:grid-cols-[repeat(auto,minmax(0,200px))] text-center gap-4">
        {apparel.map((item) => {
          return (
            <div className=" text-center flex flex-col items-center justify-center">
              <figure className="w-1/2 sm:w-[180px] sm:h-[180px] md:bg-gray-100 rounded-full flex flex-col justify-center items-center">
                <img className="" src={item.src} alt="/" />
              </figure>
              <p className="text-sm">{item.product}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accessories;
