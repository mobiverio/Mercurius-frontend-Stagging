// ** React Imports
import React, { useState, useEffect } from "react";

// ** React-Router Imports
import { useNavigate } from "react-router-dom";

// ** Page Imports
import UpdateProfile from "./UpdateProfile";
import ChangePassword from "./ChangePassword";
import Cart from "../cart/Cart";

//** Global state Imports
import useCartStore from "../../zustand/useCartStore";

const Profile = () => {
  const [user, setUser] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useState("");
  const [toggler, setToggler] = useState(0);
  const navigate = useNavigate();
  const { clearCart } = useCartStore();

  const handleToggle = (index) => {
    setToggler(index);
  };

  const logout = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("cartItems");
    clearCart();
    navigate("/");
  };

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("loggedInUser"));
    const access_token = localStorage.getItem("accessToken");
    setUser(users);
    setToken(access_token);
  }, [toggler]);

  return (
    <main className="px-6 md:px-12 my-8">
      <h3 className="flex justify-end items-center pr-16 text-xl">
        Welcome {user?.name}
      </h3>
      <div className="flex flex-row flex-nowrap">
        <nav className="hidden w-[24%] md:flex flex-col p-4 justify-between">
          <ul className="flex flex-col gap-4 cursor-pointer">
            <li
              className={
                toggler === 0
                  ? "w-[30%] border-b-[3px] pb-1 border-[#00003C] text-[#222] text-xl transition duration-300"
                  : "text-black text-xl"
              }
              onClick={() => handleToggle(0)}
            >
              Profile
            </li>
            <li
              className={
                toggler === 1
                  ? "w-[30%] border-b-[3px] pb-1 border-[#00003C] text-[#222] text-xl transition duration-300"
                  : "text-black text-xl"
              }
              onClick={() => handleToggle(1)}
            >
              Cart
            </li>
            <li
              className={
                toggler === 2
                  ? "w-[30%] border-b-[3px] pb-1 border-[#00003C] text-[#222] text-xl transition duration-300"
                  : "text-black text-xl"
              }
              onClick={() => handleToggle(2)}
            >
              Stockpile
            </li>
            <li
              className={
                toggler === 3
                  ? "w-[60%] border-b-[3px] pb-1 border-[#00003C] text-[#222] text-xl transition duration-300"
                  : "text-black text-xl"
              }
              onClick={() => handleToggle(3)}
            >
              Change Password
            </li>
          </ul>

          <button
            type="button"
            onClick={logout}
            className="border w-fit border-[#00003C] text-[#00003C] hover:bg-[#00003C] hover:text-white transition-colors font-semibold my-4 px-3 py-2 outline-none"
          >
            Logout
          </button>
        </nav>
        <div className="shadow-sm rounded-sm w-[76%] p-4">
          {toggler === 0 && <UpdateProfile />}
          {toggler === 1 && <Cart title={"Your Cart"} />}
          {toggler === 3 && <ChangePassword />}
        </div>
      </div>
    </main>
  );
};

export default Profile;
