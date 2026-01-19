import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail, MdCall } from "react-icons/md";

const Contact = () => {
  return (
    /* FULL PAGE BACKGROUND */
    <div className="min-h-screen w-full bg-red-100 flex flex-col items-center">
      {/* PAGE TITLE */}
      <h1
        className="text-3xl font-bold text-pink-800 mt-8 mb-10
                     animate-fadeIn"
      >
        Contact
      </h1>

      {/* CONTENT CONTAINER */}
      <div className="w-full max-w-5xl mx-auto flex flex-wrap gap-4 px-4 pb-10">
        {/* Card 1 – Address */}
        <div
          className="bg-white shadow-lg rounded-lg border p-6 
                     w-full md:w-[48%] lg:w-[32%] 
                     text-center
                     transform transition duration-500
                     hover:-translate-y-2 hover:scale-105 hover:shadow-xl
                     animate-slideUp delay-100"
        >
          <HiLocationMarker className="text-4xl text-pink-700 mx-auto mb-3" />
          <h2 className="text-lg font-bold text-pink-700">
            H H Shri Mataji Nirmaladevi Sahajayoga Trust
          </h2>
          <p className="text-gray-700 mt-2 font-bold">
            NDA Road, Chandani Chowk, Pune
          </p>
        </div>

        {/* Card 2 – Email */}
        <div
          className="bg-white shadow-lg rounded-lg border p-6 
                     w-full md:w-[48%] lg:w-[32%] 
                     text-center
                     transform transition duration-500
                     hover:-translate-y-2 hover:scale-105 hover:shadow-xl
                     animate-slideUp delay-200"
        >
          <MdEmail className="text-4xl text-pink-700 mx-auto mb-3" />
          <h2 className="text-lg font-bold text-pink-700">Email Us</h2>
          <p className="text-gray-700 mt-2 font-bold">
            maharashtrasahajayoga@gmail.com
          </p>
        </div>

        {/* Card 3 – Call */}
        <div
          className="bg-white shadow-lg rounded-lg border p-6 
                     w-full md:w-[48%] lg:w-[32%] 
                     text-center
                     transform transition duration-500
                     hover:-translate-y-2 hover:scale-105 hover:shadow-xl
                     animate-slideUp delay-300"
        >
          <MdCall className="text-4xl text-pink-700 mx-auto mb-3" />
          <h2 className="text-lg font-bold text-pink-700">Call Us</h2>
          <p className="text-gray-700 mt-2 font-bold">
            +91 93728 22437 <br />
            (Shri Mahesh Dhandeker)
          </p>
        </div>
      </div>
    </div>
  );
};
export default Contact;
