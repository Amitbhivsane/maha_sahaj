import React, { useState } from "react";
import StateData from "../../../data/statedata.js";
import { IoMdPerson } from "react-icons/io";
import { FaCity, FaMobileScreen } from "react-icons/fa6";

const StateCommittee = () => {
  const [filteredData] = useState(StateData);

  return (
    <div className="w-full">
      <h3 className="text-center text-xl md:text-2xl font-semibold text-pink-700 mt-6 mb-6 px-2">
        Maharashtra State Sahaja Yoga Committee 2025–28
        <br />
        {/* <span className="text-sm md:text-base text-gray-600">
          (October 1, 2024 – September 30, 2027)
        </span> */}
      </h3>

      {/* State Committee */}
      <Section title="State Committee" data={filteredData.state} />

      <Section title="Yuva Coordinator" data={filteredData.yuva} />

      <Section title="Culture Coordinator" data={filteredData.culture} />

      <Section title="Krushi Coordinator" data={filteredData.krishi} />

      <Section title="Vidarbha" data={filteredData.Rejonal_V} />

      <Section title="North" data={filteredData.north} />

      <Section title="Konkan" data={filteredData.kokan} />

      <Section title="Mahila" data={filteredData.mahila} />
    </div>
  );
};

const Section = ({ title, data }) => (
  <div className="w-full max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <h3 className="col-span-full text-center text-2xl font-semibold text-pink-700 mb-4">
      {title}
    </h3>

    {data?.map((item, index) => (
      <div
        key={index}
        className="bg-white shadow-md rounded-lg border p-5 transition hover:shadow-lg hover:scale-[1.02]"
      >
        {item.Designation && (
          <p className="text-pink-700 text-lg font-semibold mb-2">
            {item.Designation}
          </p>
        )}

        <p className="text-blue-500 text-base flex items-center gap-2 font-semibold">
          <IoMdPerson /> {item.Name}
        </p>

        <p className="text-gray-700 text-sm flex items-center gap-2 mt-1">
          <FaMobileScreen /> {item.Mobile_No}
        </p>

        <p className="text-cyan-600 text-sm flex items-center gap-2 mt-1">
          <FaCity /> {item.City}
        </p>
      </div>
    ))}
  </div>
);
export default StateCommittee;
