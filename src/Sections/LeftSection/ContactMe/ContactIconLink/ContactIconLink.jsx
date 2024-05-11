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
    <div className="flex gap-4 text-2xl m-2">
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
      <div className="hover:scale-150 hover:text-primaryTitle transition-all">
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
    </div>
  );
};

export default ContactIconLink;
