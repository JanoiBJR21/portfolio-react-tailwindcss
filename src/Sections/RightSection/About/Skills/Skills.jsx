import React from "react";
import { Data_Skills } from "../../../../DataContents/DataContentsAbout";

const Skills = () => {
  return (
    <div className="mt-4">
      {Data_Skills.title}
      <div className="grid grid-cols-8 mt-2 text-center gap-4 pl-4">
        <img
          src={Data_Skills.logo_html}
          alt=""
          className="object-contain h-8 w-8 "
        />
        <img
          src={Data_Skills.logo_css}
          alt=""
          className="object-contain h-8 w-8 "
        />
        <img
          src={Data_Skills.logo_javascript}
          alt=""
          className="object-contain h-8 w-8 "
        />
        <img
          src={Data_Skills.logo_react}
          alt=""
          className="object-contain h-8 w-8 "
        />
        <img
          src={Data_Skills.logo_tailwind}
          alt=""
          className="object-contain h-8 w-8 "
        />
        <img
          src={Data_Skills.logo_github}
          alt=""
          className="object-contain h-8 w-8 "
        />
        <img
          src={Data_Skills.logo_vscode}
          alt=""
          className="object-contain h-8 w-8 "
        />
        <img
          src={Data_Skills.logo_microsoft_office}
          alt=""
          className="object-contain h-8 w-8 "
        />
      </div>
    </div>
  );
};

export default Skills;
