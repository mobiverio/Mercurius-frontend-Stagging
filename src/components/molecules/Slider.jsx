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
    <main className="relative flex items-center my-4 mx-6 md:mx-12 bg-blue-200">
      <div
        className="py-8 px-6 overflow-y-auto hide_bar scroll-smooth"
        id="slider"
      >
        <ul className="flex flex-row gap-4 items-center">
          {items?.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`}>
              <li className="min-w-[200px] max-w-[200px] min-h-[200px] max-h-[200px]">
                <figure className="flex flex-col items-center justify-center bg-white">
                  <img
                    className="w-full cursor-pointer "
                    src={item.url}
                    alt="/"
                  />
                  <figcaption className="p-4 text-center">
                    <h3 className="text-sm font-semibold leading-tight">
                      {item.title}
                    </h3>
                  </figcaption>
                </figure>
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <BsChevronCompactLeft
        size={30}
        className="cursor-pointer block absolute h-full p-2 text-white/70 w-[4%] left-0"
        onClick={leftSlide}
      />
      <BsChevronCompactRight
        size={30}
        className="cursor-pointer block absolute h-full p-2 text-white/70 w-[4%] right-0"
        onClick={rightSlide}
      />
    </main>
  );
};

export default ProductSlider;
