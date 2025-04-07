import React from "react";

const MyProjects = () => {
  return (
    <div>
      <div className="w-[1250px] mx-auto py-20">
        <h2 className="text-4xl font-medium mb-10 border-l-6 border-l-blue-600 w-[272px]  text-center uppercase">
          My Projects
        </h2>

        <div className="grid grid-cols-3 gap-10 justify-items-center">
          <img
            className="box-shadow rounded-md"
            src="/projects/guess-number.png"
            alt="Guess Number"
          />

          <img
            className="box-shadow rounded-md"
            src="/projects/travel-list.png"
            alt="Travel List"
          />

          <img
            className="box-shadow rounded-md"
            src="/projects/cine-rater.png"
            alt="Cine Rater"
          />

          <img
            className="box-shadow rounded-md"
            src="/projects/javascript-quiz.png"
            alt="Javascript Quiz"
          />

          <img
            className="box-shadow rounded-md"
            src="/projects/pig-game.png"
            alt="Pig Game"
          />

          <img
            className="box-shadow rounded-md"
            src="/projects/cabin-booking-management.png"
            alt="Cabin Booking Management"
          />

          <img
            className="box-shadow rounded-md"
            src="/projects/cabin-vista.png"
            alt="Cabin Vista"
          />

          <img
            className="box-shadow rounded-md"
            src="/projects/task-app.png"
            alt="Task App"
          />

          <img
            className="box-shadow rounded-md"
            src="/projects/diary-app.png"
            alt="Diary App"
          />

          <img
            className="box-shadow rounded-md"
            src="/projects/spotify.png"
            alt="Spotify"
          />
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
