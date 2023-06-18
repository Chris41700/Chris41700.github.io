import React from "react";
import HeroImage from "../assets/heroImage.JPEG";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-green-200 to-teal-300"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-8 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Hi! I'm
          </h2>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gradient bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Christopher Hui
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Software Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md text-sm sm:text-base md:text-lg">
            I have 8 years of experience building and designing software.
            Currently, I love to work on web applications using technologies
            like React, Tailwind, Next.js, and GraphQL.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-3xl md:rounded-none lg:rounded-3xl max-w-full h-auto max-h-96 mx-auto my-8 tablet:my-0 lg:p-8"
          />
        </div>
      </div>
    </div>
  );
}
