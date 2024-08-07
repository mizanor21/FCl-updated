"use client";

import Image from "next/image";
import React, { useState } from "react";
import img1 from "@/public/assets/Gallery/BUP-Pic/1.jpg";
import img2 from "@/public/assets/Gallery/BUP-Pic/2.jpg";
import img3 from "@/public/assets/Gallery/BUP-Pic/3.jpg";
import img4 from "@/public/assets/Gallery/BUP-Pic/4.jpg";
import img5 from "@/public/assets/Gallery/BUP-Pic/5.jpg";
import img6 from "@/public/assets/Gallery/BUP-Pic/6.jpg";
import img7 from "@/public/assets/Gallery/BUP-Pic/7.jpg";
import img8 from "@/public/assets/Gallery/BUP-Pic/8.jpg";
import img9 from "@/public/assets/Gallery/BUP-Pic/9.jpg";

const imagesData = [
  {
    id: 1,
    src: "https://fclweb.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.c3a22bb5.jpg&w=3840&q=75",
    alt: "Nature 1",
    category: "nature",
  },
  {
    id: 2,
    src: "https://fclweb.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.c3a22bb5.jpg&w=3840&q=75",
    alt: "Nature 1",
    category: "nature",
  },
  {
    id: 3,
    src: "https://fclweb.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.c3a22bb5.jpg&w=3840&q=75",
    alt: "Nature 1",
    category: "natarchitecture",
  },
  {
    id: 4,
    src: "https://fclweb.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.c3a22bb5.jpg&w=3840&q=75",
    alt: "Nature 1",
    category: "nature",
  },
  {
    id: 5,
    src: "https://fclweb.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.c3a22bb5.jpg&w=3840&q=75",
    alt: "Nature 1",
    category: "nature",
  },
  {
    id: 6,
    src: "https://fclweb.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.c3a22bb5.jpg&w=3840&q=75",
    alt: "Nature 1",
    category: "architecture",
  },
  {
    id: 7,
    src: "https://fclweb.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.c3a22bb5.jpg&w=3840&q=75",
    alt: "Nature 1",
    category: "nature",
  },
  {
    id: 8,
    src: "https://fclweb.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.c3a22bb5.jpg&w=3840&q=75",
    alt: "Nature 1",
    category: "art",
  },
  {
    id: 9,
    src: "https://fclweb.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.c3a22bb5.jpg&w=3840&q=75",
    alt: "Nature 1",
    category: "nature",
  },
  {
    id: 10,
    src: "https://fclweb.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.c3a22bb5.jpg&w=3840&q=75",
    alt: "Nature 1",
    category: "art",
  },
];

const categories = ["all", "nature", "architecture", "art"];

const gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredImages =
    selectedCategory === "all"
      ? imagesData
      : imagesData.filter((image) => image.category === selectedCategory);

  return (
    <div>
      <div className="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
        <div className="absolute inset-0 bg-black opacity-70">
          <Image
            className="relative object-cover w-full h-full"
            src={img1}
            alt="Construction"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
      <div className="container mx-auto p-4">
        <div className="flex justify-center mb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`m-2 py-2 px-4 rounded-lg ${
                selectedCategory === category
                  ? "bg-green-700 text-white"
                  : "bg-gray-200 text-gray-700"
              } transition duration-300 ease-in-out`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          {filteredImages.map((image) => (
            <section
              key={image.id}
              className="py-6 dark:bg-gray-100 dark:text-gray-900"
            >
              <img
                src={image.src}
                alt=""
                className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
              />
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default gallery;
