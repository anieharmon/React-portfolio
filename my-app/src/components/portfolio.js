import React from "react";
import Project from "./Project";

const projects = [

  {
    id: 1,
    title: "TechTopics",
    languages: "html, handlebars, js",
    packages: "bcrypt, connect-session-sequelize, dotenv, Express.js, express-handlebars, express-session, heroku, mysql2, sequelize",
    image: "/img/techtopics.png",
    description: "Allows you to edit and post blogs. You can also leave comments on your own blog or the blogs of others.",
    repo: "https://github.com/EmilyNecciai/tech-topics",
    live: "https://floating-thicket-72381.herokuapp.com/",
  },
  {
    id: 2,
    title: "Coding Quiz",
    languages: "html, css, js, handlebars",
    packages: "bcrypt, connect-session-sequelize, dotenv, express, express-handlebars, express-session, handlebars, mysql2, puppeteer, sequelize",
    image: "/img/Codingquiz.png",
    description: "Allows instructors to quickly create quizzes and print the quiz to a PDF to distribute to their students, as well as keep a copy for themselves with the answer key!",
    live: "https://quizam.herokuapp.com/",
  
  },
  
  {
    id: 4,
    title: "Note Taker App",
    languages: "html, css, js",
    packages: "Express.js, Generate Unique IDs",
    image: "/img/note-taker.png",
    description: "Write extensive notes and keep track of tasks, then save them for later reading or deletion.",
    repo: "https://github.com/anieharmon/Note-Taker",

  },
  
  {
    id: 6,
    title: "Weather Dashboard",
    languages: "html, css, js",
    packages: "none",
    image: "/img/weather-app.png",
    description: "A basic app that allows you to see the weather for a specific searched or saved city.",
    repo: "https://github.com/anieharmon/Weather-Dashboard",
    live: "http://127.0.0.1:5500/Weather-Dashboard/index.html",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;