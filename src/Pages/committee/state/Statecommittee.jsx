import React, { useState } from "react";
import StateData from "../../../data/statedata.js";
import { IoMdPerson } from "react-icons/io";
import { FaCity, FaMobileScreen } from "react-icons/fa6";

export const Statecommittee = () => {
  const [filteredData] = useState(StateData);

  return (
    <div className="w-full">
      {/* Centered Heading */}
      <h3 className="text-center text-xl md:text-2xl font-semibold text-pink-700 mt-6 mb-6 px-2">
        Maharashtra State Sahaja Yoga Committee 2024–27
        <br />
        <span className="text-sm md:text-base text-gray-600">
          (October 1, 2024 – September 30, 2027)
        </span>
      </h3>

      {/* ✅ Responsive Grid */}
      <div className="w-full max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Centered Heading */}
        <h3 className="col-span-full text-center text-2xl font-semibold text-pink-700 mb-4">
          State Committee
        </h3>
        {filteredData.state.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg border p-5 transition hover:shadow-lg hover:scale-[1.02]"
          >
            {/* Designation */}
            <p className="text-pink-700 text-lg font-semibold mb-2">
              {item.Designation}
            </p>

            {/* Name */}
            <p className="text-blue-500 text-base flex items-center gap-2 font-semibold">
              <IoMdPerson /> {item.Name}
            </p>

            {/* Mobile */}
            <p className="text-gray-700 text-sm flex items-center gap-2 mt-1">
              <FaMobileScreen /> {item.Mobile_No}
            </p>

            {/* City */}
            <p className="text-cyan-600 text-sm flex items-center gap-2 mt-1">
              <FaCity /> {item.City}
            </p>
          </div>
        ))}
      </div>
      {/* ✅ Responsive Grid */}
      <div className="w-full max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Centered Heading */}
        <h3 className="col-span-full text-center text-2xl font-semibold text-pink-700 mb-4">
          Yuva Coorinator
        </h3>
        {filteredData.yuva.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg border p-5 transition hover:shadow-lg hover:scale-[1.02]"
          >
            {/* Name */}
            <p className="text-blue-500 text-base flex items-center gap-2 font-semibold">
              <IoMdPerson /> {item.Name}
            </p>

            {/* Mobile */}
            <p className="text-gray-700 text-sm flex items-center gap-2 mt-1">
              <FaMobileScreen /> {item.Mobile_No}
            </p>

            {/* City */}
            <p className="text-cyan-600 text-sm flex items-center gap-2 mt-1">
              <FaCity /> {item.City}
            </p>
          </div>
        ))}
      </div>
      {/* ✅ Responsive Grid */}
      <div className="w-full max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Centered Heading */}
        <h3 className="col-span-full text-center text-2xl font-semibold text-pink-700 mb-4">
          Culture Coorinator
        </h3>
        {filteredData.culture.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg border p-5 transition hover:shadow-lg hover:scale-[1.02]"
          >
            {/* Name */}
            <p className="text-blue-500 text-base flex items-center gap-2 font-semibold">
              <IoMdPerson /> {item.Name}
            </p>

            {/* Mobile */}
            <p className="text-gray-700 text-sm flex items-center gap-2 mt-1">
              <FaMobileScreen /> {item.Mobile_No}
            </p>

            {/* City */}
            <p className="text-cyan-600 text-sm flex items-center gap-2 mt-1">
              <FaCity /> {item.City}
            </p>
          </div>
        ))}
      </div>
      {/* ✅ Responsive Grid */}
      <div className="w-full max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Centered Heading */}
        <h3 className="col-span-full text-center text-2xl font-semibold text-pink-700 mb-4">
          krishi Coorinator
        </h3>
        {filteredData.krishi.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg border p-5 transition hover:shadow-lg hover:scale-[1.02]"
          >
            {/* Name */}
            <p className="text-blue-500 text-base flex items-center gap-2 font-semibold">
              <IoMdPerson /> {item.Name}
            </p>

            {/* Mobile */}
            <p className="text-gray-700 text-sm flex items-center gap-2 mt-1">
              <FaMobileScreen /> {item.Mobile_No}
            </p>

            {/* City */}
            <p className="text-cyan-600 text-sm flex items-center gap-2 mt-1">
              <FaCity /> {item.City}
            </p>
          </div>
        ))}
      </div>
      {/* ✅ Responsive Grid */}
      <div className="w-full max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Centered Heading */}
        <h3 className="col-span-full text-center text-2xl font-semibold text-pink-700 mb-4">
          Vidharbha
        </h3>
        {filteredData.Rejonal_V.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg border p-5 transition hover:shadow-lg hover:scale-[1.02]"
          >
            {/* Name */}
            <p className="text-blue-500 text-base flex items-center gap-2 font-semibold">
              <IoMdPerson /> {item.Name}
            </p>

            {/* Mobile */}
            <p className="text-gray-700 text-sm flex items-center gap-2 mt-1">
              <FaMobileScreen /> {item.Mobile_No}
            </p>

            {/* City */}
            <p className="text-cyan-600 text-sm flex items-center gap-2 mt-1">
              <FaCity /> {item.City}
            </p>
          </div>
        ))}
      </div>
      {/* ✅ Responsive Grid */}
      <div className="w-full max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Centered Heading */}
        <h3 className="col-span-full text-center text-2xl font-semibold text-pink-700 mb-4">
          North
        </h3>
        {filteredData.north.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg border p-5 transition hover:shadow-lg hover:scale-[1.02]"
          >
            {/* Name */}
            <p className="text-blue-500 text-base flex items-center gap-2 font-semibold">
              <IoMdPerson /> {item.Name}
            </p>

            {/* Mobile */}
            <p className="text-gray-700 text-sm flex items-center gap-2 mt-1">
              <FaMobileScreen /> {item.Mobile_No}
            </p>

            {/* City */}
            <p className="text-cyan-600 text-sm flex items-center gap-2 mt-1">
              <FaCity /> {item.City}
            </p>
          </div>
        ))}
      </div>
      {/* ✅ Responsive Grid */}
      <div className="w-full max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Centered Heading */}
        <h3 className="col-span-full text-center text-2xl font-semibold text-pink-700 mb-4">
          Kokan
        </h3>
        {filteredData.kokan.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg border p-5 transition hover:shadow-lg hover:scale-[1.02]"
          >
            {/* Name */}
            <p className="text-blue-500 text-base flex items-center gap-2 font-semibold">
              <IoMdPerson /> {item.Name}
            </p>

            {/* Mobile */}
            <p className="text-gray-700 text-sm flex items-center gap-2 mt-1">
              <FaMobileScreen /> {item.Mobile_No}
            </p>

            {/* City */}
            <p className="text-cyan-600 text-sm flex items-center gap-2 mt-1">
              <FaCity /> {item.City}
            </p>
          </div>
        ))}
      </div>
      {/* ✅ Responsive Grid */}
      <div className="w-full max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Centered Heading */}
        <h3 className="col-span-full text-center text-2xl font-semibold text-pink-700 mb-4">
          Mahila
        </h3>
        {filteredData.mahila.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg border p-5 transition hover:shadow-lg hover:scale-[1.02]"
          >
            {/* Name */}
            <p className="text-blue-500 text-base flex items-center gap-2 font-semibold">
              <IoMdPerson /> {item.Name}
            </p>

            {/* Mobile */}
            <p className="text-gray-700 text-sm flex items-center gap-2 mt-1">
              <FaMobileScreen /> {item.Mobile_No}
            </p>

            {/* City */}
            <p className="text-cyan-600 text-sm flex items-center gap-2 mt-1">
              <FaCity /> {item.City}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
