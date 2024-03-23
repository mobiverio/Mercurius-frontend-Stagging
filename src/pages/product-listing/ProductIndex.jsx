import React from "react";
import { ProductView, ProductDescription } from "./ProductView";
import { Review } from "../product-single/Review";
import { BestSelling } from "../../components/molecules/Selling";
import { bests } from "../../db_local/store";

export default function ProductIndex() {
  return (
    <>
      <ProductView />
      <ProductDescription />
      <Review />
      <BestSelling products={bests} />
    </>
  );
}
