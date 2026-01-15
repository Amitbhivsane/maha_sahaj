import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import loga from "../../assets/loga.png";
import LanguageOptions from "../langdropdown/LanguageOptions";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [committeeOpen, setCommitteeOpen] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLanguageChange = (e) => {
    i18next.changeLanguage(e.target.value);
    setIsOpen(false);
  };

  const navLinks = [
    { name: t("Home"), link: "/" },
    { name: t("Shree Mataji"), link: "/shree-mataji" },
    { name: t("Sahaja Yoga"), link: "/sahaja-yoga" },
    { name: t("Centers"), link: "/centers" },
    { name: t("Events"), link: "/events" },
    { name: t("Download"), link: "/download" },
  ];

  return (
    <nav className="bg-pink-700 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img src={loga} className="h-10 w-10" alt="Logo" />
          <div className="text-white font-serif leading-tight">
            <div className="text-lg font-semibold">
              {t("Maharashtra State")}
            </div>
            <div className="text-lg font-semibold">{t("Sahajayoga")}</div>
          </div>
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:gap-4 absolute md:static top-full left-0 w-full md:w-auto bg-pink-700 md:bg-transparent`}
        >
          <ul className="flex flex-col md:flex-row font-serif uppercase">
            {/* Nav Links */}
            {navLinks.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.link}
                  end
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2 md:py-2 ${
                      isActive
                        ? "text-white border-b-2 border-white font-semibold"
                        : "text-gray-200 hover:text-white md:hover:border-b-2 md:hover:border-white"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

            {/* Committee Dropdown */}
            <li className="relative">
              <button
                onClick={() => setCommitteeOpen(!committeeOpen)}
                className="flex justify-between items-center w-full px-4 py-2 text-white hover:bg-pink-600 md:hover:bg-transparent"
              >
                COMMITTEE
                <span className="md:hidden">▾</span>
              </button>

              {committeeOpen && (
                <div className="md:absolute md:top-full md:left-0 bg-white text-black w-full md:w-48 shadow-md">
                  <NavLink
                    to="/committee/state"
                    className={({ isActive }) =>
                      `block w-full text-left px-4 py-2 hover:bg-gray-100 ${
                        isActive ? "bg-pink-100 font-semibold" : ""
                      }`
                    }
                    onClick={() => {
                      setCommitteeOpen(false);
                      setIsOpen(false);
                    }}
                  >
                    State Committee
                  </NavLink>

                  <NavLink
                    to="/committee/district"
                    className={({ isActive }) =>
                      `block w-full text-left px-4 py-2 hover:bg-gray-100 ${
                        isActive ? "bg-pink-100 font-semibold" : ""
                      }`
                    }
                    onClick={() => {
                      setCommitteeOpen(false);
                      setIsOpen(false);
                    }}
                  >
                    District Committee
                  </NavLink>
                </div>
              )}
            </li>

            {/* Language Dropdown */}
            <li className="px-4 py-2">
              <LanguageOptions onChange={handleLanguageChange} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
