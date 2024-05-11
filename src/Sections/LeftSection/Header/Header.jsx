import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import fileresume from "../../../assets/Resume.pdf";

const Header = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-3xl text-primaryTitle font-semibold">
        Apichat Wongtala
      </div>

      <div className="font-semibold">
        Junoi Front-end Developer *between jobs
      </div>

      <div className="text-sm w-5/6 text-primaryContent">
        From concept to reality, bridging the gap with code, transforming ideas
        into tangible digital solutions.
      </div>

      <div className="mt-4">
        <a href={fileresume} target="_blank">
          <span className="bg-primaryTitle py-2 px-4 rounded-md">
            View Resume
            <span className="inline-block rotate-90 ml-2 text-sm">
              <FontAwesomeIcon icon={faArrowDown} className="animate-bounce" />
            </span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Header;
