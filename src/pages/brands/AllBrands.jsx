import React from "react";
import { brands } from "../../db_local/store";
import { Link } from "react-router-dom";
const AllBrands = () => {
  return (
    <div className="my-8 p-1 sm:px-2 md:px-12">
      <h2 className="font-semibold text-[1.2rem] my-4">Brands</h2>
      <div className="grid grid-rows-3 grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
        {brands?.map((items) => {
          return (
            <Link key={items.id} to={`/brands/${items.id}`}>
              <div className="mx-auto w-full min-h-[140px] sm:max-h-[140px] flex items-center shadow hover:scale-105 cursor-pointer transition">
                <img className="block mx-auto" src={items.src} alt="/" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AllBrands;
