import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function SocialLinks() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com/in/Chris41700",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Chris41700",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:ChrisHui417@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/Christopher_Hui_Resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  const toggleLinks = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-0 right-0 p-4">
      <button
        className="bg-gray-800 text-white py-2 px-4 rounded-full focus:outline-none"
        onClick={toggleLinks}
      >
        {isOpen ? "Hide" : "Show"} Social Links
      </button>

      {isOpen && (
        <ul className="flex flex-col gap-2">
          {links.map(({ id, child, href, style, download }) => (
            <li
              key={id}
              className={
                "flex justify-between items-center h-12 px-4 hover:rounded-md duration-300 bg-gradient-to-r from-cyan-500 to-blue-500" +
                " " +
                style
              }
            >
              <a
                href={href}
                className="flex items-center text-white"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
