import React from "react";
import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import javascript from "../assets/icons/javascript.png";
import react from "../assets/icons/react.png";
import tailwind from "../assets/icons/tailwind.png";
import node from "../assets/icons/node.png";
import java from "../assets/icons/java.png";

export default function Experience() {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "bg-gradient-to-b from-orange-100 to-orange-500 shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "bg-gradient-to-b from-blue-100 to-blue-500 shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "bg-gradient-to-b from-yellow-100 to-yellow-500 shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React.js",
      style: "bg-gradient-to-b from-cyan-100 to-cyan-500 shadow-cyan-500",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind CSS",
      style: "bg-gradient-to-b from-cyan-100 to-cyan-600 shadow-cyan-600",
    },
    {
      id: 6,
      src: node,
      title: "Node.js",
      style: "bg-gradient-to-b from-lime-100 to-lime-500 shadow-lime-500",
    },
    {
      id: 7,
      src: java,
      title: "Java",
      style: "bg-gradient-to-b from-blue-100 to-orange-500 shadow-orange-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-teal-500 to-green-400 w-full h-fit sm:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 text-white">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
