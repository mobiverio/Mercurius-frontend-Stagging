import React, { Fragment } from "react";
import Brands from "../../components/molecules/Brands";
import ProductCategory from "../../components/molecules/ProductCategory";
import { brands, gadgets } from "../../db_local/store";

const AllGadgets = () => {
  return (
    <main className="px-2 py-3 md:px-12">
      <Fragment>
        <ProductCategory productName={"Gadgets"} product={gadgets} />
        <Brands
          brandHeader={"Popular Brands"}
          brandItems={brands}
          brandType={"gadget"}
        />
      </Fragment>
    </main>
  );
};

export default AllGadgets;
