import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Fraud Specialist trying to an engineer</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Emily Necciai Mayeski"/>
      <p className="content is-italic mt-4">
        I'm Anie, a technical writer studying the full stack web development course in hopes
        of changing my career or enhancing my skills. I'm a former sign language interpreter.
      </p>
      <p className="content">
        Within my current job as a Fraud Specialist as well as my previous position i found myself working with many developers
        in the company and have found their job interesting.
      </p>
    </div>
  );
}

export default About;