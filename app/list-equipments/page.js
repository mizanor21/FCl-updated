import Image from "next/image";
import Link from "next/link";
import React from "react";
import img1 from "@/public/assets/banner/constraction.jpeg";

const EquipmentList = () => {
  return (
    <div>
      <section className="relative bg-gray-800 text-white">
        <div className="relative">
          <Image
            src={img1}
            alt="Banner"
            className="object-cover w-full h-64 bg-black opacity-40"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl font-extrabold">
              {" "}
              List Of Equipments
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
                    Equipments
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="overflow-x-auto container mx-auto py-10">
        <table className="min-w-full bg-white border border-gray-200 shadow-md">
          <thead className="bg-gradient-to-r from-green-500 to-purple-500 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Serial No</th>
              <th className="py-3 px-6 text-left">
                Equipment Type & Characteristics{" "}
              </th>
              <th className="py-3 px-6 text-left">Ownership</th>
              <th className="py-3 px-6 text-left">Unit</th>
              <th className="py-3 px-6 text-left">Quantity</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="bg-gray-100 hover:bg-blue-100">
              <td className="py-3 px-6">01</td>
              <td className="py-3 px-6">50T Mobile Crane (wheel type) </td>
              <td className="py-3 px-6">Own/Rent</td>
              <td className="py-3 px-6">Nos</td>
              <td className="py-3 px-6">1</td>
            </tr>
            <tr className="hover:bg-blue-100">
              <td className="py-3 px-6">02</td>
              <td className="py-3 px-6">25T Mobile Crane (wheel type)</td>
              <td className="py-3 px-6">Own/Rent</td>
              <td className="py-3 px-6">Nos</td>
              <td className="py-3 px-6">2</td>
            </tr>

            <tr className="bg-gray-100 hover:bg-blue-100">
              <td className="py-3 px-6">01</td>
              <td className="py-3 px-6">50T Mobile Crane (wheel type) </td>
              <td className="py-3 px-6">Own/Rent</td>
              <td className="py-3 px-6">Nos</td>
              <td className="py-3 px-6">1</td>
            </tr>
            <tr className="hover:bg-blue-100">
              <td className="py-3 px-6">02</td>
              <td className="py-3 px-6">25T Mobile Crane (wheel type)</td>
              <td className="py-3 px-6">Own/Rent</td>
              <td className="py-3 px-6">Nos</td>
              <td className="py-3 px-6">2</td>
            </tr>

            <tr className="bg-gray-100 hover:bg-blue-100">
              <td className="py-3 px-6">01</td>
              <td className="py-3 px-6">50T Mobile Crane (wheel type) </td>
              <td className="py-3 px-6">Own/Rent</td>
              <td className="py-3 px-6">Nos</td>
              <td className="py-3 px-6">1</td>
            </tr>
            <tr className="hover:bg-blue-100">
              <td className="py-3 px-6">02</td>
              <td className="py-3 px-6">25T Mobile Crane (wheel type)</td>
              <td className="py-3 px-6">Own/Rent</td>
              <td className="py-3 px-6">Nos</td>
              <td className="py-3 px-6">2</td>
            </tr>

            <tr className="bg-gray-100 hover:bg-blue-100">
              <td className="py-3 px-6">01</td>
              <td className="py-3 px-6">50T Mobile Crane (wheel type) </td>
              <td className="py-3 px-6">Own/Rent</td>
              <td className="py-3 px-6">Nos</td>
              <td className="py-3 px-6">1</td>
            </tr>
            <tr className="hover:bg-blue-100">
              <td className="py-3 px-6">02</td>
              <td className="py-3 px-6">25T Mobile Crane (wheel type)</td>
              <td className="py-3 px-6">Own/Rent</td>
              <td className="py-3 px-6">Nos</td>
              <td className="py-3 px-6">2</td>
            </tr>

            <tr className="bg-gray-100 hover:bg-blue-100">
              <td className="py-3 px-6">01</td>
              <td className="py-3 px-6">50T Mobile Crane (wheel type) </td>
              <td className="py-3 px-6">Own/Rent</td>
              <td className="py-3 px-6">Nos</td>
              <td className="py-3 px-6">1</td>
            </tr>
            <tr className="hover:bg-blue-100">
              <td className="py-3 px-6">02</td>
              <td className="py-3 px-6">25T Mobile Crane (wheel type)</td>
              <td className="py-3 px-6">Own/Rent</td>
              <td className="py-3 px-6">Nos</td>
              <td className="py-3 px-6">2</td>
            </tr>

            <tr className="bg-gray-100 hover:bg-blue-100">
              <td className="py-3 px-6">01</td>
              <td className="py-3 px-6">50T Mobile Crane (wheel type) </td>
              <td className="py-3 px-6">Own/Rent</td>
              <td className="py-3 px-6">Nos</td>
              <td className="py-3 px-6">1</td>
            </tr>
            <tr className="hover:bg-blue-100">
              <td className="py-3 px-6">02</td>
              <td className="py-3 px-6">25T Mobile Crane (wheel type)</td>
              <td className="py-3 px-6">Own/Rent</td>
              <td className="py-3 px-6">Nos</td>
              <td className="py-3 px-6">2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EquipmentList;
