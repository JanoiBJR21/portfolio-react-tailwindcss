import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const navs = [
  { title: "About", sectionId: "About-section" },
  { title: "Experience", sectionId: "Experience-section" },
  { title: "Project", sectionId: "Project-section" },
];

const Nav = ({ navItems, currentSection }) => {
  const [isMouseEnter, setIsMouseEnter] = useState({});

  const handleClick = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hidden lg:flex flex-col font-semibold mt-6">
      {navItems.map((e, i) => (
        <div
          key={`nav-${e}-${i}`}
          onClick={() => handleClick(e.sectionId)}
          onMouseEnter={() => setIsMouseEnter({ [e.title]: true })}
          onMouseLeave={() => setIsMouseEnter({ [e.title]: false })}
          className="flex py-2 cursor-pointer"
        >
          <div>
            <FontAwesomeIcon
              icon={faArrowRight}
              className={`mr-2  new-arrow ${
                currentSection === e.sectionId
                  ? "text-primaryTitle"
                  : isMouseEnter[e.title]
                  ? ""
                  : "hidden"
              }`}
            />
          </div>
          <div
            className={`${
              currentSection === e.sectionId || isMouseEnter[e.title ? "translate-x-3" : ""]
            } duration-500 ease-out`}
          >
            {e.title}
          </div>
        </div>
      ))}

      {/* <div>Experience</div>
      <div>Project</div> */}
      {/* <div>Contact Me</div> */}
    </div>
  );
};

export default Nav;
