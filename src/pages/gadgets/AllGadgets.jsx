import React from "react";
import { Link } from "react-router-dom";
import { brands, gadgets } from "../../db_local/store";

const AllGadgets = () => {
  return (
    <div className="px-2 py-3 md:px-12">
      <h2 className="font-semibold text-[1.2rem] my-4">Shop by Category</h2>
      <div className="">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {gadgets?.map((item) => {
            return (
              <div
                key={item.key}
                className="flex flex-col items-center justify-center gap-4"
              >
                <img
                  className="w-1/2 sm:w-fit cursor-pointer hover:scale-110"
                  src={item.img}
                  alt="/"
                />
                <p className="font-semibold">{item.name}</p>
              </div>
            );
          })}
        </div>
        <div className="brands">
          <h2 className="font-semibold text-[1.2rem] my-4">Shop by Brand</h2>
          <div className="my-4 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
            {brands
              .filter((items) => items.category === "gadget")
              .map((items) => {
                return (
                  <Link key={items.id} to={`/brands/${items.id}`}>
                    <div
                      className="mx-auto w-full min-h-[150px] flex items-center shadow hover:scale-105 cursor-pointer transition"
                      key={items.id}
                    >
                      <img className="block mx-auto" src={items.src} alt="/" />
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllGadgets;
