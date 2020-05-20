import React from 'react';

import './SocialMedia.css';

const SocialMedia = () => {

  return (
    <div id="socialmedia-box">
        <a
            href="https://www.facebook.com/thebitleighvu"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media"
        >
            <div>
                <img
                src={process.env.PUBLIC_URL + "/images/facebookLogoWhite.png"}
                alt="Facebook Logo"
                className="sm-images"
                ></img>
            </div>
        </a>
        <a
            href="https://github.com/bitleighvu"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media"
        >
            <div>
                <img
                src={process.env.PUBLIC_URL + "/images/githubLogoWhite.png"}
                alt="Github Logo"
                className="sm-images"
                ></img>
            </div>
        </a>
        <a
            href="https://www.linkedin.com/in/bitleighvu/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media"
        >
            <div>
                <img
                src={process.env.PUBLIC_URL + "/images/linkedinLogoWhite.png"}
                alt="Linkedin Logo"
                className="sm-images"
                ></img>
            </div>
        </a>
    </div>   
  );
};

export default SocialMedia;