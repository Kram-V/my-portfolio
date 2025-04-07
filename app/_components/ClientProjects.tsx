import React from "react";

const ClientProjects = () => {
  return (
    <div className="bg-gray-100">
      <div className="w-[1250px] mx-auto py-20">
        <h2 className="text-4xl font-medium mb-10 border-l-6 border-l-blue-600 w-[330px]  text-center uppercase">
          Client Projects
        </h2>

        <div className="grid grid-cols-2 gap-10 justify-items-center">
          <img
            className="box-shadow rounded-md"
            src="/projects/flameguard.png"
            alt="Flameguard"
          />

          <img
            className="box-shadow rounded-md"
            src="/projects/flameguard-cms.png"
            alt="Flameguard CMS"
          />

          <img
            className="box-shadow rounded-md"
            src="/projects/heroes-connect.png"
            alt="Heroes Connect"
          />

          <img
            className="box-shadow rounded-md"
            src="/projects/ayuda-app.png"
            alt="Ayuda App"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientProjects;
