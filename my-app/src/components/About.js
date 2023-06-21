import React from "react";

export default function About() {
  return (
    <div
      name="about"
      className="w-full h-fit sm:h-screen bg-gradient-to-b from-teal-500 to-green-400 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am a driven Software Developer based in Staten Island, NY. I
          specialize in languages like C++, Java, and JavaScript, and I have a
          strong proficiency in frameworks such as React.js and Tailwind CSS. My
          experience includes working with databases like PostgreSQL and MySQL,
          allowing me to develop robust and scalable applications. With tools
          like GitHub, Trello, and Postman, I streamline development processes
          and facilitate effective collaboration within agile teams. I hold a
          Bachelor's degree in Computer Science with a minor in Mathematics from
          the City University of New York, College of Staten Island, where I
          achieved a Cum Laude distinction and was consistently recognized on
          the Dean's List. I am eager to apply my skills and passion to
          contribute to impactful software development projects.
        </p>
      </div>
    </div>
  );
}
