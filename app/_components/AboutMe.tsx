import React from "react";
import { descriptions, experts, images } from "@/data/about-me";

const AboutMe = () => {
  return (
    <>
      <div className="bg-gray-100">
        <div className="w-[1250px] mx-auto py-20">
          <h2 className="text-4xl font-medium mb-10 border-l-6 border-l-blue-600 w-[220px]  text-center uppercase">
            About Me
          </h2>

          <div className="flex flex-col gap-10">
            {descriptions.map((description) => (
              <p key={description}>{description}</p>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="w-[1250px] mx-auto py-20 grid grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-medium mb-10 uppercase">
              Skills and Technologies
            </h3>

            <div className="grid grid-cols-5 gap-10">
              {images.map((image, i) => (
                <img
                  key={i}
                  className="rounded-full w-[70px]"
                  src={image.src}
                  alt={image.alt}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-medium mb-10 uppercase">
              Knowledgeable In
            </h3>

            <div className="grid grid-cols-3 gap-4 mb-10">
              {experts.map((expert, i) => (
                <div
                  key={i}
                  className="box-shadow text-center py-3 rounded-md border-l-4 border-l-blue-600 font-medium"
                >
                  {expert}
                </div>
              ))}
            </div>

            <p className="font-medium text-gray-500">
              Take Note: I am open to learning new technologies, frameworks, and
              tools to continuously grow as a developer. 😊
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
