"use client";
import React from "react";
import Image from "next/image";
import img1 from "@/public/assets/banner/constraction.jpeg";
import Link from "next/link";

const jobOpenings = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "Remote",
    description:
      "Join our team to work on cutting-edge web applications using React and Tailwind CSS.",
  },
  {
    id: 2,
    title: "Backend Developer",
    location: "New York, NY",
    description:
      "Work on scalable server-side applications with Node.js and MongoDB.",
  },
  {
    id: 3,
    title: "Backend Developer",
    location: "New York, NY",
    description:
      "Work on scalable server-side applications with Node.js and MongoDB.",
  },
  {
    id: 4,
    title: "Backend Developer",
    location: "New York, NY",
    description:
      "Work on scalable server-side applications with Node.js and MongoDB.",
  },
  {
    id: 5,
    title: "Backend Developer",
    location: "New York, NY",
    description:
      "Work on scalable server-side applications with Node.js and MongoDB.",
  },
  {
    id: 6,
    title: "Backend Developer",
    location: "New York, NY",
    description:
      "Work on scalable server-side applications with Node.js and MongoDB.",
  },
];

const CareerPage = () => {
  return (
    <div>
      {/* Hero Section */}
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
              Build your career
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
                    Career
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Current Job Openings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-gray-200 transition"
              >
                <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
                <p className="text-gray-600 mb-4">{job.location}</p>
                <p className="text-gray-800 mb-4">{job.description}</p>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <Link href={`career/${job.id}`} className="btn">
                  Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to make an impact?</h2>
          <p className="text-lg mb-8">
            If you’re passionate about technology and eager to contribute to
            exciting projects, we want to hear from you!
          </p>
          <a
            href="#apply"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-blue-700"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
