"use client";
import img1 from "@/public/assets/banner/constraction.jpeg";
import img2 from "@/public/assets/banner/banner.jpg";
import Image from "next/image";

const Activities = () => {
  return (
    <div>
      <div className="relative -top-20">
        <div class="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
          <div class="absolute inset-0 bg-black opacity-70">
            <Image
              class="relative object-cover w-full h-full"
              src={img2}
              alt="Construction"
            />
          </div>
        </div>
        <div className="container mx-auto max-w-[1400px]">
          <div>
            <div className="container mx-auto max-w-[1400px]">
              <h1 className="text-4xl font-bold mt-10 mb-10 text-center">
                Area of activities
              </h1>
              <p className="text-justify">
                Bangladesh being a predominantly rural economy, the priority
                need calls for balanced development, covering the whole gamut of
                socio-economic life. The scope for economic development,
                especially in the rural and allied fields, is almost unlimited.
                But, the development programs require comprehensive planning
                including study of social, economic, institutional,
                environmental and physical factors.
              </p>
              <br></br>
              <p className="text-justify">
                The talents and expertise of in-house professional staff of
                Farees Construction Limited offers a complete package of
                services for survey/study/design, Construction works, management
                and supervision and, also for development projects of the
                country. From the start, Farees Construction Limited aimed at
                providing Construction services in different fields. Areas of
                activities are briefly mentioned underneath.
              </p>
            </div>
          </div>

          {/* section 2  */}
        </div>
        <div className="bg-gray-50 py-20 mt-20">
          <div className="container mx-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-3 gap-5">
            <div class="transition-all duration-200 bg-white hover:shadow-xl">
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
                  className="btn mt-4"
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
                    <h3 className="font-bold text-lg">
                      Building and Infrastructure, Energy, Gas and Power
                    </h3>
                    <p className="py-4">
                      Farees Construction Limited&apos;s services are
                      comprehensive. The staff includes engineers, architects,
                      quantity surveyors, project managers, Construction experts
                      & supervisors, material specialists, accountants,
                      estimators, attorneys, and other experienced Construction
                      professionals and skilled/semi-skilled/fresh workers to
                      provide Construction services and value engineering.
                    </p>
                  </div>
                </dialog>
                {/* <p class="mt-4 text-base text-gray-600 text-justify">
                  
                </p> */}
              </div>
            </div>

            <div class="transition-all duration-200 bg-white hover:shadow-xl">
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
                  className="btn mt-4"
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
                    <h3 className="font-bold text-lg">
                      Building and Infrastructure, Energy, Gas and Power
                    </h3>
                    <p className="py-4">
                      Farees Construction Limited&apos;s services are
                      comprehensive. The staff includes engineers, architects,
                      quantity surveyors, project managers, Construction experts
                      & supervisors, material specialists, accountants,
                      estimators, attorneys, and other experienced Construction
                      professionals and skilled/semi-skilled/fresh workers to
                      provide Construction services and value engineering.
                    </p>
                  </div>
                </dialog>
                {/* <p class="mt-4 text-base text-gray-600 text-justify">
                  
                </p> */}
              </div>
            </div>

            <div class="transition-all duration-200 bg-white hover:shadow-xl">
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
                  className="btn mt-4"
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
                    <h3 className="font-bold text-lg">
                      Building and Infrastructure, Energy, Gas and Power
                    </h3>
                    <p className="py-4">
                      Farees Construction Limited&apos;s services are
                      comprehensive. The staff includes engineers, architects,
                      quantity surveyors, project managers, Construction experts
                      & supervisors, material specialists, accountants,
                      estimators, attorneys, and other experienced Construction
                      professionals and skilled/semi-skilled/fresh workers to
                      provide Construction services and value engineering.
                    </p>
                  </div>
                </dialog>
                {/* <p class="mt-4 text-base text-gray-600 text-justify">
                  
                </p> */}
              </div>
            </div>

            <div class="transition-all duration-200 bg-white hover:shadow-xl">
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
                  className="btn mt-4"
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
                    <h3 className="font-bold text-lg">
                      Building and Infrastructure, Energy, Gas and Power
                    </h3>
                    <p className="py-4">
                      Farees Construction Limited&apos;s services are
                      comprehensive. The staff includes engineers, architects,
                      quantity surveyors, project managers, Construction experts
                      & supervisors, material specialists, accountants,
                      estimators, attorneys, and other experienced Construction
                      professionals and skilled/semi-skilled/fresh workers to
                      provide Construction services and value engineering.
                    </p>
                  </div>
                </dialog>
                {/* <p class="mt-4 text-base text-gray-600 text-justify">
                  
                </p> */}
              </div>
            </div>

            <div class="transition-all duration-200 bg-white hover:shadow-xl">
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
                  className="btn mt-4"
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
                    <h3 className="font-bold text-lg">
                      Building and Infrastructure, Energy, Gas and Power
                    </h3>
                    <p className="py-4">
                      Farees Construction Limited&apos;s services are
                      comprehensive. The staff includes engineers, architects,
                      quantity surveyors, project managers, Construction experts
                      & supervisors, material specialists, accountants,
                      estimators, attorneys, and other experienced Construction
                      professionals and skilled/semi-skilled/fresh workers to
                      provide Construction services and value engineering.
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
  );
};

export default Activities;
