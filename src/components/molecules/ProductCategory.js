import React from "react";

const ProductCategory = ({ productName, product }) => {
  return (
    <main>
      <h2 className="font-semibold text-[1.2rem] my-4">{productName}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {product?.map((item) => {
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
    </main>
  );
};

export default ProductCategory;
