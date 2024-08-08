import Link from "next/link";
import house from "@/public/assets/shortAbout/house.jpg";
import road from "@/public/assets/shortAbout/road.jpeg";
import cons from "@/public/assets/shortAbout/cons.jpg";
import Image from "next/image";

const ShortAbout = () => {
  return (
    // <div className="bg-white">
    //   <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
    //     <div className="grid gap-10 lg:grid-cols-2">
    //       <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
    //         <div className="max-w-xl mb-6">
    //           <h2 className=" mb-6 text-4xl font-bold  border-l-4 border-green-500 pl-3 py-5">
    //             <span className="uppercase">
    //               Farees Construction <br /> Limited (FCL)
    //             </span>
    //             <p className="font-medium text-xl mt-5">
    //               A sister concern of MAN Enterprise
    //             </p>
    //           </h2>

    //           <p>
    //             <strong>FAREES CONSTRUCTION LIMITED (FCL)</strong> is an
    //             independent engineering construction company with an objective
    //             to provide complete and international standard technical
    //             approach in the construction industry of Bangladesh.
    //           </p>
    //         </div>
    //         <div>
    //           <Link
    //             href="/about"
    //             aria-label=""
    //             className="inline-flex items-center  font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
    //           >
    //             Learn more
    //             <svg
    //               className="inline-block w-3 ml-2"
    //               fill="currentColor"
    //               viewBox="0 0 12 12"
    //             >
    //               <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
    //             </svg>
    //           </Link>
    //         </div>
    //       </div>
    //       <div className="flex items-center justify-center -mx-4 lg:pl-8">
    //         <div className="flex flex-col items-end px-3">
    //           <Image
    //             className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-72"
    //             src={cons}
    //             alt=""
    //           />
    //           <Image
    //             className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
    //             src={road}
    //             alt=""
    //           />
    //         </div>
    //         <div className="px-3">
    //           <Image
    //             className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-96 sm:w-64 xl:w-96"
    //             src={house}
    //             alt=""
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div>
      <section class="py-10  sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="grid items-stretch gap-y-10 md:grid-cols-2 md:gap-x-20">
            <div class="relative grid grid-cols-2 gap-6 mt-10 md:mt-0">
              <div class="overflow-hidden aspect-w-3 aspect-h-4">
                <img
                  class="object-cover object-top origin-top scale-150"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/team-work.jpg"
                  alt=""
                />
              </div>

              <div class="relative">
                <div class="h-full overflow-hidden aspect-w-3 aspect-h-4">
                  <img
                    class="object-cover scale-150 lg:origin-bottom-right"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/woman-working-on-laptop.jpg"
                    alt=""
                  />
                </div>

                <div class="absolute inset-0 grid w-full h-full place-items-center">
                  <button
                    type="button"
                    class="inline-flex items-center justify-center w-12 h-12 text-blue-600 bg-white rounded-full shadow-md lg:w-20 lg:h-20"
                  >
                    <svg
                      class="w-6 h-6 lg:w-8 lg:h-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div class="flex flex-col items-start xl:px-16 mt-5">
              <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl">
                Farees Construction Limited (FCL)
              </h2>
              <p className="font-bold text-xl mt-5">
                A sister concern of MAN Enterprise
              </p>
              <p class="mt-4 text-base leading-relaxed text-gray-600 text-justify">
                FAREES CONSTRUCTION LIMITED (FCL) is an independent engineering
                construction company with an objective to provide complete and
                international standard technical approach in the construction
                industry of Bangladesh.
              </p>

              <Link
                href="/about"
                title=""
                class="inline-flex items-center justify-center px-5 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md hover:opacity-90 focus:opacity-90 lg: mt-4 bg-black"
                role="button"
              >
                Explore Now
                <svg
                  class="w-5 h-5 ml-8 -mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShortAbout;
