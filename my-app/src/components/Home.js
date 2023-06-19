import React from "react";
import HeroImage from "../assets/heroImage.JPEG";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-green-200 to-teal-300 pt-36 sm:pt-64 md:pt-0"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-8 md:flex-row">
        <div className="flex flex-col justify-center h-full md:pr-8 mt-16 sm:mt-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Hi! I'm
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gradient bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Christopher Hui
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4">
            Software Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md text-base sm:text-lg md:text-xl">
            I have 8 years of experience building and designing software.
            Currently, I love to work on web applications using technologies
            like React, Tailwind, Next.js, and GraphQL.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              offset={-200} // Adjust this value to properly position the content
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer transition-transform hover:scale-105"
            >
              Portfolio
              <span className="ml-1">
                <MdOutlineKeyboardArrowRight size={25} />
              </span>
            </Link>
          </div>
        </div>

        <div className="flex justify-center mt-6 sm:mt-10">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-full max-w-xs sm:max-w-sm md:max-w-md h-auto mx-auto shadow-xl border-white border-8"
          />
        </div>
      </div>
    </div>
  );
}
