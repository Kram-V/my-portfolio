import { projects } from "@/data/my-projects";
import React from "react";
import Button from "./global/Button";
import Tag from "./global/Tag";

const MyProjects = () => {
  return (
    <div className="bg-gray-100">
      <div className="w-[90%] xl:w-[1050px] 2xl:w-[1250px] mx-auto py-20">
        <h2 className="text-3xl md:text-4xl font-medium mb-10 border-l-6 border-l-blue-600 w-[240px] md:w-[272px]  text-center uppercase">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10 justify-items-center">
          {projects.map((project, i) => (
            <div key={i} className="card">
              <div className="card-inner">
                <div className="card-front">
                  <img
                    key={i}
                    className="box-shadow rounded-xl"
                    src={project.image.src}
                    alt={project.image.alt}
                  />
                </div>

                <div className="card-back rounded-xl box-shadow bg-black text-white flex flex-col gap-4 lg:gap-6 justify-center items-center">
                  <div className="flex items-center gap-2">
                    <Button btnSize="md" link={project.demoLiveLink}>
                      Demo Live
                    </Button>

                    <Button btnSize="md" link={project.srcCodeLink}>
                      Code
                    </Button>
                  </div>

                  <div className="flex flex-wrap justify-center gap-3">
                    {project.techStacks.map((tech, i) => (
                      <Tag size="md" key={i}>
                        {tech}
                      </Tag>
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

export default MyProjects;
