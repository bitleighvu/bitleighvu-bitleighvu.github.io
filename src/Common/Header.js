import React from 'react';
import SocialMedia from './SocialMedia';

import './Header.css';

const Header = () => {

  return (
    <div>
        <nav className="navbar navbar-expand-md navbar-light" id="navigate-bar">
            <a className="navbar-brand" href="/" id="pg-brand">BitLeigh Vu</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link-header-bar" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link-header-bar" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link-header-bar" href="/resume">Resume</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link-header-bar" href="/contact">Contact</a>
                    </li>
                </ul>
                <SocialMedia id="sm"/>
            </div>
        </nav>
    </div>
  );
};

export default Header;