"use client";
import React, { useState } from "react";
import Image from "next/image";
import img1 from "@/public/assets/banner/constraction.jpeg";

const equipmentList = [
  {
    SNo: 1,
    Equipment: "50T Mobile Crane (wheel type)",
    Ownership: "Own/Rent",
    Unit: "Nos",
    Quantity: 1,
  },
  {
    SNo: 2,
    Equipment: "25T Mobile Crane (wheel type)",
    Ownership: "Own/Rent",
    Unit: "Nos",
    Quantity: 2,
  },
  {
    SNo: 3,
    Equipment: "50T Mobile Crane (wheel type)",
    Ownership: "Own/Rent",
    Unit: "Nos",
    Quantity: 1,
  },
  {
    SNo: 4,
    Equipment: "25T Mobile Crane (wheel type)",
    Ownership: "Own/Rent",
    Unit: "Nos",
    Quantity: 2,
  },
  {
    SNo: 5,
    Equipment: "50T Mobile Crane (wheel type)",
    Ownership: "Own/Rent",
    Unit: "Nos",
    Quantity: 1,
  },
  {
    SNo: 6,
    Equipment: "25T Mobile Crane (wheel type)",
    Ownership: "Own/Rent",
    Unit: "Nos",
    Quantity: 2,
  },
  {
    SNo: 7,
    Equipment: "50T Mobile Crane (wheel type)",
    Ownership: "Own/Rent",
    Unit: "Nos",
    Quantity: 1,
  },
  {
    SNo: 8,
    Equipment: "25T Mobile Crane (wheel type)",
    Ownership: "Own/Rent",
    Unit: "Nos",
    Quantity: 2,
  },
  {
    SNo: 9,
    Equipment: "50T Mobile Crane (wheel type)",
    Ownership: "Own/Rent",
    Unit: "Nos",
    Quantity: 1,
  },
  {
    SNo: 10,
    Equipment: "25T Mobile Crane (wheel type)",
    Ownership: "Own/Rent",
    Unit: "Nos",
    Quantity: 2,
  },
  {
    SNo: 11,
    Equipment: "50T Mobile Crane (wheel type)",
    Ownership: "Own/Rent",
    Unit: "Nos",
    Quantity: 1,
  },
  {
    SNo: 12,
    Equipment: "25T Mobile Crane (wheel type)",
    Ownership: "Own/Rent",
    Unit: "Nos",
    Quantity: 2,
  },
  {
    SNo: 12,
    Equipment: "50T Mobile Crane (wheel type)",
    Ownership: "Own/Rent",
    Unit: "Nos",
    Quantity: 1,
  },
  {
    SNo: 14,
    Equipment: "25T Mobile Crane (wheel type)",
    Ownership: "Own/Rent",
    Unit: "Nos",
    Quantity: 2,
  },
  {
    SNo: 15,
    Equipment: "50T Mobile Crane (wheel type)",
    Ownership: "Own/Rent",
    Unit: "Nos",
    Quantity: 1,
  },
  {
    SNo: 16,
    Equipment: "25T Mobile Crane (wheel type)",
    Ownership: "Own/Rent",
    Unit: "Nos",
    Quantity: 2,
  },
  {
    SNo: 17,
    Equipment: "50T Mobile Crane (wheel type)",
    Ownership: "Own/Rent",
    Unit: "Nos",
    Quantity: 1,
  },
  {
    SNo: 18,
    Equipment: "25T Mobile Crane (wheel type)",
    Ownership: "Own/Rent",
    Unit: "Nos",
    Quantity: 2,
  },
  {
    SNo: 19,
    Equipment: "50T Mobile Crane (wheel type)",
    Ownership: "Own/Rent",
    Unit: "Nos",
    Quantity: 1,
  },
  {
    SNo: 20,
    Equipment: "25T Mobile Crane (wheel type)",
    Ownership: "Own/Rent",
    Unit: "Nos",
    Quantity: 2,
  },
  // ... other equipment items
];

