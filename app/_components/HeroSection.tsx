"use client";

import React from "react";
import { FaFacebook } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaSquareGitlab } from "react-icons/fa6";
import Button from "./global/Button";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <div className="h-[750px]">
      <div className="w-[1250px] h-full mx-auto py-4 grid grid-cols-2 justify-items-center items-center">
        <div>
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.NJ3WnhZV4aRpAqK5COWlMAHaHa&pid=Api&P=0"
            alt="Mark Anthony Vivar"
          />
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-3xl font-bold text-gray-500">Hi There 👋, I'm</p>
          <h1 className="text-5xl font-bold">Mark Anthony Vivar</h1>

          <div className="flex flex-col gap-2">
            <TypeAnimation
              className="text-3xl font-bold text-gray-500"
              sequence={[
                "I love being developer",
                1000,
                "Technologies explorer",
                1000,
                "Always learning new things",
                1000,
                "Building with code",
                1000,
                "Solving problems",
                1000,
                "Shaping the future",
                1000,
                "Learning AI... Soon!",
                1000,
              ]}
              speed={65}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />

            <ul className="flex gap-2 mb-2">
              <li>
                <a href="#">
                  <FaFacebook className="text-[28px] transition duration-300 hover:text-blue-600" />
                </a>
              </li>
              <li>
                <a href="#">
                  <BsGithub className="text-[28px] transition duration-300 hover:text-blue-600" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaSquareGitlab className="text-[28px] transition duration-300 hover:text-blue-600" />
                </a>
              </li>
            </ul>

            <Button btnWidth="w-[200px]">Upload Resume</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
