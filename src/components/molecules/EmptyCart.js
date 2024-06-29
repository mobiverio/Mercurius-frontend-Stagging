import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-sm sm:text-xl">oops! Your cart is currently Empty..</p>
      <Link to={"/"}>
        <button className="py-2 px-4 my-4 bg-black text-white hover:bg-black/90">
          Shop now
        </button>
      </Link>
    </div>
  );
};

export default EmptyCart;
