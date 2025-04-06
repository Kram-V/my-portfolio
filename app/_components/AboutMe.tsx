import React from "react";

const descriptions: string[] = [
  "I'm Mark Anthony Vivar, a web developer passionate about creating innovative solutions. With a love for problem-solving, I build projects that aim to enhance user experiences while continuously improving my skills. My goal is to use technology to create meaningful impacts.",
  " I'm always eager to explore new technologies and frameworks. Whether it's learning a programming language or mastering a library, I strive to stay updated and write cleanscalable code. For me, understanding the fundamentals leads to more efficient development.",
  "I'm excited to dive into artificial intelligence soon. Its potential to revolutionize industries fascinates me, and I look forward to expanding my knowledge in this field as I continue to grow in my career.",
];

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
              <img
                className="rounded-full w-[70px]"
                src="/html.png"
                alt="HTML5"
              />
              <img
                className="rounded-full w-[70px]"
                src="/css3.png"
                alt="CSS3"
              />
              <img
                className="rounded-full w-[70px]"
                src="/javascript.png"
                alt="Javascript"
              />
              <img
                className="rounded-full w-[70px]"
                src="/typescript.png"
                alt="Typescript"
              />
              <img className="rounded-full w-[70px]" src="/php.png" alt="PHP" />
              <img className="rounded-full w-[70px]" src="/vue.png" alt="Vue" />
              <img
                className="rounded-full w-[70px]"
                src="/nuxt.png"
                alt="Nuxt"
              />
              <img
                className="rounded-full w-[70px]"
                src="/vuex.png"
                alt="VueX"
              />
              <img
                className="rounded-full w-[70px]"
                src="/pinia.png"
                alt="Pinia"
              />
              <img
                className="rounded-full w-[70px]"
                src="/react-js.png"
                alt="React JS"
              />
              <img
                className="rounded-full w-[70px]"
                src="/next-js.png"
                alt="Next JS"
              />
              <img
                className="rounded-full w-[70px]"
                src="/angular.png"
                alt="Angular"
              />
              <img
                className="rounded-full w-[70px]"
                src="/supabase.png"
                alt="Supabase"
              />
              <img
                className="rounded-full w-[70px]"
                src="/redux-toolkit.png"
                alt="Redux Toolkit"
              />
              <img
                className="rounded-full w-[70px]"
                src="/react-query.png"
                alt="React Query"
              />
              <img
                className="rounded-full w-[70px]"
                src="/react-hook-form.png"
                alt="React Hook Form"
              />
              <img
                className="rounded-full w-[70px]"
                src="/laravel.png"
                alt="Laravel"
              />
              <img
                className="rounded-full w-[70px]"
                src="/mysql.png"
                alt="MySQL"
              />
              <img
                className="rounded-full w-[70px]"
                src="/postgres.png"
                alt="Postgres"
              />
              <img
                className="rounded-full w-[70px]"
                src="/sqlite.png"
                alt="Sqlite"
              />
              <img
                className="rounded-full w-[70px]"
                src="/jquery.png"
                alt="Jquery"
              />
              <img className="rounded-full w-[70px]" src="/git.png" alt="Git" />
              <img
                className="rounded-full w-[70px]"
                src="/bootstrap.png"
                alt="Bootstrap"
              />
              <img
                className="rounded-full w-[70px]"
                src="/tailwind-css.png"
                alt="Tailwind CSS"
              />
              <img
                className="rounded-full w-[70px]"
                src="/material-ui.png"
                alt="Material UI"
              />
              <img className="rounded-full w-[70px]" src="/seo.png" alt="SEO" />
              <img
                className="rounded-full w-[70px]"
                src="/postman.png"
                alt="Postman"
              />
              <img className="rounded-full w-[70px]" src="/aws.png" alt="AWS" />
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-medium mb-10 uppercase">
              Knowledgable In
            </h3>

            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="box-shadow text-center py-3 rounded-md border-l-4 border-l-blue-600 font-medium">
                Frontend
              </div>
              <div className="box-shadow text-center py-3 rounded-md border-l-4 border-l-blue-600 font-medium">
                Backend
              </div>
              <div className="box-shadow text-center py-3 rounded-md border-l-4 border-l-blue-600 font-medium">
                Fullstack
              </div>
              <div className="box-shadow text-center py-3 rounded-md border-l-4 border-l-blue-600 font-medium">
                Relational Database
              </div>
              <div className="box-shadow text-center py-3 rounded-md border-l-4 border-l-blue-600 font-medium">
                Basic AWS
              </div>
              <div className="box-shadow text-center py-3 rounded-md border-l-4 border-l-blue-600 font-medium">
                API Integration
              </div>
              <div className="box-shadow text-center py-3 rounded-md border-l-4 border-l-blue-600 font-medium">
                Restful API
              </div>
              <div className="box-shadow text-center py-3 rounded-md border-l-4 border-l-blue-600 font-medium">
                SEO
              </div>
              <div className="box-shadow text-center py-3 rounded-md border-l-4 border-l-blue-600 font-medium">
                OOP
              </div>
              <div className="box-shadow text-center py-3 rounded-md border-l-4 border-l-blue-600 font-medium">
                MVC Architecture
              </div>
              <div className="box-shadow text-center py-3 rounded-md border-l-4 border-l-blue-600 font-medium">
                Mobile Responsive
              </div>
              <div className="box-shadow text-center py-3 rounded-md border-l-4 border-l-blue-600 font-medium">
                SQL Statement
              </div>
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
