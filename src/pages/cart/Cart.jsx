// Cart.js
import React from "react";
import { BsPlus, BsDash, BsX } from "react-icons/bs";
import EmptyCart from "../../components/molecules/EmptyCart";
import useCartStore from "../../zustand/useCartStore";

const Cart = ({ title }) => {
  const { cart, removeFromCart, updateQuantity } = useCartStore();

  const handleIncrease = (productId) => {
    const product = cart.find((item) => item.id === productId);
    updateQuantity(productId, product.quantity + 1);
  };

  const handleDecrease = (productId) => {
    const product = cart.find((item) => item.id === productId);
    if (product.quantity > 1) {
      updateQuantity(productId, product.quantity - 1);
    } else {
      removeFromCart(productId);
    }
  };

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div className="p-2 md:ml-4 lg:ml-8 mb-4">
      <h2 className="font-semibold text-sm sm:text-[1.2rem] mb-4">{title}</h2>
      <main>
        {cart.length ? (
          <div className="overflow-y-auto max-h-[75vh] cart scrollbar-hide">
            {cart?.map((item, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row justify-between items-center gap-2 p-2 border-b border-solid"
              >
                <div className="w-full sm:w-fit flex flex-row items-center justify-around gap-x-4 mb-4">
                  <img
                    className="w-14 sm:w-16"
                    src={item.image}
                    alt={item.category}
                  />
                  <div className="text-center sm:text-left text-sm text-[.9rem]">
                    <p>{item.category}</p>
                  </div>
                </div>
                <div className="w-full sm:w-[50%] flex flex-row-reverse sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center justify-end gap-4 w-32 text-sm text-[.9rem]">
                    <BsDash size={20} onClick={() => handleDecrease(item.id)} />
                    <p className="py-1.5 px-2 border">{item.quantity}</p>
                    <BsPlus size={20} onClick={() => handleIncrease(item.id)} />
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-semibold sm:text-[1.2rem]">
                      ${item.price}
                    </p>
                    <BsX size={20} onClick={() => handleRemove(item.id)} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <EmptyCart />
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;
