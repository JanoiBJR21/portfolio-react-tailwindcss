import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const ContactIconLink = () => {
  return (
    <div className="flex gap-4 text-2xl text-primaryContent">
      <div className="hover:scale-150 hover:text-primaryTitle transition-all">
        <a href="https://github.com/JanoiBJR21" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div className="hover:scale-150 hover:text-primaryTitle transition-all">
        <a href="https://www.facebook.com/JanoiBJR?locale=th_TH" target="_blank">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
      <div className="hover:scale-150 hover:text-primaryTitle transition-all">
        <a href="https://x.com/JanoiBJR21" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
      <div className="hover:scale-150 hover:text-primaryTitle transition-all">
        <a href="https://www.instagram.com/janoi_bjr/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <div className="hover:scale-150 hover:text-primaryTitle transition-all">
        <a href="https://www.linkedin.com/in/apichat-wongtala-5758942b6/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
};

export default ContactIconLink;
