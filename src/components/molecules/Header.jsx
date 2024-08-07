import React, { useState, useEffect, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { AuthContext } from "../../AppContext/AuthContext";

import {
  BsJustifyLeft,
  BsX,
  BsPerson,
  BsSearch,
  BsCart3,
} from "react-icons/bs";
import useCartStore from "../../zustand/useCartStore";

const navigation = [
  { name: "New In", href: "/new", current: true },
  { name: "Apparel", href: "/apparel", current: false },
  { name: "Accessories", href: "/accessories", current: false },
  { name: "Brands", href: "/brands", current: false },
  { name: "Gadgets", href: "/gadgets", current: false },
  { name: "Sales", href: "/sales", current: false },
];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function Header() {
  const { cart } = useCartStore();
  const [user, setUser] = useState(null);
  const { Auth, setAuth } = useContext(AuthContext);

  console.log(Auth);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("loggedInUser")));

    //eslint-disable-next-line
  }, []);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Disclosure
      as="nav"
      className="fixed inset-x-0 top-0 z-40 shadow bg-white/90"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="min-h-12 flex flex-row flex-nowrap items-center justify-between sm:hidden px-4">
              <div className="sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-black/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black/20">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <BsX
                      className="block h-5 w-5 font-semibold"
                      aria-hidden="true"
                    />
                  ) : (
                    <BsJustifyLeft
                      className="block h-5 w-5"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>

              <div className="sm:hidden font-semibold font-mono text-[1.3rem] md:text-3xl text-center">
                <Link to="/">Mercurius</Link>
              </div>

              <div className="flex flex-row flex-nowrap gap-4">
                <div className="">
                  <Link
                    to="/profile"
                    className="flex flex-row justify-between items-stretch gap-2"
                  >
                    <BsPerson size={20} />
                  </Link>
                </div>

                <div className="">
                  <Link
                    to="/cart"
                    className="flex flex-row justify-center items-stretch gap-2 relative"
                  >
                    <BsCart3 size={20} />
                    <p
                      className={`${
                        totalItems && "block bg-black text-white"
                      } w-5 h-5 absolute -left-3 leading-[11.5px] -top-3 p-1 text-[.75rem] rounded-full text-center`}
                    >
                      {totalItems ? totalItems : null}
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="hidden relative sm:flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-between mt-8 mb-4">
                <div className="hidden sm:block font-semibold font-mono text-[1.3rem] md:text-3xl items-center ml-6 sm:ml-0">
                  <Link to="/">Mercurius</Link>
                </div>

                <div className="hidden flex-1 max-w-[55%] sm:block transition duration-300">
                  <form className="relative">
                    <BsSearch className="absolute top-[30%] left-2 text-black/80" />

                    <input
                      type="text"
                      name="search"
                      id="search"
                      className="border border-[#c3c3c3] rounded-md py-3 px-7 w-[100%] outline-none hover:outline-offset-1"
                      placeholder="Search Brands, Shoes ..."
                    />
                    <input
                      type="submit"
                      value="Search"
                      className="absolute top-[.5rem] right-[1%] bg-[#111] py-1 px-3 rounded-md text-white"
                    />
                  </form>
                </div>

                <div className="hidden sm:flex justify-between gap-x-2 sm:gap-x-4 items-end pr-2 sm:ml-6 sm:pr-0">
                  <div className="">
                    <Link
                      to="/profile"
                      className="flex flex-row justify-between items-stretch gap-1"
                    >
                      <BsPerson size={20} />
                      <p className="hidden sm:block font-semibold">
                        {user !== undefined ? user?.name : `Account`}
                      </p>
                    </Link>
                  </div>
                  <div className="">
                    <Link
                      to="/cart"
                      className="flex flex-row justify-center items-stretch gap-1 relative"
                    >
                      <BsCart3 size={20} />
                      <p className="hidden sm:block font-semibold">Cart</p>
                      <p
                        className={`${
                          totalItems && "block bg-black text-white"
                        } w-5 h-5 absolute -left-3 leading-[11.5px] -top-3 p-1 text-[.75rem] rounded-full text-center`}
                      >
                        {totalItems ? totalItems : null}
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden sm:block mt-4 pb-4">
              <div className="flex gap-x-4 items-center justify-center">
                <div className="justify-self-center">
                  {navigation?.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className={`px-3 py-2 font-medium`}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel
            className={`sm:hidden absolute top-12 right-0 ${
              open ? "left-0" : "-left-[100%]"
            } transition-all duration-1000 z-20 bg-white`}
          >
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation?.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={`block text-base px-3 py-2 font-medium`}
                  // className={classNames(
                  //   item.current
                  //     ? "border-b-2 border-black transition-all"
                  //     : "text-black hover:border-b-2 hover:border-black",
                  //   "block px-3 py-2 text-base font-medium"
                  // )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
