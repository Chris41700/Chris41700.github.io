import React from "react";
import HeroImage from "../assets/heroImage.JPEG";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <div
      name="home"
      className="w-full h-fit sm:h-screen bg-gradient-to-b from-green-400 to-teal-500 pt-40 sm:pt-32 md:pt-44 lg:pt-0"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 lg:flex-row">
        <div className="flex flex-col justify-center h-full md:mr-10">
          <h2 className="text-3xl sm:text-6xl font-bold bg-gradient-to-b from-cyan-500 to-blue-500 text-transparent inline-block bg-clip-text">
            <span className="whitespace-nowrap">Christopher Hui</span> <br />
            <span className="whitespace-nowrap text-white">
              Software Developer
            </span>
          </h2>

          <p className="text-white py-4 max-w-md text-xl whitesapce-nowrap">
            Recent computer science undergraduate specializing in full stack
            development with proficency with Java, C++, React, Tailwind, etc.
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
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-3xl mx-auto w-3/5 md:w-6/12 my-10 lg:my-0 lg:w-full border-4 border-solid"
          />
        </div>
      </div>
    </div>
  );
}
