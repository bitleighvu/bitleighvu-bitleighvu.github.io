import React from 'react';

import SocialMedia from './SocialMedia';

import './Footer.css';

const Footer = () => {

  return (
    <div id="footer">
        <div className="row justify-content-around">
            <div className="col-4">
                <div id="brand">BitLeigh Vu</div>
                <SocialMedia />
            </div>
            <div className="col-5">
                <div className="row section-header-box">
                    <div className="col-4 text-col">
                        <a href="/" className="nav-link underline">Home</a>
                        <a href="/about" className="nav-link underline">About</a>
                        <a href="/projects" className="nav-link underline">Projects</a>
                    </div>
                    <div class="col-5 text-col">
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