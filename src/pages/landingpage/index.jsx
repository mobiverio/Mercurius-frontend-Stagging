import { React, useState, useEffect, Fragment } from "react";
import { Slider } from "./Hero";
import ProductSlider from "../../components/molecules/Slider";
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
import { getProducts } from "../../api/Axios";
import { items } from "../../db_local/store";

export default function Index() {
  const [newArrivals, setNewArrivals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setNewArrivals(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <Fragment>
      <Slider autoSlideInterval={1000} autoSlide={true} />
      <ProductSlider items={items} />
      <Category />
      <MaleFemaleCategory />
      <Selling products={newArrivals} title={"New Arrivals"} />
      <BrandsIndex />
      <Gadget />
      <BestSelling products={newArrivals} title={"Best Selling"} />
      <BigSale />
    </Fragment>
  );
}
