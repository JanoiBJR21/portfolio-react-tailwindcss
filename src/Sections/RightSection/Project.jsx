import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import img_workshop1 from "../../assets/img_workshop1.png"


const Project = () => {
  return (
    <div className="space-y-4">
      <div className="font-semibold">Porject</div>

      {/* Project 1 */}
      <div className="grid grid-cols-[35%_65%]">
        {/* Left */}
        <div>
          <div className="text-primaryContent">Jan 2024 - Feb 2024</div>
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
            {/* <a href="">
              <FontAwesomeIcon
                icon={faYoutube}
                className="hover:scale-125 hover:text-primaryAccent transition-all"
              />
            </a> */}
          </div>
          <div className="text-primaryContent text-sm">
            · A simple and minimalist portfolio for developers built with React
            and TailwindCSS, designed to be clean and fast.
          </div>
          <div className="flex gap-2 text-primaryContent text-sm">
            <div className="bg-primarySubcontent px-2 py-1 rounded-md">React</div>
            <div className="bg-primarySubcontent px-2 py-1 rounded-md">Tailwind</div>
            <div className="bg-primarySubcontent px-2 py-1 rounded-md">FontAwesome</div>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="grid grid-cols-[35%_65%]">
        {/* Left */}
        <div>
          <div className="text-primaryContent">Mar 2024 - Apr 2024</div>
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
            {/* <a href="">
              <FontAwesomeIcon
                icon={faYoutube}
                className="hover:scale-125 hover:text-primaryAccent transition-all"
              />
            </a> */}
          </div>
          <div className="text-primaryContent text-sm">
            · A simple and minimalist portfolio for developers built with React
            and TailwindCSS, designed to be clean and fast.
          </div>
          <div className="flex gap-2 text-primaryContent text-sm">
            <div className="bg-primarySubcontent px-2 py-1 rounded-md">React</div>
            <div className="bg-primarySubcontent px-2 py-1 rounded-md">Tailwind</div>
            <div className="bg-primarySubcontent px-2 py-1 rounded-md">FontAwesome</div>
          </div>
        </div>
      </div>

      {/* Project 3 */}
      <div className="grid grid-cols-[35%_65%]">
        {/* Left */}
        <div>
          <div className="text-primaryContent">Apr 2024 - May 2024</div>
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
            {/* <a href="">
              <FontAwesomeIcon
                icon={faYoutube}
                className="hover:scale-125 hover:text-primaryAccent transition-all"
              />
            </a> */}
          </div>
          <div className="text-primaryContent text-sm">
            · A simple and minimalist portfolio for developers built with React
            and TailwindCSS, designed to be clean and fast.
          </div>
          <div className="flex gap-2 text-primaryContent text-sm">
            <div className="bg-primarySubcontent px-2 py-1 rounded-md">React</div>
            <div className="bg-primarySubcontent px-2 py-1 rounded-md">Tailwind</div>
            <div className="bg-primarySubcontent px-2 py-1 rounded-md">FontAwesome</div>
          </div>
        </div>
      </div>

      {/* Project 4 */}
      <div className="grid grid-cols-[35%_65%]">
        {/* Left */}
        <div>
          <div className="text-primaryContent">Apr 2024 - May 2024</div>
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
            {/* <a href="">
              <FontAwesomeIcon
                icon={faYoutube}
                className="hover:scale-125 hover:text-primaryAccent transition-all"
              />
            </a> */}
          </div>
          <div className="text-primaryContent text-sm">
            · A simple and minimalist portfolio for developers built with React
            and TailwindCSS, designed to be clean and fast.
          </div>
          <div className="flex gap-2 text-primaryContent text-sm">
            <div className="bg-primarySubcontent px-2 py-1 rounded-md">React</div>
            <div className="bg-primarySubcontent px-2 py-1 rounded-md">Tailwind</div>
            <div className="bg-primarySubcontent px-2 py-1 rounded-md">FontAwesome</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Project;
