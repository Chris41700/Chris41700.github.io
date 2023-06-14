import React from "react";
import HeroImage from "../assets/heroImage.JPEG";
import { MdOutlineArrowRight } from "react-icons/md";

export default function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            My name is Christopher Hui
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have recently graduated with my Bachelor's degree in Computer
            Science with a minor in Mathematics. As an aspiring software
            developer, I'm seeking entry-level oppportunities. Currently, I love
            to work on web application using technologies like JavaScript,
            React, Node, Tailwind, MySQL, and Java.
          </p>

          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineArrowRight size={25} />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl max-w-xl w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
}
