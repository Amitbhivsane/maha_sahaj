import React, { useState } from "react";
import accordionDataEn from "../../data/datapuja";
import accordionDataMa from "../../data/datapujama";
import accordionDataHi from "../../data/datapujahi"; // <-- Hindi data
import matajio from "../../assets/mataji/matajio.png";

const Events = ({ language }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Choose the correct data based on language
  const accordionData =
    language === "en"
      ? accordionDataEn
      : language === "ma"
        ? accordionDataMa
        : accordionDataHi;

  return (
    <div className="flex flex-col items-center min-h-screen p-0 bg-pink-50">
      <img
        className="w-full h-auto object-cover"
        src={matajio}
        alt="Shri Mataji"
      />

      <div className="flex flex-col items-center text-center py-8 px-6 ">
        <h1 className="text-3xl font-semibold font-serif text-pink-700 uppercase">
          {language === "en"
            ? "H.H. Shri Mataji Nirmala Devi Pooja Calendar 2026"
            : language === "ma"
              ? "एच.एच. श्री माता जी निर्मला देवी पूजा कॅलेंडर 2026"
              : "एच.एच. श्री माता जी निर्मला देवी पूजा कैलेंडर 2026"}{" "}
          {/* Hindi */}
        </h1>
      </div>

      <div className="w-full max-w-4xl mx-auto mb-5">
        {accordionData.map((item, index) => (
          <div className="bg-red-50" key={item.id}>
            <h2 id={`accordion-heading-${index}`}>
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium font-serif text-gray-100 border border-gray-100 hover:bg-gray-200 gap-3"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
                aria-controls={`accordion-body-${index}`}
              >
                <span className="text-pink-900 font-serif font-bold">
                  {item.Puja}
                </span>
                <svg
                  className={`w-3 h-3 transform ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id={`accordion-body-${index}`}
              className={
                openIndex === index ? "p-5 border border-gray-200" : "hidden"
              }
              aria-labelledby={`accordion-heading-${index}`}
            >
              <p className="mb-2 font-serif text-gray-500">
                {language === "en"
                  ? "Date"
                  : language === "ma"
                    ? "तारीख"
                    : "तारीख"}{" "}
                {/* Hindi */}: {item.date}
              </p>
              <p className="mb-2 font-serif text-gray-500">
                {language === "en" ? "Day" : language === "ma" ? "दिवस" : "दिन"}{" "}
                {/* Hindi */}: {item.day}
              </p>
              <p className="mb-2 font-serif text-gray-500">
                {language === "en" ? "Time" : language === "ma" ? "वेळ" : "समय"}{" "}
                {/* Hindi */}: 11 AM
              </p>
              <p className="mb-2 font-serif text-gray-500">
                {language === "en"
                  ? "Place"
                  : language === "ma"
                    ? "स्थान"
                    : "स्थान"}{" "}
                {/* Hindi */}: {item.place}
              </p>
              <p className="mb-2 font-serif text-gray-500">
                {language === "en"
                  ? "Collectivity"
                  : language === "ma"
                    ? "तालुका"
                    : "तालुका"}{" "}
                {/* Hindi */}: {item.Taluka}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
