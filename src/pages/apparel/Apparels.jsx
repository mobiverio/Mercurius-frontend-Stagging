import React from "react";
import Brands from "../../components/molecules/Brands";
import ClothingCategory from "../../components/molecules/ClothingCategory";
import { brands, apparel } from "../../db_local/store";

const Apparels = () => {
  return (
    <main className="px-2 py-3 sm:px-12">
      <section className="main_content">
        <ClothingCategory category={"Men"} items={apparel} />
        <ClothingCategory category={"Women"} items={apparel} />
        <ClothingCategory category={"Children"} items={apparel} />
      </section>
      <section className="brands">
        <Brands
          brandHeader={"Popular Brands"}
          brandItems={brands}
          brandType={"clothing"}
        />
      </section>
    </main>
  );
};

export default Apparels;
