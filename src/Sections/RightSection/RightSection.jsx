import React from "react";
import About from "./About/About";
import ContentContainer from "../../Components/ContentContainer";
import { Data_Experience } from "../../DataContents/DataContentsExperience";
import { Data_Project } from "../../DataContents/DataContentsProject";
import Footer from "../Footer/Footer";
// import Project from "./Project";

const RightSection = ({ onInitial }) => {
  return (
    // Right
    <div className="grid gap-y-14 lg:gap-y-20 px-5">
      <About 
        title="About" 
        onInitial={onInitial} />
      <ContentContainer
        onInitial={onInitial}
        title="Experience"
        Data_Experience={Data_Experience}
      />
      <ContentContainer
        onInitial={onInitial}
        title="Project"
        Data_Experience={Data_Project}
      />
      <Footer />
    </div>
  );
};

export default RightSection;
