import React from "react";
import Cart from "./Cart";
import OrderSummary from "../product-listing/OrderSummary";
import useCartStore from "../../zustand/useCartStore";

export default function CartIndex() {
  const { cart } = useCartStore();

  return (
    <main className="flex flex-col md:flex-row gap-4 sm:gap-8 mb-8 mt-4 px-4 sm:w-[85%] mx-auto">
      <div className={`${cart.length ? "basis-[70%]" : "basis-[100%]"}`}>
        <Cart title={"Shopping Cart"} />
      </div>
      <div className={`${cart.length ? "basis-[30%]" : "basis-[0%]"}`}>
        <OrderSummary />
      </div>
    </main>
  );
}
