import React from 'react';

import SocialMediaWhite from './SocialMediaWhite';

import './Footer.css';

const Footer = () => {

  return (
    <div id="footer">
        <div className="row justify-content-around">
            <div className="col-4 pad-l">
                <div id="brand">
                    <a href="/" id="name-footer">
                        BitLeigh Vu
                    </a>
                    <div id="pronouns">(she/her/hers)</div>
                </div>
                <div id="footer-text"></div>
                <SocialMediaWhite />
            </div>
            <div className="col-7">
                <div className="row section-header-box">
                    <div className="col-4 text-col remove-pad">
                        <a href="/about" className="nav-link underline">About</a>
                        <a href="/projects" className="nav-link underline">Projects</a>
                    </div>
                    <div className="col-5 text-col remove-pad">
                        <a href="/resume" className="nav-link underline">Resume</a>
                        <a href="/contact" className="nav-link underline">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;