import React from "react";
import Brands from "../../components/molecules/Brands";
import ProductCategory from "../../components/molecules/ProductCategory";
import { brands, gadgets } from "../../db_local/store";

const AllGadgets = () => {
  return (
    <main className="px-2 py-3 md:px-12">
      <div className="">
        <ProductCategory productName={"Gadgets"} product={gadgets} />
        <Brands brandCategory={"Shop by Brand"} brandItems={brands} />
      </div>
    </main>
  );
};

export default AllGadgets;
