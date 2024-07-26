import React, { useState } from "react";
import ProductDescription from "./ProductDescription";
import ProductReview from "./ProductReview";

const ProductAccordion = ({ product }) => {
  const [showAccordion, setShowAccordion] = useState(1);

  const toggleAccordion = (index) => {
    setShowAccordion(showAccordion === index ? null : index);
  };

  return (
    <main className="p-2 md:mx-12 w-full md:w-[65%]">
      <div className="w-full">
        <div
          id="accordion"
          className="border rounded-md divide-y overflow-hidden"
        >
          {/* Accordion Item 1 */}
          <div>
            <button
              className="accordion-btn w-full flex justify-between items-center p-4 focus:outline-none text-gray-500 focus:text-black"
              onClick={() => toggleAccordion(1)}
            >
              <span>Description</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`accordion-icon w-4 h-4 transform transition-transform duration-300 ${
                  showAccordion === 1 ? "rotate-45" : ""
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
            <div
              className={`accordion-content text-sm bg-gray-50 text-gray-500 transition-all duration-300 ease-in-out ${
                showAccordion === 1 ? "block" : "hidden"
              }`}
            >
              <ProductDescription product={product} />
            </div>
          </div>
          {/* Accordion Item 2 */}
          <div>
            <button
              className="accordion-btn w-full flex justify-between items-center p-4 focus:outline-none text-gray-500 focus:text-black"
              onClick={() => toggleAccordion(2)}
            >
              <span>Review</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`accordion-icon w-4 h-4 transform transition-transform duration-300 ${
                  showAccordion === 2 ? "rotate-45" : ""
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
            <div
              className={`accordion-content text-sm bg-gray-60 text-gray-500 transition-all duration-300 ease-in-out ${
                showAccordion === 2 ? "block" : "hidden"
              }`}
            >
              <ProductReview product={product} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductAccordion;
