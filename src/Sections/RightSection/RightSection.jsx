import React from "react";
import About from "./About/About";
import Experience from "./Experience/Experience";
// import Project from "./Project";

const RightSection = () => {
  return (
    // Right
    <div className="grid gap-y-20 px-5">
      <About/>
      <Experience/>
      {/* <Project/> */}
    </div>
  );
};

export default RightSection;
