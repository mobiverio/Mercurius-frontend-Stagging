import React from "react";
import { BsFacebook, BsTwitterX, BsInstagram } from "react-icons/bs";

const Footers = () => {
  const date = new Date();
  return (
    <div
      className="min-h-72 text-white bg-black/90 flex flex-col items-center justify-around
    "
    >
      <div className="flex flex-row flex-nowrap gap-5">
        <a href="#">Terms of service</a>
        <a href="#">FAQs</a>
      </div>
      <div className="flex flex-row flex-nowrap gap-5">
        <a href="#">
          <BsFacebook size={20} />
        </a>
        <a href="#">
          <BsInstagram size={20} />
        </a>
        <a href="#">
          <BsTwitterX size={20} />
        </a>
      </div>
      <p className="font-semibold text-sm text-white text-center md:text-left">
        Mercurius {date.getFullYear()} All rights reserved. | Mercurius.com |
        mercurius@mercurius.com
      </p>
    </div>
  );
};

export default Footers;
