import React from "react";
import { useTranslation } from "react-i18next";

const Chaitanrath = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-red-50 w-full h-auto flex flex-col items-center justify-center px-4 py-6">
      {/* Heading */}
      <h1 className="text-center text-red-500 text-2xl md:text-3xl font-semibold mb-4">
        {t("Shri Mataji Nirmala Devi Sahaja Yoga Public Program")}
      </h1>

      {/* Content */}
      <div className="max-w-4xl text-center">
        <p className="text-cyan-700 font-bold text-lg  mb-3">
          {t("Jai Shri Mataji")}
        </p>

        <p className="text-gray-700 text-base md:text-lg mb-3">
          {t(
            "A Maharashtra Chaitanya Rath Awareness and Outreach Program is being organized across the state in reverence to Shri Mataji Nirmala Devi.",
          )}
        </p>

        <p className="text-gray-700 text-base md:text-lg mb-3">
          {t(
            "This spiritual initiative aims to spread the message of Sahaja Yoga,inner awakening, peace, and collective well-being through public programs conducted in various districts and cities of Maharashtra.",
          )}
        </p>

        <p className="text-cyan-700 text-base md:text-lg font-semibold mt-4">
          {t("The public program details are as follows")}
        </p>
      </div>
    </div>
  );
};

export default Chaitanrath;
