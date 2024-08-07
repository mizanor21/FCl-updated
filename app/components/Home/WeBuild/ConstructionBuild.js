import Image from "next/image";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import buildings from "@/public/assets/BuildConstruction/buildings.png";
import highway from "@/public/assets/BuildConstruction/highway.png";
import road from "@/public/assets/BuildConstruction/road.png";
import bgImage from "@/public/assets/BuildConstruction/bgImg.png";

const ConstructionBuild = () => {
  return (
    <div
      className="py-20 bg-slate-50"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" py-20">
        <div className="mx-5 lg:container lg:mx-auto lg:max-w-[1200px]">
          <div>
            <h2 className="text-3xl  border-l-4 border-green-500 pl-3 uppercase">
              What We Build
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 text-justify">
            <div className="p-10 border hover:border-black duration-1000 bg-white">
              <Image
                src={highway}
                className="w-24 mb-20"
                alt="Building"
              ></Image>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-900">
                  Highway Expansion
                </h3>
                <p className="text-lg text-gray-600 mt-3">
                  Expansion of the main highway with two additional lanes to
                  improve traffic flow and include updated signals and sound
                  barriers.
                </p>
              </div>
              <button className="border border-black hover:bg-black hover:text-white duration-500   rounded-full px-5 py-2 mt-10 flex items-center">
                Learn More <GoArrowUpRight className="font-bold text-xl" />
              </button>
            </div>
            <div className="p-10 border hover:border-black duration-1000 bg-white">
              <Image src={road} className="w-24 mb-20" alt="Building"></Image>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Bridge Construction
                </h3>
                <p className="text-lg text-gray-600 mt-3">
                  Completion of a 500-meter suspension bridge, enhancing
                  connectivity over the river and providing a crucial link for
                  the local transportation network.
                </p>
              </div>
              <button className="border border-black hover:bg-black hover:text-white duration-500   rounded-full px-5 py-2 mt-10 flex items-center">
                Learn More <GoArrowUpRight className="font-bold text-xl" />
              </button>
            </div>
            <div className="p-10 border hover:border-black duration-1000 bg-white">
              <Image
                src={buildings}
                className="w-24 mb-20"
                alt="Building"
              ></Image>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Building Construction
                </h3>
                <p className="text-lg text-gray-600 mt-3">
                  Our construction services are designed to create beautiful,
                  functional, and sustainable homes with a high level of safety
                  and comfort.
                </p>
              </div>
              <button className="border border-black hover:bg-black hover:text-white duration-500   rounded-full px-5 py-2 mt-10 flex items-center">
                Learn More <GoArrowUpRight className="font-bold text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionBuild;
