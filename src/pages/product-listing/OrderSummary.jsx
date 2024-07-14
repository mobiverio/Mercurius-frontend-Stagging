import React, { useState } from "react";
import useCartStore from "../../zustand/useCartStore";
import PaymentOptionsModal from "../../components/molecules/PaymentOptionsModal"; // Import the new modal component

const OrderSummary = () => {
  const { cart } = useCartStore();
  const [isModalOpen, setModalOpen] = useState(false); // State to handle modal visibility

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const estimatedTax = subtotal * 0.05; // Assuming 5% tax rate
  const shipping = 29; // Flat shipping rate
  const total = subtotal + estimatedTax + shipping;

  // Function to toggle modal visibility
  const handleCheckoutClick = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <main>
      {cart.length ? (
        <div className="border p-2 sm:py-4 sm:px-4 rounded w-full">
          <h2 className="font-semibold text-sm sm:text-[1.2rem] mb-4">
            Order Summary
          </h2>
          <div>
            <ul>
              <li className="flex flex-row flex-nowrap justify-between my-2">
                <p className="font-semibold">Sub-Total</p>
                <p className="font-semibold">${subtotal.toFixed(2)}</p>
              </li>
              <li className="flex flex-row flex-nowrap justify-between my-2">
                <p className="font-semibold text-black/60">Estimated Tax</p>
                <p className="font-semibold">${estimatedTax.toFixed(2)}</p>
              </li>
              <li className="flex flex-row flex-nowrap justify-between my-2">
                <p className="font-semibold text-black/60">
                  Estimated shipping & Handling
                </p>
                <p className="font-semibold">${shipping.toFixed(2)}</p>
              </li>
              <li className="flex flex-row flex-nowrap justify-between my-2">
                <p className="font-semibold">Total</p>
                <p className="font-semibold">${total.toFixed(2)}</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <button
              onClick={handleCheckoutClick}
              className="flex flex-row justify-center items-center gap-x-8 p-2 border w-full my-2 rounded-md bg-black text-white hover:text-white hover:bg-black/80 transition duration-300"
            >
              Checkout
            </button>
            <button className="flex flex-row justify-center items-center gap-x-8 p-2 border w-full my-2 rounded-md hover:bg-black/80 hover:text-white text-black bg-transparent">
              Stockpile
            </button>
          </div>
          {isModalOpen && <PaymentOptionsModal onClose={handleCheckoutClick} />}{" "}
          {/* Render modal if open */}
        </div>
      ) : null}
    </main>
  );
};

export default OrderSummary;
