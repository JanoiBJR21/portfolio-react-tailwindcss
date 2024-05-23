import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className="mb-14">
      <div className="flex justify-end">
        <span>
          Ⓒ Apichat Wongtala, 2024 Time To Program, Happy Coding
          <a href="https://github.com/JanoiBJR21/portfolio-react-tailwindcss">
            <FontAwesomeIcon
              icon={faGithub}
              className="hover:scale-125 hover:text-primaryAccent transition-all ml-2"
            />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
