"use client";

import React from "react";
import { projects } from "@/data/client-projects";
import Button from "./global/Button";
import Tag from "./global/Tag";

const ClientProjects = () => {
  return (
    <div>
      <div className="w-[90%] xl:w-[1050px] 2xl:w-[1250px] mx-auto py-20">
        <h2 className="text-3xl md:text-4xl font-medium mb-10 border-l-6 border-l-blue-600 w-[290px] md:w-[330px]  text-center uppercase">
          Client Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
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

                <div className="card-back rounded-xl box-shadow bg-black text-white flex flex-col gap-4 lg:gap-6 2xl:gap-10 justify-center items-center">
                  <div className="flex items-center gap-2">
                    <Button
                      className="hidden 2xl:block"
                      link={project.demoLiveLink}
                    >
                      Demo Live
                    </Button>

                    <Button
                      className="block 2xl:hidden"
                      btnSize="md"
                      link={project.demoLiveLink}
                    >
                      Demo Live
                    </Button>
                  </div>

                  <div className="flex flex-wrap justify-center gap-3">
                    {project.techStacks.map((tech, i) => (
                      <div key={i}>
                        <Tag className="hidden 2xl:block">{tech}</Tag>

                        <Tag className="block 2xl:hidden" size="md">
                          {tech}
                        </Tag>
                      </div>
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
