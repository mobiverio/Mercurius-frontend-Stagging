import React, { useState } from "react";
const BrandsPage = () => {
  const [category, setCategory] = useState(["Men", "Women", "Children"]);
  setCategory(["Men", "Women", "Children"]);
  return (
    <main>
      <div>
        <img src="/" alt="Brand Selected" />
        <div className="flex flex-row">
          {category.map((item) => (
            <link to="/">
              <p>{item}</p>
            </link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BrandsPage;
