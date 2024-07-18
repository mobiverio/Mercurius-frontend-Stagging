import React, { useState } from "react";
import "../../styles/Styles.css";
import { BsStar, BsPlus, BsDash, BsCart3 } from "react-icons/bs";
import useCartStore from "../../zustand/useCartStore";

export const ProductView = ({ product }) => {
  const [counter, setCounter] = useState(1); // Ensure counter starts at 1
  const { addToCart } = useCartStore(); // Use the addToCart method from the store

  const handleAddToCart = () => {
    if (counter > 0) {
      addToCart({
        ...product,
        quantity: counter,
      });
    }
  };

  return (
    <main className="p-2 md:mx-12">
      <div className="flex flex-col md:flex-row bg-white/70">
        {/* Product */}
        <section className="w-full md:w-[45%] flex flex-col-reverse md:flex-row items-center sm:gap-3">
          <div className="w-fit flex flex-row md:flex-col justify-center items-center gap-3 p-2">
            {[...Array(3)].map((_, index) => (
              <img
                key={index}
                className="rounded sm:rounded-l-md border-gray w-1/12 sm:w-16 cursor-pointer"
                src={product?.image}
                alt="/"
              />
            ))}
          </div>

          <div className="w-full flex justify-center items-start md:items-around sm:px-2">
            <img
              className="w-[35%] md:min-w-[80%] md:max-h-full lg:max-h-[400px]"
              src={product?.image}
              alt="/"
            />
          </div>
        </section>
        {/* Pricing */}
        <section className="w-full md:w-[54%] sm:p-2 text-sm text-[1rem]">
          <div className="sm:mt-4">
            <h3 className="text-sm sm:text-2xl font-semibold mb-2">
              {product?.title}
            </h3>
            {<p className="text-[#333]">Brand: Nike</p>}
            <p className="flex items-center gap-x-1 text-[#333]">
              Rating:
              <span className="flex ">
                <BsStar />
              </span>
              <span className="text-[.75rem] text-slate-400">
                {product?.rating?.rate}
              </span>
            </p>
            <p className="text-[.75rem] text-slate-400">
              {product?.rating?.count}+ sold
            </p>
          </div>
          <hr className="w-1/2" />
          <div className="pricing my-3">
            <p className="text-2xl font-bold">
              ${product?.price}{" "}
              {product && (
                <span className="font-light line-through text-[1.2rem] text-slate-400">
                  ${product.price * 1.25}{" "}
                  {/* Manipulate the slash price based on the actual price */}
                </span>
              )}
            </p>
            <p className="text-[#333] text-sm">+$2.00 delivery fee to Lagos</p>
          </div>

          <div className="w-[60%] sm:w-fit my-3">
            <p className="text-slate-600 font-semibold my-2">Choose a Color</p>
            <div className="flex flex-row justify-between items-center gap-4">
              <div className="w-6 h-6 cursor-pointer bg-[#ECDECC] rounded-full"></div>
              <div className="w-6 h-6 cursor-pointer bg-[#00003C] rounded-full"></div>
              <div className="w-6 h-6 cursor-pointer bg-[#BBC1F8] rounded-full"></div>
              <div className="w-6 h-6 cursor-pointer bg-[#FFD3F8] rounded-full"></div>
            </div>
          </div>

          <div className="my-3 ">
            <p className="text-slate-600 font-semibold my-2">Choose a Size</p>
            <div className="w-fit flex flex-row justify-between items-center gap-2 text-[.7rem]">
              <label
                className="bg-slate-200 flex items-center gap-x-2 py-1 px-2 rounded-md cursor-pointer"
                htmlFor="sm"
              >
                <input
                  className="w-2 h-2 cursor-pointer"
                  type="radio"
                  name="size"
                  id="sm"
                />{" "}
                SM
              </label>
              <label
                className="bg-slate-200 flex items-center gap-x-2 py-1 px-2 rounded-md cursor-pointer"
                htmlFor="md"
              >
                <input
                  className="w-2 h-2 cursor-pointer"
                  type="radio"
                  name="size"
                  id="md"
                />{" "}
                M
              </label>
              <label
                className="bg-slate-200 flex items-center gap-x-2 py-1 px-2 rounded-md cursor-pointer"
                htmlFor="lg"
              >
                <input
                  className="w-2 h-2 cursor-pointer"
                  type="radio"
                  name="size"
                  id="lg"
                />{" "}
                L
              </label>
              <label
                className="bg-slate-200 flex items-center gap-x-2 py-1 px-2 rounded-md cursor-pointer"
                htmlFor="xl"
              >
                <input
                  className="w-2 h-2 cursor-pointer"
                  type="radio"
                  name="size"
                  id="xl"
                />{" "}
                XL
              </label>
              <label
                className="bg-slate-200 flex items-center gap-x-2 py-1 px-2 rounded-md cursor-pointer"
                htmlFor="xxl"
              >
                <input
                  className="w-2 h-2 cursor-pointer"
                  type="radio"
                  name="size"
                  id="xxl"
                />{" "}
                XXL
              </label>
            </div>
          </div>

          <div className="w-full sm:w-2/3 text-slate-500 my-3">
            <p className="font-semibold my-2">Quantity</p>

            <div className="flex flex-row-reverse items-center gap-4">
              <div className="flex-1">
                <button
                  className="w-full flex justify-center items-center text-sm sm:text-[1rem] bg-black py-[.5rem] px-3 text-white my-4 rounded hover:bg-black/90 transition"
                  onClick={handleAddToCart}
                >
                  <BsCart3 className="" size={20} />
                  Add&nbsp;to&nbsp;Cart
                </button>
              </div>
              <div className="flex-1">
                <button className="flex flex-row justify-between items-center border border-[#a7a7a7] rounded-md w-full px-2 py-[.4rem]">
                  <BsDash
                    className="sm:cursor-pointer bg-black text-white"
                    onClick={() => setCounter(counter > 1 ? counter - 1 : 1)}
                    size="25"
                  />
                  {counter}
                  <BsPlus
                    className="sm:cursor-pointer bg-black text-white"
                    onClick={() => setCounter(counter + 1)}
                    size="25"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProductView;
