"use client";
import img1 from "@/public/assets/banner/constraction.jpeg";
import img2 from "@/public/assets/banner/banner.jpg";
import Image from "next/image";
import Link from "next/link";

const Activities = () => {
  return (
    <div>
      <div className="">
        <section className="relative bg-gray-800 text-white">
          <div className="relative">
            <Image
              src={img1}
              alt="Banner"
              className="object-cover w-full h-64 bg-black opacity-50"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <h1 className="text-white text-4xl font-extrabold">
                {" "}
                Area of Activities
              </h1>
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
                      Area of Activities
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-gray-50 py-20">
          <div className="container mx-auto max-w-[1400px]">
            <div className="">
              <div className="container mx-auto max-w-[1400px]">
                <h1 className="text-4xl font-bold mb-5">Introduction</h1>
                <p className="text-justify">
                  Bangladesh being a predominantly rural economy, the priority
                  need calls for balanced development, covering the whole gamut
                  of socio-economic life. The scope for economic development,
                  especially in the rural and allied fields, is almost
                  unlimited. But, the development programs require comprehensive
                  planning including study of social, economic, institutional,
                  environmental and physical factors.
                </p>
                <br></br>
                <p className="text-justify">
                  The talents and expertise of in-house professional staff of
                  Farees Construction Limited offers a complete package of
                  services for survey/study/design, Construction works,
                  management and supervision and, also for development projects
                  of the country. From the start, Farees Construction Limited
                  aimed at providing Construction services in different fields.
                  Areas of activities are briefly mentioned underneath.
                </p>
              </div>
            </div>

            {/* section 2  */}
          </div>
          <div className="mt-10">
            <div className="container mx-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-3 gap-5">
              <div class="transition-all duration-200 bg-white hover:shadow-xl rounded-xl">
                <div class="py-10 px-9">
                  <Image
                    class="relative object-cover w-full h-full"
                    src={img1}
                    alt="Construction"
                  />
                  <h3 class="mt-8 text-lg font-semibold text-black">
                    Building and Infrastructure, Energy, Gas and Power
                  </h3>
                  {/* You can open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    className="btn mt-4 w-full rounded-full"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    View Details
                  </button>
                  <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                      </form>
                      <br></br>

                      <Image
                        class="relative object-cover w-full h-full mb-4"
                        src={img1}
                        alt="Construction"
                      />

                      <h3 className="font-bold text-lg">
                        Building and Infrastructure, Energy, Gas and Power
                      </h3>
                      <p className="py-4">
                        Farees Construction Limited&apos;s services are
                        comprehensive. The staff includes engineers, architects,
                        quantity surveyors, project managers, Construction
                        experts & supervisors, material specialists,
                        accountants, estimators, attorneys, and other
                        experienced Construction professionals and
                        skilled/semi-skilled/fresh workers to provide
                        Construction services and value engineering.
                      </p>
                    </div>
                  </dialog>
                  {/* <p class="mt-4 text-base text-gray-600 text-justify">
                  
                </p> */}
                </div>
              </div>

              <div class="transition-all duration-200 bg-white hover:shadow-xl rounded-xl">
                <div class="py-10 px-9">
                  <Image
                    class="relative object-cover w-full h-full"
                    src={img1}
                    alt="Construction"
                  />
                  <h3 class="mt-8 text-lg font-semibold text-black">
                    Building and Infrastructure, Energy, Gas and Power
                  </h3>
                  {/* You can open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    className="btn mt-4 w-full rounded-full"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    View Details
                  </button>
                  <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                      </form>
                      <br></br>

                      <Image
                        class="relative object-cover w-full h-full mb-4"
                        src={img1}
                        alt="Construction"
                      />

                      <h3 className="font-bold text-lg">
                        Building and Infrastructure, Energy, Gas and Power
                      </h3>
                      <p className="py-4">
                        Farees Construction Limited&apos;s services are
                        comprehensive. The staff includes engineers, architects,
                        quantity surveyors, project managers, Construction
                        experts & supervisors, material specialists,
                        accountants, estimators, attorneys, and other
                        experienced Construction professionals and
                        skilled/semi-skilled/fresh workers to provide
                        Construction services and value engineering.
                      </p>
                    </div>
                  </dialog>
                  {/* <p class="mt-4 text-base text-gray-600 text-justify">
                  
                </p> */}
                </div>
              </div>

              <div class="transition-all duration-200 bg-white hover:shadow-xl rounded-xl">
                <div class="py-10 px-9">
                  <Image
                    class="relative object-cover w-full h-full"
                    src={img1}
                    alt="Construction"
                  />
                  <h3 class="mt-8 text-lg font-semibold text-black">
                    Building and Infrastructure, Energy, Gas and Power
                  </h3>
                  {/* You can open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    className="btn mt-4 w-full rounded-full"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    View Details
                  </button>
                  <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                      </form>
                      <br></br>

                      <Image
                        class="relative object-cover w-full h-full mb-4"
                        src={img1}
                        alt="Construction"
                      />

                      <h3 className="font-bold text-lg">
                        Building and Infrastructure, Energy, Gas and Power
                      </h3>
                      <p className="py-4">
                        Farees Construction Limited&apos;s services are
                        comprehensive. The staff includes engineers, architects,
                        quantity surveyors, project managers, Construction
                        experts & supervisors, material specialists,
                        accountants, estimators, attorneys, and other
                        experienced Construction professionals and
                        skilled/semi-skilled/fresh workers to provide
                        Construction services and value engineering.
                      </p>
                    </div>
                  </dialog>
                  {/* <p class="mt-4 text-base text-gray-600 text-justify">
                  
                </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
