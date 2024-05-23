import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TitleLink = ({ isHighLight, title, link }) => {
  if (!link) {
    return (
      <div className={`text-primaryBase ${isHighLight ? "text-primaryTitle" : ""}`}>
        {title}
      </div>
    );
  }

  return (
    <div className={`text-primaryBase ${isHighLight ? "text-primaryTitle" : ""}`}>
      <a href={link} target="_blank">
        {title}
        <FontAwesomeIcon icon={faArrowRight}
          className={`text-xs -rotate-45 duration-500 ease-out ${
            isHighLight ? "translate-x-1 -translate-y-1" : ""
          }`}
        />
      </a>
    </div>
  );
};

export default TitleLink;
