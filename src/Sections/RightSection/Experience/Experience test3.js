import React, { useState } from "react";
import FormatteDate from "../../../Components/FormatteDate";
import Picture from "../../../Components/Picture";
import TitleLink from "../../../Components/TitleLink";
import IconLink from "../../../Components/IconLink";
import Description from "../../../Components/Description";
import Tech from "../../../Components/Tech";
import { Data_Experience } from "../../../DataContents/DataContentsExperience";

const SECTION_ID = "experience-section"

const Experience = () => {
  const [isMouseEnter, setIsMouseEnter] = useState({});

  return (
    <div id={SECTION_ID}>
      <div className="font-semibold px-2">Experience</div>
      {Data_Experience.map(
        (
          { date = "", 
            picture = "", 
            title = "", 
            link = "", 
            iconlinks = [], 
            descriptions = [], 
            techs = [] },
          index
        ) => (
          <div
          key={`${SECTION_ID}-${index}-${title.replaceAll(" ","")}`}
            className={`grid grid-cols-[35%_65%] rounded-md px-2 py-6 transition-all ${
              isMouseEnter[`${SECTION_ID}-${index}`] ? "bg-stone-900" : ""
            }`}
            onMouseEnter={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: true })}
            onMouseLeave={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: false })}
          >
            {/* Left */}
            <div>
              <FormatteDate isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]}>{date}</FormatteDate>
              <Picture picture={picture} title={title} />
            </div>

            {/* Right */}
            <div className="grid gap-y-4">
              <TitleLink
                isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]}
                title={title}
                link={link}
              />
              {
                iconlinks.length > 0 ?
              
              <div className="text-xl flex gap-2 items-center text-primaryContent">
                {
                  iconlinks.map((e ,i)=>(
                    <IconLink key={`${e}-iconlink-${i}`}
                    icon={e.type}
                    link={e.link}
                />
                  ))
                }
              </div>
              : null
              }
              {
                descriptions.map((e, i)=>(
                  <Description key={`${e}-description-${i}`} description={e} />

                ))
              }
              {
                techs.map((e, i)=>(
                  <Tech key={`${e}-tech-${i}`} isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} dataTech={e}
                />
                ))
              }
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Experience;
