/*
<ContentContainer
    title = ""
    data{[]}
</>
*/

import { useState } from "react";
import FormatteDate from "../FormatteDate";
import Picture from "../Picture";
import TitleLink from "../TitleLink";
import IconLink from "../IconLink";
import Description from "../Description";
import Tech from "../Tech";

const ContentContainer = ({
    title: sectionTitle = "",
    Data_Experience = [],
}) => {
    const [isMouseEnter, setIsMouseEnter] = useState({});

    const SECTION_ID = `${sectionTitle}-section`;

    return (
      <div id={SECTION_ID}>
        <div className="font-semibold px-2">{sectionTitle}</div>
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
  )
}

export default ContentContainer