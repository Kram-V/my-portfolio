"use client";

import React, { useState } from "react";
import { NavLink } from "../types";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const navLinks: NavLink[] = [
  { title: "Home", link: "#home" },
  { title: "About Me", link: "#about-me" },
  { title: "Experience", link: "#experience" },
  { title: "My Projects", link: "#my-projects" },
  { title: "Contact", link: "#contact" },
];

const Navbar = () => {
  const [isSidebarNotActive, setIsSidebarNotActive] = useState<boolean>(true);

  const handleCloseSidebarMenu = () => {
    setIsSidebarNotActive(true);
  };

  const handleOpenSidebarMenu = () => {
    setIsSidebarNotActive(false);
  };

  return (
    <>
      <span id="home"></span>

      <header className="sticky top-0 z-50 bg-black">
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
            <GiHamburgerMenu
              onClick={handleOpenSidebarMenu}
              className="block lg:hidden text-[25px] cursor-pointer"
            />
          </div>
        </div>
      </header>

      {/* MOBILE SIDEBAR */}
      <div
        className={`${
          isSidebarNotActive ? "-translate-x-full" : ""
        } overflow-x-auto z-[60] text-white bg-black fixed top-0 right-0 bottom-0 w-full h-full transform transition-transform duration-500 block lg:hidden p-10`}
      >
        <div className="flex justify-between items-center">
          <a href="#home" onClick={handleCloseSidebarMenu}>
            <span className="text-2xl font-bold">My Portfolio</span>
          </a>

          <IoClose
            onClick={handleCloseSidebarMenu}
            className="block lg:hidden text-[28px] cursor-pointer"
          />
        </div>

        <ul className="flex flex-col justify-center items-center gap-10  mt-24">
          {navLinks.map((navLink) => (
            <a
              key={navLink.title}
              className={`py-2 px-5 transition duration-300 hover:text-blue-600 text-white text-[18px]`}
              href={navLink.link}
              onClick={handleCloseSidebarMenu}
            >
              <li>{navLink.title}</li>
            </a>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
