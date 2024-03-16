import { React, useState, useEffect } from "react";
import Header from "../../components/molecules/Header";
import { Slider, ItemSelling } from "./Hero";
import Footer from "../../components/molecules/Footers";

import { contents, bests } from "../../db_local/store";

import {
  BestSelling,
  Selling,
  Gadget,
  BigSale,
} from "../../components/molecules/Selling";
import {
  Category,
  MaleFemaleCategory,
} from "../../components/molecules/categories";
import BrandsIndex from "../brands/AllBrands";
import Loader from "../../components/molecules/Loader";
export default function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Assume you have some asynchronous operation here (e.g., fetching data)
    // For demo purposes, we'll simulate a delay with setTimeout
    const delay = setTimeout(() => {
      setLoading(false); // Once data is loaded, set loading to false
      clearTimeout(delay);
    }, 2000); // Simulated 2-second delay
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Header />
      <Slider autoSlideInterval={1000} autoSlide={true} />
      <ItemSelling />
      <Category />
      <MaleFemaleCategory />
      <div className="my-4 mx-6 md:mx-12">
        <p className="font-semibold text-[1.2rem]">New Arrivals</p>
        <Selling products={contents} />
      </div>
      <BrandsIndex />
      <div className="my-4 mx-6 md:mx-12">
        <Gadget />
      </div>
      <BestSelling products={bests} />
      <BigSale />
      <Footer />
    </>
  );
}
