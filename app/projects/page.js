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
              <div
                key={index}
                className="relative flex items-end overflow-hidden bg-cover rounded-lg h-[35vh]"
                style={{
                  backgroundImage: `url(${project.backgroundImage})`,
                }}
              >
                <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
                {/* Dark overlay */}
                <div className="relative w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-green-800 bg-opacity-40 dark:bg-gray-800/60">
                  <h2 className="mt-4 text-xl font-bold text-white capitalize dark:text-white">
                    {project.name}
                  </h2>
                  <div className="pt-4 pb-4">
                    <Link href="" className="bg-white p-1 rounded-md mr-4">
                      {project.category}
                    </Link>
                    <Link href="" className="bg-white p-1 rounded-md">
                      New Build
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
