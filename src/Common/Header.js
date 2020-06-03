import React from 'react';
import SocialMedia from './SocialMedia';

import './Header.css';

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {addClass: false}
    }

    toggle() {
      this.setState({addClass: !this.state.addClass});
    }

    render() {
      let bodyClass = ['body'];
      if (this.state.addClass) {
        bodyClass.push('stop-scroll');
      }

      return(
        <div>
        <nav className="navbar navbar-expand-md navbar-light" id="navigate-bar">
            <a className="navbar-brand" href="/" id="pg-brand">BitLeigh Vu</a>
            <div className={bodyClass.join(' ')} onClick={this.toggle.bind(this)} >
                <button className="navbar-toggler collapsed border-0" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    <div className="close-icon py-1">✕</div>
                </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link-header-bar" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link-header-bar" href="/projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link-header-bar" href="/resume">Resume</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link-header-bar" href="/contact">Contact</a>
                    </li>
                </ul>
                <SocialMedia className="sm-bar"/>
            </div>
        </nav>
    </div>
      );
    }
  }


export default Header;