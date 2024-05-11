import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactIconLink = () => {
  return (
    <div className="flex gap-4 text-2xl">
      <div className="hover:scale-150 hover:text-primaryTitle transition-all">
        <a href="">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div className="hover:scale-150 hover:text-primaryTitle transition-all">
        <a href="">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
      <div className="hover:scale-150 hover:text-primaryTitle transition-all">
        <a href="">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
      <div className="hover:scale-150 hover:text-primaryTitle transition-all">
        <a href="">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <div className="hover:scale-150 hover:text-primaryTitle transition-all">
        <a href="">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <div className="hover:scale-150 hover:text-primaryTitle transition-all">
        <a href="">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </div>
  );
};

export default ContactIconLink;
