import { faGithub} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import img_workshop1 from "../../../assets/img_workshop1.png";
import img_workshop2 from "../../../assets/img_workshop2.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import FormatteDate from "../../../Components/FormatteDate";
import Picture from "../../../Components/Picture";
import TitleLink from "../../../Components/TitleLink";
import IconLink from "../../../Components/IconLink";
import Description from "../../../Components/Description";
import Tech from "../../../Components/Tech";

const Experience = () => {
  const [isMouseEnter, setIsMouseEnter] = useState({});

  return (
    <div className="">
      <div className="font-semibold px-2">Experience</div>

      {/* Experience */}
      {/* <div className="grid grid-cols-[35%_65%]">
        <div className="text-primaryContent">
          <div>Oct 2021 - Nov 2023</div>
          <div>image</div>
        </div>
        <div className="grid gap-y-4">
          <div className="font-semibold">
            Administrative officer litigation work at Yukwiwat Law Company
            Limited
          </div>
          <div className="text-primaryContent">Meterial</div>
          <div className="text-sm flex flex-col gap-4">
            <div className="text-primaryContent">
              Oversaw emails for job notifications from Kiatnakin Phatra Bank
              (Public Company Limited) and coordinated with internal bank
              officers responsible for our company.
            </div>
            <div className="text-primaryContent">
              Handled data sent by the bank, reported it to the company's main
              report, and utilized the gathered information in subsequent steps
              of our company's workflow.
            </div>
            <div className="text-primaryContent">
              Prepared initial data for debt collection processes.
            </div>
            <div className="text-primaryContent">
              Sent payment demand letters based on information received from the
              contracting bank.
            </div>
            <div className="text-primaryContent">
              Entered data for daily reports, where our company's lawyers filed
              cases through the court's filing system or E-Filing system and
              engaged in legal proceedings in various formats.
            </div>
            <div className="text-primaryContent">
              Reported through Line groups for admin to manage company data,
              along with email and pcol.kkpfg.com system reports to the
              contracting bank.
            </div>
            <div className="text-primaryContent">
              Facilitated checking the number of received and completed jobs for
              performance evaluation against competitors and ranking job
              acceptance for the following month.
            </div>
            <div className="text-primaryContent">
              Coordinated with employees within and outside the company and
              performed tasks assigned by the supervisor.
            </div>
          </div>
          <div className="flex gap-4 text-primaryContent">
            <div>Microsoft Office</div>
            <div>Gmail</div>
          </div>
        </div>
      </div> */}

      {/* Experience1 */}
      <div
        className={`grid grid-cols-[35%_65%] rounded-md px-2 py-6 transition-all ${ isMouseEnter["Exp1"] ? "bg-stone-900" : "" }`}
        onMouseEnter={() => setIsMouseEnter({ Exp1: true })}
        onMouseLeave={() => setIsMouseEnter({ Exp1: false })}
      >
        {/* Left */}
        <div>
          <FormatteDate isHighLight={isMouseEnter["Exp1"]}>Oct 2021 - Nov 2023</FormatteDate>
          <Picture 
            picture={img_workshop1} 
            title="Administrative officer litigation work at Yukwiwat Law Company Limited"
          />
        </div>

        {/* Right */}
        <div className="grid gap-y-4">
          <TitleLink 
            isHighLight={isMouseEnter["Exp1"]} 
            title="Administrative officer litigation work at Yukwiwat Law Company Limited" 
            link="https://portfolio-website-responsive-phi.vercel.app/"
          />
          <div className="text-xl flex gap-2 text-primaryContent">
            <IconLink 
              icon={faGithub} 
              link="https://github.com/JanoiBJR21/portfolio-react-tailwindcss"/>
          </div>
            <Description 
              description="· A simple and minimalist portfolio for developers built with React  and TailwindCSS, designed to be clean and fast."
            />
            <Tech 
              isHighLight={isMouseEnter["Exp1"]} 
              dataTech={["React", "Tailwind", "FontAwesome"]}
            />
        </div>
      </div>

      {/* Experience2 */}
      <div
        className={`grid grid-cols-[35%_65%] rounded-md px-2 py-6 transition-all ${
          isMouseEnter["Exp2"] ? "bg-stone-900" : ""
        }`}
        onMouseEnter={() => setIsMouseEnter({ Exp2: true })}
        onMouseLeave={() => setIsMouseEnter({ Exp2: false })}
      >
        {/* Left */}
        <div>
          <div>
            <span
              className={`text-primaryContent text-sm ${
                isMouseEnter["Exp2"] ? "text-primaryHeader" : ""
              }`}
            >
              Oct 2021 - Nov 2023
            </span>
          </div>
          <div>
            <img
              src={img_workshop2}
              className="w-11/12 rounded-md border-2 border-primaryContent"
            />
          </div>
        </div>

        {/* Right */}
        <div className="grid gap-y-4">
          <div
            className={`text-primaryBase ${
              isMouseEnter["Exp2"] ? "text-primaryTitle" : ""
            }`}
          >
            Porject Shopping Cart API
            <FontAwesomeIcon
              icon={faArrowRight}
              className={`text-xs -rotate-45 duration-500 ease-out ${
                isMouseEnter["Exp2"] ? "translate-x-1 -translate-y-1" : ""
              }`}
            />
          </div>
          <div className="text-primaryContent text-xl flex gap-4">
            <a
              href="https://github.com/JanoiDev/Project-React-Shopping-App-API"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="hover:scale-125 hover:text-primaryAccent transition-all"
              />
            </a>
          </div>
          <div className="text-primaryContent text-sm font-semibold">
            · A simple and minimalist portfolio for developers built with React
            and TailwindCSS, designed to be clean and fast.
          </div>
          <div>
            <div className="flex gap-2 text-primarySubcontent text-sm font-semibold">
              <div
                className={`bg-neutral-800 px-2 py-1 rounded-md ${
                  isMouseEnter["Exp2"] ? "text-primaryAccent" : ""
                }`}
              >
                React
              </div>
              <div
                className={`bg-neutral-800 px-2 py-1 rounded-md ${
                  isMouseEnter["Exp2"] ? "text-primaryAccent" : ""
                }`}
              >
                Tailwind
              </div>
              <div
                className={`bg-neutral-800 px-2 py-1 rounded-md ${
                  isMouseEnter["Exp2"] ? "text-primaryAccent" : ""
                }`}
              >
                FontAwesome
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Experience;
