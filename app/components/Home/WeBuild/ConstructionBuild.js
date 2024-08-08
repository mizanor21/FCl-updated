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
      <section class="container mx-auto max-w-[1300px]">
        <h2 class="text-3xl font-bold leading-tight mb-4 text-black sm:text-4xl lg:text-4xl">
          What We Build
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="rounded overflow-hidden shadow-lg my-2">
            <img
              class="w-full h-60"
              src="https://i.pinimg.com/originals/94/41/f2/9441f2efd20b16f02e73b25b43181a8c.jpg"
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p class="text-grey-darker text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>

          <div class="rounded overflow-hidden shadow-lg my-2">
            <img
              class="w-full h-60"
              src="https://media.istockphoto.com/id/1332558192/photo/three-multi-ethnic-construction-workers-chatting.jpg?s=612x612&w=0&k=20&c=m6Sevw_6Xw-5LhpnT1C_P6UitIo04em3lhjfx-BGsKg="
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p class="text-grey-darker text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>

          <div class="rounded overflow-hidden shadow-lg my-2">
            <img
              class="w-full h-60"
              src="https://media.istockphoto.com/id/897664288/photo/worker-at-construction-site-is-fixing-the-form-for-the-beam.jpg?s=612x612&w=0&k=20&c=57HkKCv9CDdPuo4goHqNTIQ7yvK-LYScpKTS4OsYwL4="
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p class="text-grey-darker text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConstructionBuild;
