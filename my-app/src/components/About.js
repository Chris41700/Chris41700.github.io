import React from "react";

export default function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          From my early fascination with video games and Nintendo, my journey
          led me to a deep appreciation for computer science. The joy and
          challenge of gaming naturally translated into a love for coding and
          problem-solving. As I pursued my computer science education, I found
          myself thoroughly enjoying my classes, diving into complex algorithms,
          and discovering the beauty of logical thinking. It was during this
          time that I decided to further enhance my skills by joining the Tech
          Talent Pipeline Full-Stack Development Program.
        </p>

        <br />

        <p className="text-xl">
          In the program, I immersed myself in a wide range of technologies,
          including JavaScript, React.js, Express.js, Node.js, and PostgreSQL.
          With each new skill I acquired, my excitement grew. I was eager to
          apply my knowledge in a practical setting, and the opportunity arose
          when I landed my first internship at StartingPoint. As a software
          development intern, I collaborated closely with the talented
          development team, working on the company's website. I was thrilled to
          engage in both frontend and backend work, utilizing my expertise to
          improve the website's functionality and user experience. This
          internship not only solidified my passion for coding but also provided
          me with invaluable real-world experience that further fueled my desire
          to pursue a career in software development.
        </p>
      </div>
    </div>
  );
}
