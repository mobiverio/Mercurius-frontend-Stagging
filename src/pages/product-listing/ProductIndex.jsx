import React, { useState, useEffect } from "react";

import ProductView from "./ProductView";
import ProductDescription from "./ProductDescription";
import ProductReview from "./ProductReview";
import ProductAccordion from "./ProductAccordion";
import { BestSelling } from "../../components/molecules/Selling";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../api/Axios";
import Loader from "../../components/molecules/Loader";

export default function ProductIndex() {
  const singleProduct = useParams();
  const [product, setProduct] = useState(null); // State to hold the product
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getSingleProduct(singleProduct.productId); // Pass singleProduct to getSingleProduct function
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [singleProduct]); // Execute useEffect whenever singleProduct changes

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {product && (
        <>
          <ProductView product={product} />
          <ProductDescription product={product} />
          <ProductReview productId={singleProduct} />
          <ProductAccordion product={product} />
        </>
      )}
      <BestSelling />
    </>
  );
}
