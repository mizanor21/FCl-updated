import Image from "next/image";
import React from "react";
import img1 from "@/public/assets/banner/constraction.jpeg";
import img2 from "@/public/assets/certificats/c1.png";
import img3 from "@/public/assets/certificats/dhaSouth.png";
import { TbTargetArrow } from "react-icons/tb";
import { IoCompassOutline } from "react-icons/io5";
import { SlTarget } from "react-icons/sl";
import { RxValue } from "react-icons/rx";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <section className="relative bg-gray-800 text-white">
        <div className="relative">
          <Image
            src={img1}
            alt="Banner"
            className="object-cover w-full h-64 bg-black opacity-50"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl font-extrabold"> Explore Us</h1>
            <div className="text-sm text-white breadcrumbs">
              <ul>
                <li>
                  <Link href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 mr-2 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      ></path>
                    </svg>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 mr-2 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      ></path>
                    </svg>
                    Explore Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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
        <div className="absolute top-0 left-0 bg-green-800 bg-opacity-50 max-w-[500px] mx-10 lg:ml-64 h-[80vh] ">
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

      <div>
        {/* <section class="py-10 bg-white sm:py-16 lg:py-24">
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
        </section> */}

        <div className="bg-gray-100 py-20">
          <h2 class="text-3xl text-center font-bold leading-tight text-black sm:text-4xl lg:text-4xl mb-4">
            Certificates
          </h2>
          <div className="relative px-4 py-16 container  mx-auto md:px-24 lg:px-8 lg:py-20 max-w-[1400px]">
            <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                <div className="p-5">
                  <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                    <Image
                      class="relative object-cover w-full h-full"
                      src={img2}
                      alt="Construction"
                    />
                  </div>
                  <p className="mb-2 font-bold">Certificate of incorporation</p>
                  <p className="text-sm leading-5 text-gray-900 text-justify">
                    Sed ut perspiciatis unde omnis iste. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
              </div>

              <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                <div className="p-5">
                  <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                    <Image
                      class="relative object-cover w-full h-full"
                      src={img2}
                      alt="Construction"
                    />
                  </div>
                  <p className="mb-2 font-bold">Certificate of incorporation</p>
                  <p className="text-sm leading-5 text-gray-900 text-justify">
                    Sed ut perspiciatis unde omnis iste. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
              </div>

              <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                <div className="p-5">
                  <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                    <Image
                      class="relative object-cover w-full h-full"
                      src={img2}
                      alt="Construction"
                    />
                  </div>
                  <p className="mb-2 font-bold">Certificate of incorporation</p>
                  <p className="text-sm leading-5 text-gray-900 text-justify">
                    Sed ut perspiciatis unde omnis iste. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
              </div>

              <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                <div className="p-5">
                  <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                    <Image
                      class="relative object-cover w-full h-full"
                      src={img2}
                      alt="Construction"
                    />
                  </div>
                  <p className="mb-2 font-bold">Certificate of incorporation</p>
                  <p className="text-sm leading-5 text-gray-900 text-justify">
                    Sed ut perspiciatis unde omnis iste. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
              </div>

              <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                <div className="p-5">
                  <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                    <Image
                      class="relative object-cover w-full h-full"
                      src={img2}
                      alt="Construction"
                    />
                  </div>
                  <p className="mb-2 font-bold">Certificate of incorporation</p>
                  <p className="text-sm leading-5 text-gray-900 text-justify">
                    Sed ut perspiciatis unde omnis iste. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
              </div>

              <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                <div className="p-5">
                  <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                    <Image
                      class="relative object-cover w-full h-full"
                      src={img2}
                      alt="Construction"
                    />
                  </div>
                  <p className="mb-2 font-bold">Certificate of incorporation</p>
                  <p className="text-sm leading-5 text-gray-900 text-justify">
                    Sed ut perspiciatis unde omnis iste. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
              </div>

              <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                <div className="p-5">
                  <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                    <Image
                      class="relative object-cover w-full h-full"
                      src={img2}
                      alt="Construction"
                    />
                  </div>
                  <p className="mb-2 font-bold">Certificate of incorporation</p>
                  <p className="text-sm leading-5 text-gray-900 text-justify">
                    Sed ut perspiciatis unde omnis iste. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
              </div>

              <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                <div className="p-5">
                  <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                    <Image
                      class="relative object-cover w-full h-full"
                      src={img2}
                      alt="Construction"
                    />
                  </div>
                  <p className="mb-2 font-bold">Certificate of incorporation</p>
                  <p className="text-sm leading-5 text-gray-900 text-justify">
                    Sed ut perspiciatis unde omnis iste. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
