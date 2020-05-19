import React from 'react';
import SocialMedia from './SocialMedia';

import './Header.css';

const Header = () => {

  return (
    <div>
        <nav className="navbar navbar-expand-lg" id="header1">
            <a className="navbar-brand" href="/" id="topBrand">BitLeigh Vu</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#center-text" aria-controls="center-text" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <div id="center-text">
                        <li className="nav-item">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" href="/resume">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" href="/contact">Contact</a>
                        </li>
                    </div>
                </ul>
            </div>
            <SocialMedia />
        </nav>
    </div>
  );
};

export default Header;