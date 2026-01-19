import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import loga from "../../assets/loga.png";
import LanguageOptions from "../langdropdown/LanguageOptions";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [committeeOpen, setCommitteeOpen] = useState(false);
  const { t } = useTranslation();

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    i18next.changeLanguage(newLang); // change i18n
    setLanguage(newLang); // update App.js state
    setIsOpen(false);
    setCommitteeOpen(false);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setCommitteeOpen(false);
  };

  const navLinks = [
    { name: t("Home"), link: "/" },
    { name: t("Shree Mataji"), link: "/shree-mataji" },
    { name: t("Sahaja Yoga"), link: "/sahaja-yoga" },
    { name: t("Centers"), link: "/centers" },
    { name: t("Events"), link: "/events" },
    { name: t("Download"), link: "/download" },
    { name: t("Chaitan Rath"), link: "/chaitan-rath" },
    { name: t("Maharashtra Darshan"), link: "/maharashtra-darshan" },
  ];

  return (
    <nav className="bg-pink-700 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto px-6 min-h-[64px] flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          onClick={handleLinkClick}
          className="flex items-center gap-2 shrink-0 "
        >
          <img src={loga} className="h-10 w-10 object-contain" alt="Logo" />
          <div className="text-white font-serif leading-tight flex flex-col justify-center">
            <span className="text-sm font-semibold">{t("Maharashtra")}</span>
            <span className="text-sm font-semibold ">{t("State")}</span>
            <span className="text-sm font-semibold ">{t("Sahajayoga")}</span>
          </div>
        </NavLink>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex absolute md:static top-full left-0 w-full md:w-auto bg-pink-700 md:bg-transparent`}
        >
          <ul className="flex flex-col md:flex-row md:items-center gap-3.5 px-6 md:px-0 py-4 md:py-0 font-serif text-sm">
            {navLinks.map((item) => (
              <li key={item.name} className="flex items-center">
                <NavLink
                  to={item.link}
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white border-b-2 border-white pb-0.5"
                      : "text-pink-100 hover:text-white pb-0.5"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

            {/* Committee */}
            <li className="relative flex items-center">
              <button
                onClick={() => setCommitteeOpen(!committeeOpen)}
                className="text-pink-100 hover:text-white flex items-center gap-1"
              >
                {t("Committee")}
                <span className="text-xs">▼</span>
              </button>

              {committeeOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white text-black w-52 rounded shadow-lg overflow-hidden">
                  <NavLink
                    to="/committee/state"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-pink-200"
                  >
                    {t("State Committee")}
                  </NavLink>
                  <NavLink
                    to="/committee/district"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-pink-200"
                  >
                    {t("District Committee")}
                  </NavLink>
                </div>
              )}
            </li>

            {/* Contact */}
            <li className="flex items-center">
              <NavLink
                to="/contact-us"
                onClick={handleLinkClick}
                className="text-pink-100 hover:text-white"
              >
                {t("Contact")}
              </NavLink>
            </li>

            {/* Quick Donate */}
            <li className="flex items-center">
              <a
                href="https://pages.razorpay.com/pl_JgrWel0t7PPUCN/view"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-pink-900 px-4 py-1 rounded-full font-semibold text-sm hover:bg-yellow-300 transition whitespace-nowrap"
              >
                {t("Quick Donate")}
              </a>
            </li>

            {/* Language */}
            <li className="flex items-center">
              <LanguageOptions
                onChange={handleLanguageChange}
                value={language}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
