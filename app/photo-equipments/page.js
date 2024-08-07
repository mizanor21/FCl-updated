"use client";
import React, { useState } from "react";
import Image from "next/image";
import img2 from "@/public/assets/banner/constraction.jpeg";

const equipmentImages = [
  {
    src: "https://fclweb.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F50TCrane.107b7a02.jpg&w=3840&q=75",
    alt: "50T Mobile Crane (wheel type)",
  },
  {
    src: "https://fclweb.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F50TCrane.107b7a02.jpg&w=3840&q=75",
    alt: "50T Mobile Crane (wheel type)",
  },
  {
    src: "https://fclweb.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F50TCrane.107b7a02.jpg&w=3840&q=75",
    alt: "50T Mobile Crane (wheel type)",
  },
  {
    src: "https://fclweb.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F50TCrane.107b7a02.jpg&w=3840&q=75",
    alt: "50T Mobile Crane (wheel type)",
  },
  {
    src: "https://fclweb.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F50TCrane.107b7a02.jpg&w=3840&q=75",
    alt: "50T Mobile Crane (wheel type)",
  },
  {
    src: "https://fclweb.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F50TCrane.107b7a02.jpg&w=3840&q=75",
    alt: "50T Mobile Crane (wheel type)",
  },
  {
    src: "https://fclweb.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F50TCrane.107b7a02.jpg&w=3840&q=75",
    alt: "50T Mobile Crane (wheel type)",
  },
  {
    src: "https://fclweb.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F50TCrane.107b7a02.jpg&w=3840&q=75",
    alt: "50T Mobile Crane (wheel type)",
  },
  // Add more image objects as needed
];

const PhotoEquipment = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6;

  // Calculate the current images to display
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = equipmentImages.slice(
    indexOfFirstImage,
    indexOfLastImage
  );

  const totalPages = Math.ceil(equipmentImages.length / imagesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="relative -top-20">
        <div className="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
          <div className="absolute inset-0 bg-black opacity-70">
            <Image
              className="relative object-cover w-full h-full"
              src={img2}
              alt="Construction"
              layout="fill"
            />
          </div>
        </div>
      </div>
      <div className="mx-5 lg:container lg:mx-auto pb-20">
        <div className="mb-10">
          <h2 className="text-4xl font-bold pl-3 uppercase text-center">
            Photos Of Equipment
          </h2>
        </div>
        <section className="py-6">
          <div className="container mx-auto">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {currentImages.map((image, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-lg shadow-lg"
                >
                  <img
                    className="object-cover w-full h-80 transition-transform duration-300 transform group-hover:scale-110"
                    src={image.src}
                    alt={image.alt}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <p className="text-xl font-extrabold text-white">
                      {image.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span>Previous</span>
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => paginate(i + 1)}
                    className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                      currentPage === i + 1
                        ? "bg-green-800 text-white"
                        : "bg-white text-gray-700"
                    } hover:bg-gray-50`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span>Next</span>
                </button>
              </nav>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PhotoEquipment;
