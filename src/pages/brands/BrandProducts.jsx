import React, { useEffect, useState } from "react";
import SampleImage from "../../assets/images/Adidas.png";
import { brands } from "../../db_local/store";
import { Link, useParams } from "react-router-dom";
import Loader from "../../components/molecules/Loader";
import { BsArrowRight } from "react-icons/bs";
const BrandProducts = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productId, setProductId] = useState(0);
  const param = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setProduct(brands);
        const proId = Number(param.id);
        setProductId(proId);

        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <main className="my-4 mx-6 md:mx-12">
      <div className="flex flex-col justify-center items-center gap-4 my-4">
        <img src={SampleImage} alt="Brand Selected" className="w-[10%]" />
        <div className="">
          <div className="flex gap-4">
            {product
              ?.filter((item) => item.id === productId)
              .map((item) => (
                <div className="flex gap-4 font-semibold">
                  {item.categories.map((link) => (
                    <Link key={link.name} to="#">
                      {link}
                    </Link>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 justify-items-center">
        {product.map((item) => {
          return (
            <div className="w-full min-h-[180px] bg-[#fcfcfd] drop-shadow p-3">
              <img className="block mx-auto" src={SampleImage} alt="/" />
              <p className="my-2 font-semibold">Product Name</p>
              <button className="flex items-center gap-2 text-white bg-black rounded-2xl py-1 px-3 my-2">
                Shop
                <BsArrowRight />
              </button>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default BrandProducts;
