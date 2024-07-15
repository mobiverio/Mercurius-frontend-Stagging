import React from "react";
import { Link } from "react-router-dom";

const ProductBrands = ({ brandHeader, brandItems, brandType }) => {
  const brand = brandItems.filter((items) => items.category === brandType);

  return (
    <main>
      <div className="brands mt-8 mb-4">
        <h2 className="font-semibold text-[1.2rem] my-4">{brandHeader}</h2>
        <div className="my-4 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
          {brand.map((items) => {
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
    </main>
  );
};

export default ProductBrands;
