"use client";
import React from "react";
import img1 from "@/public/assets/banner/constraction.jpeg";
import Image from "next/image";
import ProfileCard from "../Profile/MDProfile";

const Banner = () => {
  return (
    <div className="relative -top-20">
      <div class="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-40 2xl:pb-56">
        <div class="absolute inset-0 bg-black opacity-50">
          <Image
            class="object-cover w-full h-full"
            src={img1}
            alt="Construction"
          />
        </div>

        <div class="relative">
          <div class="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div class="w-full lg:w-2/3 xl:w-1/2">
              <h1 class="font-sans text-base font-bold tracking-tight text-white text-opacity-90">
                <span>Farees Construction Limited (FCL)</span>
              </h1>
              <p class="mt-6 tracking-tighter text-white">
                <span class=" font-normal text-3xl md:text-4xl lg:text-6xl">
                  <strong>For a Green Future with Trust and Quality</strong>
                </span>
              </p>
              <p class="mt-4 font-sans text-base font-normal leading-7 text-white text-opacity-90">
                Commitment to build on a tradition of trust through dedication,
                collaboration, customer satisfaction, and value creation for a
                green future.
              </p>

              <div class="md:flex md:items-center mt-5 md:space-x-3">
                <a
                  href="#recent-works"
                  title=""
                  class="
                            
                            inline-flex
                            items-center
                            justify-center
                            mb-3
                            md:mb-0
                            w-full
                            px-5
                            py-2
                            font-sans
                            text-base
                            font-semibold
                            transition-all
                            duration-200
                            border-2 border-transparent
                            rounded-full
                            sm:leading-8
                            bg-white
                            sm:text-lg
                            text-black
                            hover:bg-opacity-90
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
                        "
                  role="button"
                >
                  Recent Works
                </a>

                <button
                  className="inline-flex
                            items-center
                            justify-center
                            w-full
                            px-5
                            py-2
                            font-sans
                            text-base
                            font-semibold
                            transition-all
                            duration-200
                            bg-transparent
                            border-2
                            rounded-full
                            sm:leading-8
                            text-white
                            hover:bg-white
                            hover:text-black
                            sm:text-lg"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                >
                  MD’s Speech
                </button>
                <dialog id="my_modal_2" className="modal min-w-[600px]">
                  <div className="modal-box">
                    <ProfileCard />
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
