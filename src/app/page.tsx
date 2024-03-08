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
    <div
      className="w-full h-full flex flex-col md:px-32 px-10"
      style={{
        backgroundImage: "url('/images/wave_background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="flex flex-col">
        <div
          className="flex flex-row items-center justify-between h-fit w-full
      md:py-0 py-5"
        >
          <img
            src="/images/logo.png"
            alt="logo"
            className="md:w-64 md:h-28 w-32 h-14"
          />

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

          <div
            className="bg-[#A26E42] 
        hidden md:flex 
        h-fit 
        py-10 px-10 
        font-bebasRegular 
        rounded-br-xl 
        text-white text-lg 
        shadow-2xl"
          >
            <ul className="flex flex-row cursor-pointer">
              <li className="px-3">Home</li>
              <li className="px-3">About</li>
              <li className="px-3">Services</li>
              <li className="px-3">Brands</li>
              <li className="px-3">Products</li>
              <li className="px-3">Contact</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-row pt-20">
        <div className="flex flex-col">
          <span className="w-1/2 text-7xl font-ogg">Selling Made Better</span>
        </div>
        <div className="bg-black w-96 h-96"></div>
      </div>
    </div>
  );
}
