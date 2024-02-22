import Accordion from "../product-listing/Accordion";
import Footer from "../../components/molecules/Footers";
import Header from "../../components/molecules/Header";
import { Selling } from "../../components/molecules/Selling";
export const Product = function () {
  return (
    <>
      <Header />
      <div className="px-2 sm:px-12 flex flex-row gap-x-4 mt-12 scrollbar-hide">
        <Accordion />
        <Selling />
      </div>
      <Footer />
    </>
  );
};
