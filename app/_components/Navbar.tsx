import React from "react";
import { NavLink } from "../types";

const navLinks: NavLink[] = [
  { title: "Home", link: "#home" },
  { title: "About Me", link: "#about-me" },
  { title: "Experience", link: "#experience" },
  { title: "My Projects", link: "#my-projects" },
  { title: "Contact", link: "#contact" },
];

const Navbar = () => {
  return (
    <header className="bg-black">
      <div className="w-[1250px] mx-auto py-4">
        <div className="flex items-center justify-between text-white">
          <span className=" text-xl font-bold">My Portfolio</span>

          <ul className="flex items-center gap-10">
            {navLinks.map((navLink) => (
              <a
                key={navLink.title}
                className={`py-2 px-5 rounded-full transition duration-300 hover:bg-blue-600 hover:text-white `}
                href={navLink.link}
              >
                <li>{navLink.title}</li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
