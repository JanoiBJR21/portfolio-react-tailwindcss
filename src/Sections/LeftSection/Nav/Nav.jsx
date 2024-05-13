import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <div className="flex flex-col gap-3 font-semibold">
      <div>
        <FontAwesomeIcon
          icon={faArrowRight}
          className="mr-2 text-primaryTitle"
        />
        About
      </div>
      <div>Experience</div>
      <div>Project</div>
      <div>Contact Me</div>
    </div>
  );
};

export default Nav;
