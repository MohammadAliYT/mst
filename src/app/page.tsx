"use client";
import React, { useState, useRef, useEffect } from "react";
import "tailwindcss/tailwind.css";
import "./styles/styles.css";
import "./globals.css";
import "hamburgers/dist/hamburgers.css";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-screen h-screen flex flex-col md:px-10 px-5" id="home">
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-between h-fit w-full md:py-0 py-3 bg-gray-300">
            <div className="flex flex-row items-center space-x-2">
              <img
                src="/images/altlogo.png"
                alt="logo"
                className="md:w-20 md:h-20 w-10 h-10 my-4 ml-2"
              />
              <p className="text-3xl font-ogg ">M.S Traders</p>
            </div>

            <div className="md:hidden">
              <button
                className={`hamburger hamburger--elastic ${
                  isOpen ? "is-active" : ""
                }`}
                type="button"
                aria-label="Menu"
                aria-controls="navigation"
                onClick={toggleMenu}
              >
                <span className="hamburger-box transform scale-50">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
                <ul className="cursor-pointer" onClick={toggleMenu}>
                  <li className="px-3">Home</li>
                  <li className="px-3">About</li>
                  <li className="px-3">Services</li>
                  <li className="px-3">Brands</li>
                  <li className="px-3">Products</li>
                  <li className="px-3">Contact</li>
                </ul>
              </div>
            </div>

            <div className="hidden md:flex h-fit font-bebasRegular rounded-br-xltext-white text-lg shadow-2xl">
              <ul className="flex flex-row cursor-pointer">
                <li className="px-3">Home</li>
                <li className="px-3">About</li>
                <li className="px-3">Services</li>
                <li className="px-3">Brands</li>
                <li className="px-3">Products</li>
              </ul>
            </div>
            <p className="mx-10 font-bold hidden md:flex">GET IN TOUCH</p>
          </div>
        </div>

        <div className="flex flex-row pt-20">
          <div className="flex flex-col">
            <span className="w-1/2 text-7xl font-ogg">Selling Made Better</span>
          </div>
        </div>
      </div>

      <div className="w-screen h-screen bg-[#666565] flex flex-row px-36 py-20"></div>
    </>
    // What we do:
    // SJS INTERNATIONAL is built on the value of hard work, commitment & resilience.
  );
}
