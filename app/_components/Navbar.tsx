"use client";
import React, { useEffect, useState } from "react";
import { NavLink } from "../types";

const navLinks: NavLink[] = [
  { title: "Home", link: "#home" },
  { title: "About Me", link: "#about-me" },
  { title: "Client Projects", link: "#client-projects" },
  { title: "My Projects", link: "#my-projects" },
  { title: "Contact", link: "#contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>("#home");

  useEffect(() => {
    setActiveSection("#home");

    const onHashChange = () => {
      setActiveSection(window.location.hash);
    };

    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return (
    <header className="bg-black">
      <div className="w-[1250px] mx-auto py-4">
        <div className="flex items-center justify-between text-white">
          <span className=" text-xl font-bold">My Portfolio</span>

          <ul className="flex items-center gap-10">
            {navLinks.map((navLink) => (
              <a
                key={navLink.title}
                className={`py-2 px-5 rounded-full transition duration-300 hover:bg-blue-600 hover:text-white ${
                  activeSection === navLink.link ? "bg-blue-600 text-white" : ""
                }`}
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
