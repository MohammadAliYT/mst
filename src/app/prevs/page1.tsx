"use client";
import React, { useRef, useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import "./styles/styles.css";
import "./globals.css";
import bg from "../../public/images/bg.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Tilt from "react-parallax-tilt";
import "animate.css";
import warehouse from "../../public/images/warehouse.png";
import Image from "next/image";
import nivea from "../../public/images/nivea.png";

interface CounterProps {
  endValue: number;
  interval: number;
}

function Counter({ endValue, interval }: CounterProps) {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const clearCounterInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        clearCounterInterval();

        intervalRef.current = setInterval(() => {
          if (count < endValue) {
            setCount(count + interval);
          }
        }, 100);
      } else {
        clearCounterInterval();
      }
    });

    observer.observe(counterRef.current!);

    return () => {
      observer.unobserve(counterRef.current!);
      clearCounterInterval();
    };
  }, [count]);

  return (
    <div ref={counterRef} className="counter">
      <span
        className="count animate__animated animate__count"
        data-count={count}
      >
        {count.toLocaleString()}
      </span>
    </div>
  );
}

export default function Home() {
  AOS.init();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const AOS = require("aos");
      AOS.init();
    }
  }, []);
  // Get the current scroll position
  const scrollPosition = window.pageYOffset;

  // Store the scroll position in localStorage
  // @ts-ignore
  localStorage.setItem("scrollPosition", scrollPosition);
  // Get the stored scroll position from localStorage
  const storedScrollPosition = localStorage.getItem("scrollPosition");

  // If the stored scroll position is not null, scroll the page to that position
  if (storedScrollPosition !== null) {
    // @ts-ignore
    window.scrollTo(0, storedScrollPosition);
  }

  return (
    <>
      <div className="w-screen h-screen overflow-x-hidden bg-gradient-to-b from-[#f68b2c] to-[#666565] flex justify-center items-center">
        <span className="w-fit text-center inline-block font-ogg text-9xl">
          MS TRADERS
        </span>
      </div>
      <div
        className="w-screen h-screen bg-[#666565] flex flex-row px-36 py-20"
        id="aboutus"
      >
        <div className="flex flex-row justify-between">
          <div
            data-aos="fade-right"
            className="w-1/2 h-[90%] bg-[#c36d21] flex flex-col p-5"
          >
            <span
              data-aos="fade-up"
              data-aos-duration="300"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
              className="font-ogg mb-10 lg:text-5xl"
            >
              About Us
            </span>
            <span className="font-ogg text-lg">
              M.S Traders is a trusted name in the retail and wholesale
              distribution of cosmetic and toiletries products. With an
              extensive range of brands and SKUs, we have been providing
              high-quality products to customers for years. Our inventory
              includes makeup, skincare, haircare, fragrances, and much more. We
              take pride in offering exceptional customer service, competitive
              pricing, and timely delivery. Our team of experts is passionate
              about our products and committed to helping you find the perfect
              item to suit your needs. Thank you for considering M.S Traders for
              your cosmetic and toiletries needs, and we look forward to serving
              you soon.
            </span>
          </div>
          <Tilt>
            <div style={{ height: "90%", backgroundColor: "darkgreen" }}>
              <Image
                src={warehouse}
                alt="image"
                className="w-[100%] h-[100%]"
              />
            </div>
          </Tilt>
        </div>
      </div>
      <div
        className="w-screen h-screen bg-[#f68b2c] inline-block px-36 py-10 font-ogg"
        id="services_retail"
      >
        <p
          className="text-7xl text-center font-ogg"
          data-aos="flip-up"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          Our Services
        </p>
        <div className="text-left mt-20 flex flex-row justify-between">
          <div>
            <p className="text-6xl text-left">B2B</p>
            <p>Business to Bussiness</p>
            <p className="w-64 font-bold">
              We are in business with leading retail store and wholesale
              distributors across the country
            </p>
          </div>
          <div className="flex flex-row gap-10">
            <div className="w-32 h-32 border-2 border-black rounded-xl flex items-center justify-center text-xl flex-col">
              <div>Over</div>
              <div className="flex flex-row">
                <Counter endValue={1000} interval={100} />+
              </div>
              <div>Orders</div>
            </div>
            <div className="w-32 h-32 border-2 border-black rounded-xl flex items-center justify-center text-xl flex-col">
              <div>{""}</div>
              <div className="flex flex-row">
                <Counter endValue={20000} interval={1000} />+
              </div>
              <div>units sold</div>
            </div>
          </div>
        </div>

        {/* second section */}
        <div className="text-right mt-20 flex flex-row-reverse justify-between overflow-x-hidden">
          <div>
            <p className="text-6xl text-right">B2C</p>
            <p>Business to Consumer</p>
            <p className="w-64 font-bold">
              Shop All you want at wholesale prices
            </p>
          </div>
          <div className="flex flex-row gap-10 text-center">
            <div className="w-32 h-32 border-2 border-black rounded-xl flex items-center justify-center text-xl flex-col">
              <div>Over</div>
              <div className="flex flex-row font-bold">
                <Counter endValue={3000} interval={200} />+
              </div>
              <div>Satisfied Customers</div>
            </div>
            <div className="w-32 h-32 border-2 border-black rounded-xl flex items-center justify-center text-xl flex-col">
              <div>{""}</div>
              <div className="flex flex-row font-bold">
                <Counter endValue={500} interval={50} />+
              </div>
              <div>Products</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-screen h-screen bg-[#d1bba7] inline-block px-36 py-10 font-ogg flex-row"
        id="brands"
      >
        <p
          className="text-7xl text-center font-ogg"
          data-aos="flip-up"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          Our Brands
        </p>
        <div className="flex flex-row justify-between">
          <p className="w-56">
            Discover a wide range of cosmetic and toiletries products from top
            brands at our retail store. We carry multiple brands, offering you a
            selection of high-quality products to meet your unique needs.
          </p>

          <div className="w-80 h-[21rem] bg-slate-300">
            <div className="grid grid-cols-3 grid-rows-4 gap-x-0 gap-y-4">
              <div className="square">
                <Image
                  src={nivea}
                  alt="dsw"
                  width={100}
                  height={100}
                  className="bg-transparent"
                />
              </div>
              <div className="square">
                <Image
                  src={nivea}
                  alt="dsw"
                  width={100}
                  height={100}
                  className="bg-transparent"
                />
              </div>
              <div className="square">
                <Image
                  src={nivea}
                  alt="dsw"
                  width={100}
                  height={100}
                  className="bg-transparent"
                />
              </div>
              <div className="square">
                <Image
                  src={nivea}
                  alt="dsw"
                  width={100}
                  height={100}
                  className="bg-transparent"
                />
              </div>
              <div className="square">
                <Image
                  src={nivea}
                  alt="dsw"
                  width={100}
                  height={100}
                  className="bg-transparent"
                />
              </div>
              <div className="square">
                <Image
                  src={nivea}
                  alt="dsw"
                  width={100}
                  height={100}
                  className="bg-transparent"
                />
              </div>
              <div className="square">
                <Image
                  src={nivea}
                  alt="dsw"
                  width={100}
                  height={100}
                  className="bg-transparent"
                />
              </div>
              <div className="square">
                <Image
                  src={nivea}
                  alt="dsw"
                  width={100}
                  height={100}
                  className="bg-transparent"
                />
              </div>
              <div className="square">
                <Image
                  src={nivea}
                  alt="dsw"
                  width={100}
                  height={100}
                  className="bg-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-screen h-screen bg-[#d3e531] px-36 py-10 font-ogg "
        id="products"
      >
        <p
          className="text-7xl text-center font-ogg"
          data-aos="flip-up"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          Our Products
        </p>
      </div>
    </>
  );
}
