import React from "react";
import { NavLink } from "../types";

import { GiHamburgerMenu } from "react-icons/gi";

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
      <div className="w-[90%] xl:w-[1050px] 2xl:w-[1250px] mx-auto py-4">
        <div className="flex items-center justify-between text-white">
          <a href="#home">
            <span className="text-2xl font-bold">My Portfolio</span>
          </a>

          <div className="hidden lg:block">
            <ul className="flex items-center gap-10">
              {navLinks.map((navLink) => (
                <a
                  key={navLink.title}
                  className={`py-2 px-5 transition duration-300 hover:text-blue-600 text-white text-[18px]`}
                  href={navLink.link}
                >
                  <li>{navLink.title}</li>
                </a>
              ))}
            </ul>
          </div>

          <GiHamburgerMenu className="block lg:hidden text-[25px] cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
