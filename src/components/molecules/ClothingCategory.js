import React from "react";

const ClothingCategory = ({ category, items }) => {
  return (
    <main className="text-sm text-[1rem]">
      <h2 className="font-semibold my-4">{category}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {items?.map((item) => {
          return (
            <div className="text-center flex flex-col items-center justify-center">
              <figure className="w-1/2 sm:w-[180px] sm:h-[180px] md:bg-gray-100 rounded-full flex flex-col justify-center items-center">
                <img className="" src={item.src} alt="/" />
              </figure>
              <p className="my-4">{item.product}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default ClothingCategory;
