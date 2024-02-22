import React from "react";
import OrderSummary from "../product-listing/OrderSummary";
import Image from "../../assets/images/pro6.png";
import { BsPlus, BsDash, BsX } from "react-icons/bs";
const products = [
  {
    id: "#25139526913984",
    img: Image,
    desc: "Adidas Crooped sweatshirt (white)",
    price: "$398",
  },
  {
    id: "#25139526913984",
    img: Image,
    desc: "Adidas Crooped sweatshirt (white)",
    price: "$398",
  },
  {
    id: "#25139526913984",
    img: Image,
    desc: "Adidas Crooped sweatshirt (white)",
    price: "$398",
  },
  {
    id: "#25139526913984",
    img: Image,
    desc: "Adidas Crooped sweatshirt (white)",
    price: "$398",
  },
  {
    id: "#25139526913984",
    img: Image,
    desc: "Adidas Crooped sweatshirt (white)",
    price: "$398",
  },
  {
    id: "#25139526913984",
    img: Image,
    desc: "Adidas Crooped sweatshirt (white)",
    price: "$398",
  },
  {
    id: "#25139526913984",
    img: Image,
    desc: "Adidas Crooped sweatshirt (white)",
    price: "$398",
  },
  {
    id: "#25139526913984",
    img: Image,
    desc: "Adidas Crooped sweatshirt (white)",
    price: "$398",
  },
];

const Cart = () => {
  return (
    <div className="mx-12 my-4">
      <h2 className="font-semibold text-[1.2rem] my-4">Shopping Cart</h2>
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="basis-[60%] overflow-y-auto max-h-[75vh] cart">
          {products.map((item, i) => {
            return (
              <div
                key={i}
                className="flex flex-row justify-between items-center p-2 my-4 border-b border-solid"
              >
                <div className="flex flex-row items-center gap-x-4">
                  <img className="w-12" src={item.img} alt="/" />
                  <div>
                    <p>{item.desc}</p>
                    <p>{item.id}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center justify-between w-32">
                    <BsDash size={20} />
                    <p className="py-1.5 px-2 border">1</p>
                    <BsPlus size={20} />
                  </div>

                  <p className="font-semibold text-[1.2rem]">{item.price}</p>
                  <BsX size={20} />
                </div>
              </div>
            );
          })}
        </div>
        {/* Order Summary */}
        <OrderSummary />
      </div>
    </div>
  );
};

export default Cart;
