import React from "react";
import Cart from "./Cart";
import OrderSummary from "../product-listing/OrderSummary";

// import Delivery from "./Delivery";
// import PickUp from "./PickUp";
// import Checkout from "./Checkout";

export default function CartIndex() {
  return (
    <main className="flex flex-col md:flex-row gap-4 md:gap-4 mb-8">
      <div className="flex-1 basis-[75%]">
        <Cart title={"Shopping Cart"} />
      </div>
      <OrderSummary />
    </main>
  );
}