const Equipment = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    SNo: "",
    Ownership: "",
    Unit: "",
    Quantity: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const filteredEquipment = equipmentList.filter((item) => {
    const searchTermLower = searchTerm.toLowerCase();
    const isMatchingSearch =
      item.Equipment.toLowerCase().includes(searchTermLower);
    const isMatchingFilters =
      (filters.SNo === "" || item.SNo === Number(filters.SNo)) &&
      (filters.Ownership === "" ||
        item.Ownership.toLowerCase() === filters.Ownership.toLowerCase()) &&
      (filters.Unit === "" ||
        item.Unit.toLowerCase() === filters.Unit.toLowerCase()) &&
      (filters.Quantity === "" || item.Quantity === Number(filters.Quantity));

    return isMatchingSearch && isMatchingFilters;
  });

  const totalItems = filteredEquipment.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredEquipment.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const ownershipOptions = ["Own/Rent", "Leased", "Rented"];
  const unitOptions = ["Nos", "Units", "Pieces"];

  return (
    <div>
      <div className="relative -top-20">
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
      </div>
      <div className="mx-5 lg:container lg:mx-auto lg:max-w-[1200px] pb-20">
        <h2 className="text-4xl text-center font-bold pl-3 uppercase">
          List Of Equipment
        </h2>

        <div className="my-5">
          <input
            type="text"
            placeholder="Search by Equipment Type & Characteristics"
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full p-2 mb-4 border rounded-md"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <input
              type="number"
              name="SNo"
              placeholder="Filter by Serial No"
              value={filters.SNo}
              onChange={handleFilterChange}
              className="p-2 border rounded-md"
            />
            <select
              name="Ownership"
              value={filters.Ownership}
              onChange={handleFilterChange}
              className="p-2 border rounded-md"
            >
              <option value="">Select Ownership</option>
              {ownershipOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <select
              name="Unit"
              value={filters.Unit}
              onChange={handleFilterChange}
              className="p-2 border rounded-md"
            >
              <option value="">Select Unit</option>
              {unitOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <input
              type="number"
              name="Quantity"
              placeholder="Filter by Quantity"
              value={filters.Quantity}
              onChange={handleFilterChange}
              className="p-2 border rounded-md"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="container p-2 mx-auto rounded-md sm:p-4 dark:text-gray-800 dark:bg-gray-50">
            <div className="overflow-x-auto">
              <table className="min-w-full text-lg">
                <thead className="rounded-t-lg dark:bg-gray-300">
                  <tr className="text-right">
                    <th title="Ranking" className="p-3 text-left">
                      Serial NO
                    </th>
                    <th title="Team name" className="p-3 text-left">
                      Equipment Type & Characteristics
                    </th>
                    <th title="Wins" className="p-3">
                      Ownership
                    </th>
                    <th title="Losses" className="p-3">
                      Unit
                    </th>
                    <th title="Win percentage" className="p-3">
                      Quantity
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((item, index) => (
                    <tr
                      key={index}
                      className="text-right border-b border-opacity-20 hover:bg-green-800 hover:text-white  dark:border-gray-300 dark:bg-gray-100"
                    >
                      <td className="px-3 py-2 text-left ">
                        <span>{item.SNo}</span>
                      </td>
                      <td className="px-3 py-2 text-left">
                        <span>{item.Equipment}</span>
                      </td>
                      <td className="px-3 py-2">
                        <span>{item.Ownership}</span>
                      </td>
                      <td className="px-3 py-2">
                        <span>{item.Unit}</span>
                      </td>
                      <td className="px-3 py-2">
                        <span>{item.Quantity}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-1 border rounded-md"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 mx-1 border rounded-md ${
                currentPage === index + 1 ? "bg-gray-300" : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 mx-1 border rounded-md"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Equipment;
