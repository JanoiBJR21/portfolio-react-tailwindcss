import React, { useEffect } from "react";
import { Data_About } from "../../../DataContents/DataContentsAbout";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";

const About = ({ onInitial, title = "", }) => {
  const SECTION_ID = `${title}-section`;

  useEffect(() => {
    onInitial(SECTION_ID);
  }, []);

  return (
    <div className="px-2 scroll-m-14" id={SECTION_ID}>
      <div className="font-semibold">{Data_About.title}</div>
      <div className="text-sm text-primaryContent mt-4">
        {Data_About.description}
      </div>
      <Education />
      <Skills />
    </div>
  );
};

export default About;
