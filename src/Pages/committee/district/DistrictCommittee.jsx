import React, { useState } from "react";
import DistrictData from "../../../data/ditrictdata.js";
import { IoMdPerson } from "react-icons/io";
import { FaCity, FaMobileScreen } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const DistrictCommittee = () => {
  const [filteredData] = useState(DistrictData);

  return (
    <div className="w-full">
      {/* Centered Heading */}
      <h3 className="text-center text-xl md:text-2xl font-semibold text-pink-700 mt-6 mb-4 px-2">
        Maharashtra Sahaja Yoga District Coordinators 2024–27
        <br />
        <span className="text-sm md:text-base text-gray-600">
          (October 1, 2024 – September 30, 2027)
        </span>
      </h3>

      {/* Cards Grid */}
      <div className="w-full max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Centered Heading */}
        <h3 className="col-span-full text-center text-2xl font-semibold text-pink-700 mb-4">
          Vidharbha
        </h3>

        {filteredData.vidhrabha.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg border p-5 transition hover:shadow-lg hover:scale-[1.02]"
          >
            {/* City */}
            <p className="text-blue-600 text-xl flex items-center gap-2">
              <FaCity /> {item.City}
            </p>
            {/* Name */}
            <p className="text-pink-700 text-[18px] flex items-center gap-2 font-semibold mb-2">
              <IoMdPerson /> {item.Name}
            </p>

            {/* Mobile */}
            <p className="text-gray-700 text-sm flex items-center gap-2 mb-1">
              <FaMobileScreen /> {item.Mobile_No}
            </p>

            {/* Email */}
            <p className="text-cyan-600 text-sm flex items-center gap-2">
              <MdEmail /> {item.Email}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Centered Heading */}
        <h3 className="col-span-full text-center text-2xl font-semibold text-pink-700 mb-4">
          Vidharbha Nagpur
        </h3>

        {filteredData.Nagpur.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg border p-5 transition hover:shadow-lg hover:scale-[1.02]"
          >
            {/* City */}
            <p className="text-blue-600 text-xl flex items-center gap-2">
              <FaCity /> {item.City}
            </p>
            {/* Name */}
            <p className="text-pink-700 text-[18px] flex items-center gap-2 font-semibold mb-2">
              <IoMdPerson /> {item.Name}
            </p>

            {/* Mobile */}
            <p className="text-gray-700 text-sm flex items-center gap-2 mb-1">
              <FaMobileScreen /> {item.Mobile_No}
            </p>

            {/* Email */}
            <p className="text-cyan-600 text-sm flex items-center gap-2">
              <MdEmail /> {item.Email}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Centered Heading */}
        <h3 className="col-span-full text-center text-2xl font-semibold text-pink-700 mb-4">
          North Maharashtra
        </h3>

        {filteredData.North_Maharashtra.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg border p-5 transition hover:shadow-lg hover:scale-[1.02]"
          >
            {/* City */}
            <p className="text-blue-600 text-xl flex items-center gap-2">
              <FaCity /> {item.City}
            </p>
            {/* Name */}
            <p className="text-pink-700 text-[18px] flex items-center gap-2 font-semibold mb-2">
              <IoMdPerson /> {item.Name}
            </p>

            {/* Mobile */}
            <p className="text-gray-700 text-sm flex items-center gap-2 mb-1">
              <FaMobileScreen /> {item.Mobile_No}
            </p>

            {/* Email */}
            <p className="text-cyan-600 text-sm flex items-center gap-2">
              <MdEmail /> {item.Email}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Centered Heading */}
        <h3 className="col-span-full text-center text-2xl font-semibold text-pink-700 mb-4">
          Marathwada
        </h3>

        {filteredData.Marathwada.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg border p-5 transition hover:shadow-lg hover:scale-[1.02]"
          >
            {/* City */}
            <p className="text-blue-600 text-xl flex items-center gap-2">
              <FaCity /> {item.City}
            </p>
            {/* Name */}
            <p className="text-pink-700 text-[18px] flex items-center gap-2 font-semibold mb-2">
              <IoMdPerson /> {item.Name}
            </p>

            {/* Mobile */}
            <p className="text-gray-700 text-sm flex items-center gap-2 mb-1">
              <FaMobileScreen /> {item.Mobile_No}
            </p>

            {/* Email */}
            <p className="text-cyan-600 text-sm flex items-center gap-2">
              <MdEmail /> {item.Email}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Centered Heading */}
        <h3 className="col-span-full text-center text-2xl font-semibold text-pink-700 mb-4">
          Pune
        </h3>

        {filteredData.Pune.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg border p-5 transition hover:shadow-lg hover:scale-[1.02]"
          >
            {/* City */}
            <p className="text-blue-600 text-xl flex items-center gap-2">
              <FaCity /> {item.City}
            </p>
            {/* Name */}
            <p className="text-pink-700 text-[20px] flex items-center gap-2 font-semibold mb-2">
              <IoMdPerson /> {item.Name}
            </p>

            {/* Mobile */}
            <p className="text-gray-700 text-sm flex items-center gap-2 mb-1">
              <FaMobileScreen /> {item.Mobile_No}
            </p>

            {/* Email */}
            <p className="text-cyan-600 text-sm flex items-center gap-2">
              <MdEmail /> {item.Email}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Centered Heading */}
        <h3 className="col-span-full text-center text-2xl font-semibold text-pink-700 mb-4">
          KoKan
        </h3>

        {filteredData.KoKan.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg border p-5 transition hover:shadow-lg hover:scale-[1.02]"
          >
            {/* City */}
            <p className="text-blue-600 text-xl flex items-center gap-2">
              <FaCity /> {item.City}
            </p>
            {/* Name */}
            <p className="text-pink-700 text-[18px] flex items-center gap-2 font-semibold mb-2">
              <IoMdPerson /> {item.Name}
            </p>

            {/* Mobile */}
            <p className="text-gray-700 text-sm flex items-center gap-2 mb-1">
              <FaMobileScreen /> {item.Mobile_No}
            </p>

            {/* Email */}
            <p className="text-cyan-600 text-sm flex items-center gap-2">
              <MdEmail /> {item.Email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
