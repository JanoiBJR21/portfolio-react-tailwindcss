import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import img_workshop1 from "../../../assets/img_workshop1.png"

const Experience = () => {
  return (
    <div className="space-y-4">
      <div className="font-semibold">Experience</div>

      {/* test1 */}
      {/* <div className="grid grid-cols-[35%_65%]">
        <div className="text-primaryContent">
          <div>October 2021 - November 2023</div>
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

      {/* test2 */}
      <div className="grid grid-cols-[35%_65%]">
        {/* Left */}
        <div>
          <div>January 2024 - February 2024</div>
          <div>
            <img src={img_workshop1} alt="" />
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

export default Experience;
