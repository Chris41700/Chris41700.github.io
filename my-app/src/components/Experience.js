import React from "react";
import bootstrap from "../assets/icons/bootstrap.png";
import c from "../assets/icons/c.png";
import csharp from "../assets/icons/c#.png";
import cplusplus from "../assets/icons/c++.png";
import css from "../assets/icons/css.png";
import docker from "../assets/icons/docker.png";
import express from "../assets/icons/express.png";
import github from "../assets/icons/github.png";
import golang from "../assets/icons/golang.png";
import heroku from "../assets/icons/heroku.png";
import html from "../assets/icons/html.png";
import java from "../assets/icons/java.png";
import javafx from "../assets/icons/javafx.png";
import javascript from "../assets/icons/javascript.png";
import jquery from "../assets/icons/jquery.png";
import materialui from "../assets/icons/materialui.png";
import mysql from "../assets/icons/mysql.png";
import node from "../assets/icons/node.png";
import php from "../assets/icons/php.png";
import postgresql from "../assets/icons/postgresql.png";
import postman from "../assets/icons/postman.png";
import react from "../assets/icons/react.png";
import scenebuilder from "../assets/icons/scenebuilder.png";
import tailwind from "../assets/icons/tailwind.png";
import unity from "../assets/icons/unity.png";
import webflow from "../assets/icons/webflow.png";

export default function Experience() {
  const techs = [
    {
      id: 1,
      src: bootstrap,
      title: "Bootstrap",
      style: "bg-gradient-to-b from-purple-100 to-purple-500 shadow-purple-500",
    },
    {
      id: 2,
      src: csharp,
      title: "C#",
      style: "bg-gradient-to-b from-purple-100 to-purple-500 shadow-purple-500",
    },
    {
      id: 3,
      src: cplusplus,
      title: "C++",
      style: "bg-gradient-to-b from-blue-100 to-blue-500 shadow-blue-500",
    },
    {
      id: 4,
      src: css,
      title: "CSS",
      style: "bg-gradient-to-b from-blue-100 to-blue-500 shadow-blue-500",
    },
    {
      id: 5,
      src: docker,
      title: "Docker",
      style: "bg-gradient-to-b from-blue-100 to-blue-400 shadow-blue-500",
    },
    {
      id: 6,
      src: express,
      title: "Express JS",
      style: "bg-gradient-to-b from-white to-black shadow-black",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "bg-gradient-to-b from-white to-black shadow-black",
    },
    {
      id: 8,
      src: golang,
      title: "Golang",
      style: "bg-gradient-to-b from-blue-100 to-blue-500 shadow-blue-500",
    },
    {
      id: 9,
      src: heroku,
      title: "Heroku",
      style: "bg-gradient-to-b from-blue-100 to-blue-500 shadow-blue-500",
    },
    {
      id: 10,
      src: html,
      title: "HTML",
      style: "bg-gradient-to-b from-orange-100 to-orange-500 shadow-orange-500",
    },
    {
      id: 11,
      src: c,
      title: "C",
      style: "bg-gradient-to-b from-blue-100 to-blue-500 shadow-blue-500",
    },
    {
      id: 12,
      src: java,
      title: "Java",
      style: "bg-gradient-to-b from-orange-100 to-orange-500 shadow-orange-500",
    },
    {
      id: 13,
      src: javafx,
      title: "JavaFX",
      style: "bg-gradient-to-b from-orange-100 to-orange-500 shadow-orange-500",
    },
    {
      id: 14,
      src: javascript,
      title: "JavaScript",
      style: "bg-gradient-to-b from-yellow-100 to-yellow-500 shadow-yellow-500",
    },
    {
      id: 15,
      src: jquery,
      title: "jQuery",
      style: "bg-gradient-to-b from-blue-100 to-blue-400 shadow-blue-500",
    },
    {
      id: 16,
      src: materialui,
      title: "Material UI",
      style: "bg-gradient-to-b from-blue-100 to-blue-400 shadow-blue-500",
    },
    {
      id: 17,
      src: mysql,
      title: "MySQL",
      style: "bg-gradient-to-b from-blue-100 to-blue-400 shadow-blue-500",
    },
    {
      id: 18,
      src: node,
      title: "Node JS",
      style: "bg-gradient-to-b from-lime-100 to-lime-500 shadow-lime-500",
    },
    {
      id: 19,
      src: php,
      title: "PHP",
      style: "bg-gradient-to-b from-purple-100 to-purple-500 shadow-purple-500",
    },
    {
      id: 20,
      src: postgresql,
      title: "PostgreSQL",
      style: "bg-gradient-to-b from-blue-100 to-blue-400 shadow-blue-500",
    },
    {
      id: 21,
      src: postman,
      title: "Postman",
      style: "bg-gradient-to-b from-orange-100 to-orange-500 shadow-orange-500",
    },
    {
      id: 22,
      src: react,
      title: "React JS",
      style: "bg-gradient-to-b from-blue-100 to-blue-400 shadow-blue-500",
    },
    {
      id: 23,
      src: scenebuilder,
      title: "SceneBuilder",
      style: "bg-gradient-to-b from-orange-100 to-orange-500 shadow-orange-500",
    },
    {
      id: 24,
      src: tailwind,
      title: "Tailwind CSS",
      style: "bg-gradient-to-b from-blue-100 to-blue-400 shadow-blue-500",
    },
    {
      id: 25,
      src: unity,
      title: "Unity",
      style: "bg-gradient-to-b from-white to-black shadow-black",
    },
    {
      id: 26,
      src: webflow,
      title: "Webflow",
      style: "bg-gradient-to-b from-blue-100 to-blue-400 shadow-blue-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-teal-500 to-green-400 w-full h-fit sm:min-h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0">
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
