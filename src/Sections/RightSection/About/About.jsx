import React from "react";
import { Data_About } from "../../../DataContents/DataContentsAbout";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";

const About = () => {
  return (
    <div>
      {/* About */}
      <div className="font-semibold">{Data_About.title}</div>
      <div className="text-sm text-primaryContent pl-4">
        {Data_About.description}
        <Education />
        <Skills />
      </div>
    </div>
  );
};

export default About;
