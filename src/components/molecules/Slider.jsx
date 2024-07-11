import { Link } from "react-router-dom";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const ProductSlider = function ({ items }) {
  const leftSlide = function () {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 400;
  };

  const rightSlide = function () {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 400;
  };

  return (
    <main className="relative flex items-center my-8 p-1 sm:px-2 md:px-12 sm:mx-6 md:mx-12 bg-blue-200">
      <div
        className="py-4 px-6 overflow-auto hide_bar scroll-smooth"
        id="slider"
      >
        <BsChevronCompactLeft
          size={50}
          className="cursor-pointer absolute z-20 p-2 text-black/70 -left-2 top-[40%]"
          onClick={leftSlide}
        />
        <ul className="w-max flex flex-row gap-4 items-center">
          {items?.map((item, i) => (
            <Link key={i + 1} to={`/product/${item.id}`}>
              <li className="min-w-[150px] max-w-[150px] sm:min-w-[220px] sm:max-w-[220px] hover:scale-105 transition-all">
                <figure className="flex flex-col items-center justify-center bg-white">
                  <img
                    className="w-full cursor-pointer"
                    src={item.url}
                    alt="/"
                  />
                  <figcaption className="p-4 text-center">
                    <h3 className="text-sm font-bold leading-tight">
                      {item.title}
                    </h3>
                  </figcaption>
                </figure>
              </li>
            </Link>
          ))}
        </ul>
        <BsChevronCompactRight
          size={50}
          className="cursor-pointer absolute z-20 p-2 text-black/70 -right-2 top-[40%]"
          onClick={rightSlide}
        />
      </div>
    </main>
  );
};

export default ProductSlider;
