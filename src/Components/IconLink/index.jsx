import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const IconLink = ({ icon, link }) => {
  return (
    <a href={link} target="_blank">
      <FontAwesomeIcon
        icon={icon}
        className="hover:scale-125 hover:text-primaryAccent transition-all"
      />
    </a>
  );
};

export default IconLink;
