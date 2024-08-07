import Image from "next/image";
import React from "react";
import img1 from "@/public/assets/banner/constraction.jpeg";
import img2 from "@/public/assets/certificats/c1.png";
import img3 from "@/public/assets/certificats/dhaSouth.png";
import { TbTargetArrow } from "react-icons/tb";
import { IoCompassOutline } from "react-icons/io5";
import { SlTarget } from "react-icons/sl";
import { RxValue } from "react-icons/rx";

const page = () => {
  return (
    <div>
      <div className="relative -top-20">
        <div class="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
          <div class="absolute inset-0 bg-black opacity-70">
            <Image
              class="relative object-cover w-full h-full"
              src={img1}
              alt="Construction"
            />
          </div>
        </div>
      </div>

      <div>
        <section class="py-10 sm:py-16 lg:py-24">
          <div class="max-w-[1400px] px-4 mx-auto sm:px-6 lg:px-8">
            <div class="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
              <div class="">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl mb-4">
                  Farees Construction Limited (FCL)
                </h2>
                <div className="text-justify">
                  <p>
                    <strong>FAREES CONSTRUCTION LIMITED (FCL)</strong> is an
                    independent engineering construction company with an
                    objective to provide complete and international standard
                    technical approach in the construction industry of
                    Bangladesh. Man Enterprise ventured into the construction
                    area as early as 2012 and Farees Construction Limited (FCL)
                    was formed in 2017 to join the venture. The company was
                    created out of a vision of Brigadier General AKM Mahfuzul
                    Haque (Retd.), the CEO & MD of Farees Construction Limited,
                    to serve the nation with top-quality professionals.
                  </p>
                  <br></br>
                  <p>
                    <strong>FCL</strong> consists of a professionals, experts in
                    the development sectors, and experienced management. The
                    organization have launched country-wide nation-building
                    activities by completing several multi-storied buildings,
                    hydraulic structures, deep tube wells, water purification
                    plants, irrigation, flood control projects, etc.{" "}
                    <strong>FCL</strong> is also experienced in constructing
                    piling (situ/bored/caisson), pile cap &retaining structures
                    etc.
                  </p>
                  <br></br>
                  <p>
                    Over the short period after its establishment,{" "}
                    <strong>FCL</strong> gathered experience in different
                    fields, working with local and foreign experts and
                    management professionals in both government & foreign funded
                    projects and delivered mentionable construction services.
                    Combining experience with quality, <strong>FCL</strong>{" "}
                    emerged as one of the top construction firms in Bangladesh.
                    With workmanship and refinement, it earned a reputation in
                    several sectors involving engineering and technological
                    inputs.
                  </p>
                </div>
              </div>

              <div class="relative pl-20 pr-6 sm:pl-6 md:px-0">
                <div class="relative w-full max-w-lg mt-4 mb-10 ml-auto">
                  <img
                    class="ml-auto"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/person.jpg"
                    alt=""
                  />

                  <img
                    class="absolute -top-4 -left-12"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/wavey-lines.svg"
                    alt=""
                  />

                  <div class="absolute -bottom-10 -left-16">
                    <div class="bg-yellow-300">
                      <div class="px-8 py-10">
                        <span class="block text-4xl font-bold text-black lg:text-5xl">
                          {" "}
                          8+{" "}
                        </span>
                        <span class="block mt-2 text-base leading-tight text-black">
                          {" "}
                          Years Of
                          <br />
                          Experience
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* section 02  */}
      <div className="relative w-full h-[80vh]">
        {/* Background Image */}
        <Image
          src={img1}
          alt="Description of the image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />

        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        {/* Section with Content */}
        <div className="absolute top-0 left-0 bg-green-800 max-w-[500px] mx-10 lg:ml-64 h-[80vh] ">
          <div className="text-white p-10">
            <p>OUR VALUE</p>
            <h1 className="text-4xl font-bold mb-4">
              Quality care from quality experts.
            </h1>
            <p className="text-lg mb-6">
              Explore our amazing content and features.
            </p>
            <div className="flex mb-10">
              <div>
                <IoCompassOutline className="text-5xl mr-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold ">Mission</h3>

                <p>
                  In order to make a better world by destroying mental health
                  related taboo as well as rising mental health awareness to
                  society.
                </p>
              </div>
            </div>

            <div className="flex mb-10">
              <div>
                <SlTarget className="text-5xl mr-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold ">Vission</h3>

                <p>
                  In order to make a better world by destroying mental health
                  related taboo as well as rising mental health awareness to
                  society.
                </p>
              </div>
            </div>

            <div className="flex ">
              <div>
                <RxValue className="text-5xl mr-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold ">Our Values</h3>

                <p>
                  In order to make a better world by destroying mental health
                  related taboo as well as rising mental health awareness to
                  society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 03  */}
      <h2 class="text-3xl text-center mt-20 font-bold leading-tight text-black sm:text-4xl lg:text-4xl mb-4">
        Certificates
      </h2>
      <div>
        <section class="py-10 bg-white sm:py-16 lg:py-24">
          <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-4 sm:gap-12">
              <div>
                <div class="flex items-center justify-center w-20 h-20 mx-auto bg-blue-100 rounded-full">
                  <Image
                    class="relative object-cover w-full h-full"
                    src={img2}
                    alt="Construction"
                  />
                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">
                  Certificate of incorporation
                </h3>
              </div>

              <div>
                <div class="flex items-center justify-center w-20 h-20 mx-auto bg-blue-100 rounded-full">
                  <Image
                    class="relative object-cover w-full h-full"
                    src={img3}
                    alt="Construction"
                  />
                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">
                  Certificate of etrade license
                </h3>
              </div>
              <div>
                <div class="flex items-center justify-center w-20 h-20 mx-auto bg-blue-100 rounded-full">
                  <Image
                    class="relative object-cover w-full h-full"
                    src={img2}
                    alt="Construction"
                  />
                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">
                  Certificate of incorporation
                </h3>
              </div>
              <div>
                <div class="flex items-center justify-center w-20 h-20 mx-auto bg-blue-100 rounded-full">
                  <Image
                    class="relative object-cover w-full h-full"
                    src={img2}
                    alt="Construction"
                  />
                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">
                  Certificate of incorporation
                </h3>
              </div>
              <div>
                <div class="flex items-center justify-center w-20 h-20 mx-auto bg-blue-100 rounded-full">
                  <Image
                    class="relative object-cover w-full h-full"
                    src={img2}
                    alt="Construction"
                  />
                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">
                  Certificate of incorporation
                </h3>
              </div>
              <div>
                <div class="flex items-center justify-center w-20 h-20 mx-auto bg-blue-100 rounded-full">
                  <Image
                    class="relative object-cover w-full h-full"
                    src={img2}
                    alt="Construction"
                  />
                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">
                  Certificate of incorporation
                </h3>
              </div>
              <div>
                <div class="flex items-center justify-center w-20 h-20 mx-auto bg-blue-100 rounded-full">
                  <Image
                    class="relative object-cover w-full h-full"
                    src={img2}
                    alt="Construction"
                  />
                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">
                  Certificate of incorporation
                </h3>
              </div>
              <div>
                <div class="flex items-center justify-center w-20 h-20 mx-auto bg-blue-100 rounded-full">
                  <Image
                    class="relative object-cover w-full h-full"
                    src={img2}
                    alt="Construction"
                  />
                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">
                  Certificate of incorporation
                </h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
