import { projects } from "@/data/my-projects";
import React from "react";
import Button from "./global/Button";
import Tag from "./global/Tag";

const MyProjects = () => {
  return (
    <div>
      <div className="w-[1250px] mx-auto py-20">
        <h2 className="text-4xl font-medium mb-10 border-l-6 border-l-blue-600 w-[272px]  text-center uppercase">
          My Projects
        </h2>

        <div className="grid grid-cols-3 gap-10 justify-items-center">
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

                <div className="card-back rounded-xl box-shadow bg-black text-white flex flex-col gap-10 justify-center items-center">
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
