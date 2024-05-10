// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import fileresume from "./assets/Resume.pdf";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="mt-14 max-w-7xl mx-auto grid grid-cols-[40%_60%] p-2">
      {/* Left */}
      <div>
        <div className="sticky top-14 grid grid-rows-[35%_40%_5%_20%] h-[72vh]">
          <div className="flex flex-col gap-2">
            <div className="text-3xl text-primaryTitle font-semibold">
              Apichat Wongtala
            </div>

            <div className="font-semibold">
              Junoi Front-end Developer *between jobs
            </div>

            <div className="text-sm w-5/6 text-primaryContent">
              From concept to reality, bridging the gap with code, transforming
              ideas into tangible digital solutions.
            </div>

            <div className="mt-4">
              <a href={fileresume} target="_blank">
                <span className="bg-primaryTitle py-2 px-4 rounded-md">
                  View Resume
                  <span className="inline-block rotate-90 ml-2 text-sm">
                    <FontAwesomeIcon
                      icon={faArrowDown}
                      className="animate-bounce"
                    />
                  </span>
                </span>
              </a>
            </div>
          </div>

          <div>Nav</div>

          <div className="flex gap-4 text-2xl">
            {" "}
            Contact
            <div className="hover:scale-150 hover:text-primaryTitle transition-all">
              <FontAwesomeIcon icon={faGithub} />
            </div>
            <div className="hover:scale-150 hover:text-primaryTitle transition-all">
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div className="hover:scale-150 hover:text-primaryTitle transition-all">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className="hover:scale-150 hover:text-primaryTitle transition-all">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="hover:scale-150 hover:text-primaryTitle transition-all">
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </div>

          <div>
            <form className="flex flex-col gap-2">
              <label className="text-sm">Your Name :</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="text-xs bo rounded-md pl-2 py-2 bg-primarySubcontent"
              />
              <label className="text-sm">Your Email :</label>
              <input
                type="email"
                placeholder="Ente your email"
                name="email"
                className="text-xs rounded-md pl-2 py-2 bg-primarySubcontent"
              ></input>
              <label className="text-sm">Write your message here :</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Enter your message"
                className="text-xs rounded-md pl-2 bg-primarySubcontent"
              ></textarea>
              <button
                type="submit"
                class="contact-submit"
                className="bg-primaryTitle rounded-md py-2 "
              >
                Submit now
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Right */}
      <div>
        <div>About</div>
        <div className="mb-96">Experience</div>
        <div className="mb-96">Project</div>
        <div className="mb-96">Project</div>
        <div className="mb-96">Project</div>
        <div className="mb-96">Project</div>
        <div className="mb-96">Project</div>
      </div>
    </div>
  );
}

export default App;
