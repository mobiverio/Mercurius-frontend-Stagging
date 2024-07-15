import React from "react";
import { Selling } from "../../components/molecules/Selling";
import { apparel, brands, accessories } from "../../db_local/store";
import Brands from "../../components/molecules/Brands";
import ClothingCategory from "../../components/molecules/ClothingCategory";

const Accessories = () => {
  return (
    <main className="px-2 py-3 sm:px-12">
      <ClothingCategory category={"Beauty Accessories"} items={apparel} />
      <Selling products={accessories} title={"Fast Selling"} />
      <Brands
        brandHeader={"Popular Brands"}
        brandItems={brands}
        brandType={"clothing"}
      />
    </main>
  );
};

export default Accessories;
