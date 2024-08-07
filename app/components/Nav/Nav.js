"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { GoChevronDown } from "react-icons/go";
import { MdOutlineFileDownload } from "react-icons/md";
import logo from "@/public/assets/logo/logo.png";

const Nav = () => {
  const onButtonClick = () => {
    fetch("/assets/documents/FCL_Brochure.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        const alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "FCL_Brochure.pdf";
        alink.click();
      });
    });
  };

  const navItems = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">Explore Us</Link>
      </li>
      <li>
        <Link href="/area-of-activities">Area of Activities</Link>
      </li>
      <li>
        <Link href="/csr">CSR</Link>
      </li>
      <li className="relative group">
        <span className="cursor-pointer flex items-center">
          Associate With <GoChevronDown className="ml-1 font-bold text-2xl" />
        </span>
        <ul className="absolute bg-opacity-90 lg:left-[-600px] lg:w-[1530px] mt-10 hidden bg-white text-black shadow-md rounded-md group-hover:block  p-2">
          <div className="flex justify-center items-center gap-6 py-10">
            <div className="card bg-base-100 w-96 shadow-xl">
              <figure>
                <img
                  className="w-full h-52"
                  src="https://www.goinnovior.com/wp-content/uploads/2023/05/Artificial-Intelligence.jpeg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Company 01</h2>
              </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-xl">
              <figure>
                <img
                  src="https://www.goinnovior.com/wp-content/uploads/2024/04/Enterprise-email.png"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Company 02</h2>
              </div>
            </div>
          </div>
        </ul>
      </li>
      <li className="relative group">
        <span className="cursor-pointer flex items-center">
          Equipment <GoChevronDown className="ml-1 font-bold text-2xl" />
        </span>

        <ul className="absolute ease-in duration-1000 lg:left-[-800px] lg:w-[1530px] mt-10 hidden bg-white text-black shadow-md rounded-md group-hover:block  p-2">
          <div className="flex justify-center items-center gap-6 py-10">
            <div className="card bg-base-100 w-96 shadow-xl">
              <Link href="/list-equipments">
                <figure>
                  <img
                    className="w-full h-52"
                    src="https://t4.ftcdn.net/jpg/02/49/04/93/360_F_249049329_BpYUPt5TGST3qTTfOJVpTakAdCLFzcg1.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Equipment list</h2>
                </div>
              </Link>
            </div>

            <div className="card bg-base-100 w-96 shadow-xl">
              <Link href="/photo-equipments">
                <figure>
                  <img
                    className="w-full h-52"
                    src="https://nmccat.com/wp-content/uploads/2020/09/Cat-Backhoe-1.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Equipment Photo</h2>
                </div>
              </Link>
            </div>
          </div>
        </ul>
      </li>

      <li>
        <Link href="/projects">Projects</Link>
      </li>
      <li>
        <Link href="/career-page">Career</Link>
      </li>
      <li>
        <Link href="/gallery">Gallery</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </>
  );

  return (
    <div className=" bg-white fancyNav sticky top-0 z-50 font-bold  text-black shadow-md">
      <div className="navbar flex justify-between items-center">
        <div className="container mx-auto flex justify-between items-center">
          <div className="navbar-start flex items-center">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navItems}
              </ul>
            </div>
            <Link href="/" className="text-3xl ">
              <Image
                src={logo}
                className="w-12"
                title="Farees Construction Limited (FCL)"
                alt="FCL logo"
              ></Image>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex flex-grow">
            <ul className="menu menu-horizontal px-1  flex items-center">
              {navItems}
            </ul>
          </div>
          <div className="navbar-end flex items-center">
            <a
              onClick={onButtonClick}
              href="#"
              className="bg-black text-white hover:bg-green-700 hover:text-white duration-500 rounded-full px-5 py-2 flex items-center cursor-pointer"
            >
              Brochure <MdOutlineFileDownload className="ml-2 text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
