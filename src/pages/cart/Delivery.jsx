import React from "react";
import { BsPencil, BsX, BsPlusCircleFill } from "react-icons/bs";
import "../../styles/Styles.css";

const addressList = [
  {
    id: 1,
    type: "Home",
    street: "06 Ademola Adetokumbo Street",
    address: "06 Ademola Adetukumbo street, Wuse 2, Abuja Nigeria.",
    phone: "+(234) 80-55-0104",
  },
  {
    id: 2,
    type: "Office",
    street: "91 Asokoro Abuja.",
    address: "Federal Mortgage Bank, 91 Asokoro, Abuja.",
    phone: "+(234) 07-55-0127",
  },
];

const Delivery = () => {
  return (
    <main className="mx-12 my-4">
      <h1 className="font-semibold text-2xl my-4">Select Address</h1>
      <div className="flex flex-col rounded-md border p-8">
        {addressList.map((address) => {
          return (
            <div
              key={address.id}
              className="flex flex-row justify-between p-8 bg-black/10 my-4 mx-4 rounded"
            >
              <div className="flex items-start justify-start gap-2">
                <input
                  className="w-3 h-3 mt-3 cursor-pointer"
                  type="radio"
                  name="address"
                  id="address"
                />
                <div className="">
                  <div className="flex justify-start items-center gap-8">
                    <p className="leading-8">{address.street}</p>
                    <p className="text-[12px] text-white px-2 py-[0.2rem] rounded-md bg-black/90">
                      {address.type}
                    </p>
                  </div>
                  <p className="leading-8">{address.address}</p>
                  <p className="leading-8">{address.phone}</p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-4">
                <BsPencil className="text-black/90 hover:text-black cursor-pointer" />{" "}
                <BsX
                  className="text-black/90 hover:text-black cursor-pointer"
                  size={30}
                />
              </div>
            </div>
          );
        })}
        <div className="relative cursor-pointer rounded-lg flex flex-col justify-center items-center p-2 mx-auto m-2 w-full">
          <div className="">
            <BsPlusCircleFill className="" size={30} />
          </div>
          <div className="mt-1">
            <p>Add Address</p>
          </div>
          <div className="absolute border-dashed border-b-2 h-8 -top-1 -z-10 w-3/4"></div>
        </div>
      </div>

      <div className="flex justify-end items-center p-2 gap-4 mx-2 my-8">
        <button className="border py-1 px-3 rounded cursor-pointer transition duration-300 hover:bg-black hover:text-white">
          Back
        </button>
        <button className="border py-1 px-3 rounded cursor-pointer transition duration-300  bg-black text-white hover:bg-white hover:text-black">
          Next
        </button>
      </div>
    </main>
  );
};

export default Delivery;
