"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import "tailwindcss/tailwind.css";
import "./styles/styles.css";
import "./globals.css";
import logo from "../../public/images/logo.png";
import warehouse from "../../public/images/warehouse.png";

export default function Home() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollTo(ref: any) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }
  const [showDiv, setShowDiv] = useState(false);

  const handleScroll = () => {
    const scrolled = window.scrollY;
    if (scrolled > 500) {
      setShowDiv(true);
    } else {
      setShowDiv(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div ref={section1Ref} className="h-screen bg-gray-500">
        <section className="flex flex-row w-full pt-8">
          <Image
            src={logo}
            alt="logo"
            width={250}
            height={100}
            className="ml-[10%]"
          />
          <div className="flex text-2xl fixed flex-row p-10 w-screen justify-end pr-[10%] text-white border-l-0 cursor-pointer">
            <p
              className="navbar-options"
              onClick={() => {
                scrollTo(section1Ref);
              }}
            >
              Home
            </p>
            <p
              className="navbar-options"
              onClick={() => {
                scrollTo(section2Ref);
              }}
            >
              Service
            </p>
            <p className="navbar-options">Brands</p>
            <p className="navbar-options">Products</p>
            <p className="navbar-options">Contact Us</p>
          </div>
        </section>
        <div className="flex flex-row mt-10 mx-[10%] justify-between">
          <div className="flex flex-col">
            <p
              className="font-bebas text-6xl w-44 mt-20"
              onContextMenu={(e) => e.preventDefault()}
            >
              selling made better
            </p>
            <p className="font-bebas text-2xl">your reliable partner</p>

            <div className="flex items-center mt-5">
              <input
                type="email"
                className="border-0 px-4 py-2 rounded-tl-md rounded-bl-md"
                placeholder="Enter your email here..."
              />
              <button className="bg-gray-400 hover:bg-gray-700 text-white w-fit font-bebas font-bold py-2 px-4 rounded-tr-md rounded-br-md">
                get started
              </button>
            </div>
          </div>

          <Image
            src={warehouse}
            alt="warehouse"
            width={500}
            height={500}
            className="rounded-xl"
          />
        </div>
      </div>
      <div ref={section2Ref} className="h-screen bg-green-500">
        <div>
          <p>You have scrolled {scrollY} pixels</p>
          <div>
            <p>Scroll down to see the div</p>
            {showDiv && (
              <div className="fixed bottom-0 right-0 bg-gray-500 text-white p-4">
                This div is visible even after scrolling past 500 pixels!
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
