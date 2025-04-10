import React from "react";

const Experience = () => {
  return (
    <div
      className="bg-gray-100 scroll-mt-[40px] lg:scroll-mt-[70px]"
      id="experience"
    >
      <div className="w-[90%] xl:w-[1050px] 2xl:w-[1250px] mx-auto py-20">
        <h2 className="text-3xl md:text-4xl font-medium mb-14 border-l-6 border-l-blue-600 w-[315px] md:w-[355px]  text-center uppercase">
          Work Experience
        </h2>

        <div className="flex flex-col gap-10">
          <div className="w-[90%] lg:w-[700px] mx-auto">
            <div className="flex flex-col gap-4 border-l-1 border-l-gray-300 pr-0 lg:pr-10 pl-10 relative">
              <img
                className="absolute -left-[25px] sm:-left-[32px] top-0 w-[50px] sm:w-[60px]"
                src="/experience/hmr-philippines.png"
                alt="HMR Philippines"
              />

              <div className="flex flex-col">
                <h5 className="font-medium">HMR Philippines</h5>
                <span>Junior Frontend Developer</span>
                <span className="text-gray-400">
                  January 2023 - December 2024
                </span>
              </div>

              <p className="w-full">
                I was responsible for developing and maintaining UI components,
                collaborating with the designer and frontend lead, implementing
                logic and functionality, writing and optimizing frontend code,
                fixing bugs mainly in the CMS ensuring cross-browser
                compatibility, contributing to responsive design, participating
                in code reviews, learning new tools, integrating APIs, and
                revamping the system for better performance and user experience.
              </p>
            </div>
          </div>

          <div className="w-[90%] lg:w-[700px] mx-auto">
            <div className="flex flex-col gap-4 border-l-1 border-l-gray-300 pr-0 lg:pr-10 pl-10 relative">
              <img
                className="absolute -left-[25px] sm:-left-[32px] top-0 w-[50px] sm:w-[60px]"
                src="/experience/rigfab.jpeg"
                alt="Rigfab"
              />

              <div className="flex flex-col">
                <h5 className="font-medium">Rigfab (Freelance US Based)</h5>
                <span>Frontend/Next Js Developer</span>
                <span className="text-gray-400">July 2024 - November 2024</span>
              </div>

              <p>
                I was involved in revamping the system, developing UI
                components, integrating APIs, and collaborating closely with our
                team especially backend developers to implement frontend logic
                and functionality. My role also included writing and maintaining
                frontend code, participating in code reviews, fixing performance
                issues, and creating responsive layouts for a smooth user
                experience.
              </p>
            </div>
          </div>

          <div className="w-[90%] lg:w-[700px] mx-auto">
            <div className="flex flex-col gap-4 border-l-1 border-l-gray-300 pr-0 lg:pr-10 pl-10 relative">
              <img
                className="absolute -left-[25px] sm:-left-[32px] top-0 w-[50px] sm:w-[60px]"
                src="/experience/cloud-panda.png"
                alt="Cloud Panda PH"
              />

              <div className="flex flex-col">
                <h5 className="font-medium">Cloud Panda PH</h5>
                <span>Software Engineer I</span>
                <span className="text-gray-400">April 2022 - August 2022</span>
              </div>

              <p>
                I participated in building a team-oriented website to strengthen
                collaboration, learned and applied new skills to improve daily
                efficiency, and consistently followed best practices in writing,
                testing, and maintaining code. I assisted in code reviews,
                demonstrated a helpful and respectful attitude, and contributed
                to the development of an ERP system (Inventory and
                Manufacturing) using React.js and Material UI. I also made extra
                efforts to accelerate progress and ensured the website was fully
                responsive.
              </p>
            </div>
          </div>

          <div className="w-[90%] lg:w-[700px] mx-auto">
            <div className="flex flex-col gap-4 border-l-1 border-l-gray-300 pr-0 lg:pr-10 pl-10 relative">
              <img
                className="absolute -left-[25px] sm:-left-[32px] top-0 w-[50px] sm:w-[60px]"
                src="/experience/busybee.jpeg"
                alt="My Busybee Inc"
              />

              <div className="flex flex-col">
                <h5 className="font-medium">My Busybee Inc</h5>
                <span>Backend Developer</span>
                <span className="text-gray-400">
                  September 2021 - December 2021
                </span>
              </div>

              <p>
                I participated in developing a team-building website to improve
                collaboration, actively listened to users to address concerns
                efficiently, and continuously learned new skills to boost
                productivity. I analyzed detailed designs, developed server-side
                logic, databases, and APIs, and managed database migrations.
                Using MVC architecture with PHP and Laravel, I helped build an
                Information System while collaborating closely with product
                owners and stakeholders. I also took part in sprint planning and
                standups, maintained a responsive design, and demonstrated a
                respectful and helpful attitude throughout the process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
