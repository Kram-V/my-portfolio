"use client";

import React from "react";
import { projects } from "@/data/client-projects";
import Button from "./global/Button";
import Tag from "./global/Tag";

const ClientProjects = () => {
  return (
    <div className="bg-gray-100">
      <div className="w-[1250px] mx-auto py-20">
        <h2 className="text-4xl font-medium mb-10 border-l-6 border-l-blue-600 w-[330px]  text-center uppercase">
          Client Projects
        </h2>

        <div className="grid grid-cols-2 gap-10 justify-items-center">
          {projects.map((project, i) => (
            <div key={i} className="card">
              <div className="card-inner">
                <div className="card-front">
                  <img
                    className="box-shadow rounded-xl "
                    src={project.image.src}
                    alt={project.image.alt}
                  />
                </div>

                <div className="card-back rounded-xl box-shadow bg-black text-white flex flex-col gap-10 justify-center items-center">
                  <div className="flex items-center gap-2">
                    <Button link={project.demoLiveLink}>Demo Live</Button>
                  </div>

                  <div className="flex flex-wrap justify-center gap-3">
                    {project.techStacks.map((tech, i) => (
                      <Tag key={i}>{tech}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientProjects;
