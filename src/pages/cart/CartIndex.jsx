import React from "react";
import Cart from "./Cart";
import OrderSummary from "../product-listing/OrderSummary";

// import Delivery from "./Delivery";
// import PickUp from "./PickUp";
// import Checkout from "./Checkout";

export default function CartIndex() {
  return (
    <main className="flex flex-col md:flex-row gap-4 mb-8 mt-4 px-4">
      <div className="basis-[70%]">
        <Cart title={"Shopping Cart"} />
      </div>
      <div className="basis-[30%]">
        <OrderSummary />
      </div>
    </main>
  );
}
