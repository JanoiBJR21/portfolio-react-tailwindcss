import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Data_Header } from "../../../DataContents/DataContentsHeader";

const Header = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-3xl text-primaryTitle font-semibold">
        {Data_Header.name}
      </div>

      <div className="font-semibold">{Data_Header.title}</div>

      <div className="text-sm w-5/6 text-primaryContent">
        {Data_Header.caption}
      </div>

      <div className="mt-4">
        <a href={Data_Header.fileresume} target="_blank">
          <span className="bg-primaryTitle py-2 px-4 rounded-md">
            {Data_Header.btnview}
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
