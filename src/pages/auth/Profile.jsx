// ** React Imports
import React, { useState, useEffect, useContext } from "react";

// ** React-Router Imports
import { useNavigate, Link } from "react-router-dom";

// ** Page Imports
import UpdateProfile from "./UpdateProfile";
import ChangePassword from "./ChangePassword";
import Cart from "../cart/Cart";
import { AuthContext } from "../../AppContext/AuthContext";

//** Global state Imports
import useCartStore from "../../zustand/useCartStore";

const Profile = () => {
  const [user, setUser] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useState(null);
  const [toggler, setToggler] = useState(0);
  const navigate = useNavigate();
  const { cart, clearCart } = useCartStore();
  const { Auth } = useContext(AuthContext);

  const handleToggle = (index) => {
    setToggler(index);
  };

  const logout = () => {
    localStorage.removeItem("cartItems");
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("token");
    navigate("/");
    clearCart();
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("loggedInUser")));
    setToken(localStorage.getItem("token"));
  }, []);

  return (
    <main className="sm:px-6 md:px-12 mb-8 mt-4">
      <h3 className="hidden md:flex justify-end items-center text-sm sm:text-[1rem] px-4">
        Welcome {user?.name}
      </h3>
      <div className="flex flex-col sm:flex-row">
        <nav className="w-[25%] flex flex-row md:flex-col justify-between my-4 px-4 sm:px-0">
          <ul className="flex flex-row sm:flex-col gap-4 cursor-pointer text-sm sm:text-[1.2rem">
            <li
              className={
                toggler === 0
                  ? "sm:w-[30%] border-b-[3px] pb-1 border-[#00003C] text-[#222] transition duration-300"
                  : "text-black"
              }
              onClick={() => handleToggle(0)}
            >
              Profile
            </li>
            <li
              className={
                toggler === 1
                  ? "sm:w-[30%] border-b-[3px] pb-1 border-[#00003C] text-[#222] transition duration-300"
                  : "text-black"
              }
              onClick={() => handleToggle(1)}
            >
              Cart
            </li>
            <li
              className={
                toggler === 2
                  ? "sm:w-[30%] border-b-[3px] pb-1 border-[#00003C] text-[#222] transition duration-300"
                  : "text-black"
              }
              onClick={() => handleToggle(2)}
            >
              Stockpile
            </li>
            <li
              className={
                toggler === 3
                  ? "sm:w-[60%] border-b-[3px] pb-1 border-[#00003C] text-[#222] transition duration-300"
                  : "text-black"
              }
              onClick={() => handleToggle(3)}
            >
              Password
            </li>
          </ul>

          <button
            type="button"
            onClick={logout}
            className="hidden md:block border w-fit border-[#00003C] text-[#00003C] hover:bg-[#00003C] hover:text-white transition-colors font-semibold text-sm sm:text-[1rem] sm:my-4 p-2 sm:px-3 sm:py-2 outline-none"
          >
            Logout
          </button>
        </nav>
        <div className="shadow-lg rounded-sm w-full">
          {toggler === 0 && <UpdateProfile />}
          {toggler === 1 && <Cart title={"Your Cart"} />}
          {toggler === 3 && <ChangePassword />}

          {toggler === 1 && cart.length > 0 && (
            <button className="transition-colors text-sm sm:text-[1rem] my-4 p-2 sm:px-3 sm:py-2 outline-none bg-black/90 text-white block ml-auto">
              <Link to="/cart">Proceed to checkout</Link>
            </button>
          )}
        </div>
      </div>
    </main>
  );
};

export default Profile;
