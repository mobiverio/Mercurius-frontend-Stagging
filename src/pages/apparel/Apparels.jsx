import React from "react";
import Brands from "../../components/molecules/Brands";
import { brands } from "../../db_local/store";

// Apparels
import Apparel1 from "../../assets/images/Blouse.png";
import Apparel2 from "../../assets/images/Coat.png";
import Apparel3 from "../../assets/images/Suit.png";
import Apparel4 from "../../assets/images/Jeans.png";
import Apparel5 from "../../assets/images/Trouser.png";

const apparel = [
  { id: 1, src: Apparel1, product: "Blouse" },
  { id: 2, src: Apparel2, product: "Coat" },
  { id: 3, src: Apparel3, product: "Suits" },
  { id: 4, src: Apparel4, product: "Jeans" },
  { id: 5, src: Apparel5, product: "Trouser" },
];
const Apparels = () => {
  return (
    <div className="px-2 py-3 sm:px-12">
      <div className="main_content">
        <div className="my-4 grid">
          <h2 className="font-semibold text-[1.2rem] my-4">Men</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {apparel?.map((item) => {
              return (
                <div className="text-center flex flex-col items-center justify-center">
                  <figure className="w-1/2 sm:w-[180px] sm:h-[180px] md:bg-gray-100 rounded-full flex flex-col justify-center items-center">
                    <img className="" src={item.src} alt="/" />
                  </figure>
                  <p className="text-[1.1rem]">{item.product}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="my-4 grid">
          <h2 className="font-semibold text-[1.2rem] my-4">Women</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-center items-center">
            {apparel?.map((item) => {
              return (
                <div className="text-center flex flex-col items-center justify-center">
                  <figure className="w-1/2 sm:w-[180px] sm:h-[180px] md:bg-gray-100 rounded-full flex flex-col justify-center items-center">
                    <img className="" src={item.src} alt="/" />
                  </figure>
                  <p className="text-[1.1rem]">{item.product}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="my-4 grid">
          <h2 className="font-semibold text-[1.2rem] my-4">Kids</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-center items-center">
            {apparel?.map((item) => {
              return (
                <div className="text-center flex flex-col items-center justify-center">
                  <figure className="w-1/2 sm:w-[180px] sm:h-[180px] md:bg-gray-100 rounded-full flex flex-col justify-center items-center">
                    <img className="" src={item.src} alt="/" />
                  </figure>
                  <p className="text-[1.1rem]">{item.product}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="brands">
        <Brands
          brandHeader={"Popular Brands"}
          brandItems={brands}
          brandType={"clothing"}
        />
        {/* <h2 className="font-semibold text-[1.2rem] my-4">Shop by Brand</h2>
        <div className="my-4 grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-4">
          {brands
            .filter((items) => items.category === "clothing")
            .map((items) => {
              return (
                <Link key={items.id} to={`/brands/${items.id}`}>
                  <div className="mx-auto w-full min-h-[150px] flex items-center shadow hover:scale-105 cursor-pointer transition">
                    <img className="block mx-auto" src={items.src} alt="/" />
                  </div>
                </Link>
              );
            })}
        </div> */}
      </div>
    </div>
  );
};

export default Apparels;
