import React, { useState } from "react";
import FormatteDate from "../../../Components/FormatteDate";
import Picture from "../../../Components/Picture";
import TitleLink from "../../../Components/TitleLink";
import IconLink from "../../../Components/IconLink";
import Description from "../../../Components/Description";
import Tech from "../../../Components/Tech";
import { Data_Experience } from "../../../DataContents/DataContentsExperience";
import ContentContainer from "../../../Components/ContentContainer";

const SECTION_ID = "experience-section"

const Experience = () => {
  const [isMouseEnter, setIsMouseEnter] = useState({});

  return (
    <ContentContainer 
      title="Experience"
      Data_Experience = {Data_Experience}/>
  );
};

export default Experience;
