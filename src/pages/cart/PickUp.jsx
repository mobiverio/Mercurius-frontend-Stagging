import React from "react";
import "../../styles/Styles.css";

const PickUp = () => {
  return (
    <div className="mx-12 my-4">
      <h1 className="font-semibold text-2xl my-4">Shipment Method</h1>
      <form className="text-slate-500">
        <div className="my-4 flex flex-row flex-nowrap justify-between items-center border-2 rounded-lg p-6">
          <div className="w-fit flex flex-row flex-nowrap justify-between items-center">
            <input
              className="w-3 h-3 mr-4 cursor-pointer"
              type="radio"
              name="pickUp"
              id="pickUp"
            />
            <p className="mr-8">Free</p>
            <p>Pick-up</p>
          </div>
          <div>11 Oct, 2024</div>
        </div>

        <div className="my-4 flex flex-row flex-nowrap justify-between items-center border-2 rounded-lg p-6">
          <div className="w-fit flex flex-row flex-nowrap justify-between items-center">
            <input
              className="w-3 h-3 mr-4 cursor-pointer"
              type="radio"
              name="pickUp"
              id="pickUp"
            />
            <p className="mr-8">Regular</p>
            <p>Delivery</p>
          </div>
          <div>14 Oct, 2024</div>
        </div>

        <div className="my-4 flex flex-row flex-nowrap justify-between items-center border-2 rounded-lg p-6">
          <div className="w-fit flex flex-row flex-nowrap justify-between items-center">
            <input
              className="w-3 h-3 mr-4 cursor-pointer"
              type="radio"
              name="pickUp"
              id="pickUp"
            />
            <p className="mr-12">$8.50</p>
            <p>Get Your Delivery as soon as possible</p>
          </div>
          <div>14 Oct, 2024</div>
        </div>

        <div className="my-4 flex flex-row flex-nowrap justify-between items-center border-2 rounded-lg p-6">
          <div className="w-fit flex flex-row flex-nowrap justify-between items-center">
            <input
              className="w-3 h-3 mr-4 cursor-pointer"
              type="radio"
              name="pickUp"
              id="pickUp"
            />
            <p className="mr-8">Schedule</p>
            <p>Pick a date when you want to get your delivery</p>
          </div>
          <div>
            <input type="date" name="" id="" />
          </div>
        </div>
      </form>

      <div className="flex justify-end items-center p-2 gap-4 mx-2 my-8">
        <button className="border py-1 px-3 rounded cursor-pointer transition duration-300 hover:bg-black hover:text-white">
          Back
        </button>
        <button className="border py-1 px-3 rounded cursor-pointer transition duration-300  bg-black text-white hover:bg-white hover:text-black">
          Next
        </button>
      </div>
    </div>
  );
};

export default PickUp;
