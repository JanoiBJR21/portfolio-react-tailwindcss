import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import img_workshop1 from "../../assets/img_workshop1.png"

const Project = () => {
  return (
    <div>
      <div className="font-semibold">Porject</div>
      <div className="grid grid-cols-[35%_65%]">
        {/* Left */}
        <div>
          <div>January 2024 - February 2024</div>
          <div>
            <img src={img_workshop1} alt=""/>
          </div>
        </div>

        {/* Right */}
        <div className="grid gap-y-4">
          <div className="text-primaryBase">
            Portfolio React + Tailwind
          </div>
          <div className="text-primaryContent text-xl flex gap-4">
            <a href="">
              <FontAwesomeIcon
                icon={faGithub}
                className="hover:scale-125 hover:text-primaryAccent transition-all"
              />
            </a>
            <a href="">
              <FontAwesomeIcon
                icon={faYoutube}
                className="hover:scale-125 hover:text-primaryAccent transition-all"
              />
            </a>
          </div>
          <div className="text-primaryContent text-sm">
            · A simple and minimalist portfolio for developers built with React
            and TailwindCSS, designed to be clean and fast.
          </div>
          <div className="flex gap-4 text-primaryContent text-sm">
            <div>React</div>
            <div>Tailwind</div>
            <div>FontAwesome</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
