import React, { useContext } from "react";

import HimImg from "../assets/Him.png";
import { ProductContext } from "../Context/ProductContext/ProductContext";

function For_him() {
  const { him, sethim } = useContext(ProductContext);
  return (
    <div className="bg-amber-50">
      <div className="bg-amber-50">
        {/* Heading */}
        <h1 className="bg-gray-100 px-4 py-2 mt-20 text-xl font-mono flex items-center gap-2">
          For Him{" "}
          <span className="text-sm text-gray-600">({him.length} items)</span>
        </h1>

        {/* Top Image Banner */}
        <div className="w-full h-64 sm:h-80 md:h-[400px] mt-3 relative flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${HimImg})` }}
          ></div>
        </div>

        {/* Products Grid */}
        <div className="mt-10 px-4 sm:px-10">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* First 8 cards */}
            {him.slice(0, 8).map((item, index) => (
              <div
                key={index}
                onClick={() => sethim(item)}
                className="overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out mx-auto w-[90%] sm:w-full"
              >
                <div className="relative h-64 sm:h-72 md:h-80 w-full">
                  <img
                    src={item.Img}
                    alt={item.Name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-black text-white text-[10px] px-2 py-0.5 uppercase">
                    New
                  </span>
                </div>
                <div className="p-3 bg-amber-50 text-left">
                  <h1 className="text-gray-900 text-sm font-medium">
                    {item.Name}
                  </h1>
                  <h2 className="text-gray-700 text-sm font-semibold mt-1">
                    $ {item.Price}
                  </h2>
                </div>
              </div>
            ))}

            {/* Middle Section → 1 Big Image + 2 Cards */}
            <div className="col-span-2 md:col-span-4 flex flex-col md:flex-row gap-6 items-stretch mt-10">
              {/* Left Side Big Image */}
              <div className="md:flex-[2] flex-1 h-64 sm:h-80 md:h-[1000px]">
                <img
                  src="https://i.pinimg.com/1200x/05/5f/61/055f61732eff945328656931deb87966.jpg"
                  alt="Special"
                  className="w-full h-full object-cover "
                />
              </div>

              {/* Right Side → 2 Cards */}
              <div className="md:flex-1 flex flex-col gap-4 sm:gap-6 mt-4 md:mt-0">
                {him.slice(8, 10).map((item, index) => (
                  <div
                    key={index}
                    onClick={() => sethim(item)}
                    className=" overflow-hidden mt-5 hover:scale-105 transform transition duration-300 ease-in-out mx-auto w-[90%] sm:w-full"
                  >
                    <div className="relative h-80 sm:h-96 md:h-96 w-full">
                      <img
                        src={item.Img}
                        alt={item.Name}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-2 left-2 bg-black text-white text-[10px] px-2 py-0.5 uppercase">
                        New
                      </span>
                    </div>
                    <div className="p-3 text-left">
                      <h1 className="text-gray-900 text-sm font-medium">
                        {item.Name}
                      </h1>
                      <h2 className="text-gray-700 text-sm font-semibold mt-1">
                        $ {item.Price}
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next 8 cards */}
            {him.slice(10, 18).map((item, index) => (
              <div
                key={index}
                onClick={() => sethim(item)}
                className=" overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out mx-auto w-[90%] sm:w-full"
              >
                <div className="relative h-64 sm:h-72 md:h-80 w-full">
                  <img
                    src={item.Img}
                    alt={item.Name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-black text-white text-[10px] px-2 py-0.5 uppercase">
                    New
                  </span>
                </div>
                <div className="p-3 text-left">
                  <h1 className="text-gray-900 text-sm font-medium">
                    {item.Name}
                  </h1>
                  <h2 className="text-gray-700 text-sm font-semibold mt-1">
                    $ {item.Price}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default For_him;
