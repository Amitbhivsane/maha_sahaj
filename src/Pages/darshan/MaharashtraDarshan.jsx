import React from "react";
import { useTranslation } from "react-i18next";

const MaharashtraDarshan = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* Video Section */}
      <div className="px-4 md:px-8 py-10 bg-gradient-to-b from-pink-50 to-white">
        {/* Section Title */}
        <h1 className="text-2xl md:text-3xl font-serif font-bold text-center text-pink-800 mb-8">
          {t("Maharashtra Sahaj Darshan")}
        </h1>

        {/* FLEX CONTAINER */}
        <div className="flex flex-wrap gap-y-10 gap-x-4">
          {/* Part 1 */}
          <div className="w-full md:w-[48%] bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-4">
            <h2 className="text-lg md:text-xl text-pink-700 font-semibold mb-4 text-center">
              {t("Maharashtra Sahaj Darshan – Part 1")}
            </h2>
            <div className="relative pb-[56.25%] overflow-hidden rounded-xl">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/Oz4BWCPi_NY"
                title="Maharashtra Sahaj Darshan Part 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Part 2 */}
          <div className="w-full md:w-[48%] bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-4">
            <h2 className="text-lg md:text-xl text-pink-700 font-semibold mb-4 text-center">
              {t("Maharashtra Sahaj Darshan – Part 2")}
            </h2>
            <div className="relative pb-[56.25%] overflow-hidden rounded-xl">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/eQ3CZ6TYG1k"
                title="Maharashtra Sahaj Darshan Part 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Part 3 */}
          <div className="w-full md:w-[48%] bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-4">
            <h2 className="text-lg md:text-xl text-pink-700 font-semibold mb-4 text-center">
              {t("Maharashtra Sahaj Darshan – Part 3")}
            </h2>
            <div className="relative pb-[56.25%] overflow-hidden rounded-xl">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/Xp_mTWOe09U"
                title="Maharashtra Sahaj Darshan Part 3"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Part 4 */}
          <div className="w-full md:w-[48%] bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-4">
            <h2 className="text-lg md:text-xl text-pink-700 font-semibold mb-4 text-center">
              {t("Maharashtra Sahaj Darshan – Part 4")}
            </h2>
            <div className="relative pb-[56.25%] overflow-hidden rounded-xl">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/I1Yj0_ltDn4"
                title="Maharashtra Sahaj Darshan Part 4"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MaharashtraDarshan;
