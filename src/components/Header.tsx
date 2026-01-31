import React, { useState } from "react";

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("Рус");

  const navItems = ["О нас", "Услуги", "Проекты", "Шоу кейсы"];

  return (
    <motion.header className="flex items-center justify-between bg-[#FFFCF0] rounded-[40px] p-[16px_20px] m-2">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900">CIRCLE</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          {/* Language Switcher */}
          <div className="hidden md:block relative">
            <button className="flex items-center text-gray-700 hover:text-gray-900 font-medium">
              {language}
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          {/* Contact Button */}
          <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200">
            Связаться с нами
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-gray-900 font-medium py-2"
              >
                {item}
              </a>
            ))}
            <div className="pt-2">
              <button className="text-gray-700 font-medium py-2">
                {language}
              </button>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium w-full">
              Связаться с нами
            </button>
          </div>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
