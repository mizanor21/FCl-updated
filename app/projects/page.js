"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

const Project = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLetter, setFilterLetter] = useState("");

  const projects = [
    {
      name: "PSO Banglow, Dhaka Cantonment.",
      category: "Construction",
      backgroundImage:
        "https://fclweb.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPOS.36e2fcb0.png&w=1920&q=75",
    },
    {
      name: "PSO Banglow, Dhaka Cantonment.",
      category: "Construction",
      backgroundImage:
        "https://fclweb.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPOS.36e2fcb0.png&w=1920&q=75",
    },
    {
      name: "PSO Banglow, Dhaka Cantonment.",
      category: "Construction",
      backgroundImage:
        "https://fclweb.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPOS.36e2fcb0.png&w=1920&q=75",
    },
    {
      name: "PSO Banglow, Dhaka Cantonment.",
      category: "Construction",
      backgroundImage:
        "https://fclweb.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPOS.36e2fcb0.png&w=1920&q=75",
    },
    {
      name: "PSO Banglow, Dhaka Cantonment.",
      category: "Construction",
      backgroundImage:
        "https://fclweb.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPOS.36e2fcb0.png&w=1920&q=75",
    },
    {
      name: "PSO Banglow, Dhaka Cantonment.",
      category: "Construction",
      backgroundImage:
        "https://fclweb.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPOS.36e2fcb0.png&w=1920&q=75",
    },
    {
      name: "PSO Banglow, Dhaka Cantonment.",
      category: "Construction",
      backgroundImage:
        "https://fclweb.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPOS.36e2fcb0.png&w=1920&q=75",
    },
    {
      name: "PSO Banglow, Dhaka Cantonment.",
      category: "Construction",
      backgroundImage:
        "https://fclweb.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPOS.36e2fcb0.png&w=1920&q=75",
    },
    // Add other projects here
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterLetter(event.target.value);
  };

  const filteredProjects = projects.filter((project) => {
    const matchesSearchTerm = project.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilterLetter = filterLetter
      ? project.name.startsWith(filterLetter)
      : true;
    return matchesSearchTerm && matchesFilterLetter;
  });

  return (
    <div>
      <section className="relative bg-gray-800 text-white">
        <div className="relative">
          <img
            src="https://img.freepik.com/premium-photo/warm-bright-banner-construction-site-with-builder-sunset-background-generated-by-ai_906809-1233.jpg"
            alt="Banner"
            className="object-cover w-full h-64 bg-black opacity-30"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl font-extrabold">
              {" "}
              Our Projects
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
                    Project
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="py-20" id="recent-works">
        <div className="mx-5 lg:container lg:mx-auto">
          <div>
            <h2 className="text-4xl text-center font-bold mb-14 hover:bg-opacity-50 pl-3 uppercase">
              List of projects
            </h2>
          </div>
          <div className="max-w-[1400px] px-4 mx-auto sm:px-6 lg:px-8">
            <div className="mb-5 flex justify-between items-center">
              <input
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="p-2 border rounded"
              />
              <select
                value={filterLetter}
                onChange={handleFilterChange}
                className="p-2 border rounded"
              >
                <option value="">Search by alphabet</option>
                {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
                  <option key={letter} value={letter}>
                    {letter}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
              {filteredProjects.map((project, index) => (
                <div key="">
                  <div className="relative h-[300px] overflow-hidden rounded-md">
                    <img
                      className=" bg-black bg-opacity-40 w-full h-full"
                      src={project.backgroundImage}
                      alt="PSO Banglow, Dhaka Cantonment."
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                    <div className="absolute bottom-0 p-5 border-b-4 border-green-700 w-full hover:bg-green-900 hover:bg-opacity-50 duration-1000">
                      <h2 className="text-2xl  text-white font-bold">
                        PSO Banglow, Dhaka Cantonment.
                      </h2>
                      <div className="flex gap-2 mt-2">
                        <p className="border border-white text-white  rounded-full px-5 py-2">
                          Construction
                        </p>
                        <p className="border border-white text-white  rounded-full px-5 py-2">
                          New Build
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
