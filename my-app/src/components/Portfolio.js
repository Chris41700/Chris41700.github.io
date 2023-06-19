import React from "react";
import capstoneProject from "../assets/portfolio/capstone_project.png";
import javafxStudyMate from "../assets/portfolio/javafx_studymate.png";

export default function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: capstoneProject,
    },
    {
      id: 2,
      src: javafxStudyMate,
    },
    {
      id: 3,
      src: capstoneProject,
    },
    {
      id: 4,
      src: javafxStudyMate,
    },
    {
      id: 5,
      src: capstoneProject,
    },
    {
      id: 6,
      src: javafxStudyMate,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-green-200 to-teal-300 w-full text-white md:h-screen pt-96 sm:pt-44 md:pt-0"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg bg-slate-300"
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-blue-500 text-white">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-green-500 text-white">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
