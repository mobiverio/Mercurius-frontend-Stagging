import React from "react";
import Header from "../../components/molecules/Header";
import Footer from "../../components/molecules/Footers";
import AllGadgets from "./AllGadgets";

const GadgetIndex = () => {
  return (
    <div>
      <Header />
      <AllGadgets />
      <Footer />
    </div>
  );
};

export default GadgetIndex;
