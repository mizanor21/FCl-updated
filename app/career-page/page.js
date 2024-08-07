"use client";
import React from "react";
import Image from "next/image";
import img1 from "@/public/assets/banner/constraction.jpeg";

const jobOpenings = [
  {
    title: "Frontend Developer",
    location: "Remote",
    description:
      "Join our team to work on cutting-edge web applications using React and Tailwind CSS.",
    link: "/apply",
  },
  {
    title: "Backend Developer",
    location: "New York, NY",
    description:
      "Work on scalable server-side applications with Node.js and MongoDB.",
    link: "/apply",
  },
  {
    title: "Backend Developer",
    location: "New York, NY",
    description:
      "Work on scalable server-side applications with Node.js and MongoDB.",
    link: "/apply",
  },
  {
    title: "Backend Developer",
    location: "New York, NY",
    description:
      "Work on scalable server-side applications with Node.js and MongoDB.",
    link: "/apply",
  },
  {
    title: "Backend Developer",
    location: "New York, NY",
    description:
      "Work on scalable server-side applications with Node.js and MongoDB.",
    link: "/apply",
  },
  {
    title: "Backend Developer",
    location: "New York, NY",
    description:
      "Work on scalable server-side applications with Node.js and MongoDB.",
    link: "/apply",
  },
  // Add more job openings here
];

const CareerPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white">
        <div className="relative">
          <Image
            src={img1}
            alt="Career Opportunities"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
          <div className="relative p-16 text-center">
            <h1 className="text-5xl font-extrabold mb-4">Join Our Team</h1>
            <p className="text-lg mb-8">
              We are always looking for talented and passionate individuals to
              join our growing team.
            </p>
            <a
              href="#apply"
              className="inline-block bg-green-800 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-blue-700"
            >
              See Openings
            </a>
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
                <a
                  href={job.link}
                  className="inline-block bg-green-800 text-white px-4 py-2 rounded-md text-lg font-semibold hover:bg-blue-700"
                >
                  Apply Now
                </a>
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
