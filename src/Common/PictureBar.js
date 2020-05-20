import React from 'react';

import './PictureBar.css';

const PictureBar = ({ path, alt, text}) => {

  return (  
    <div id="picture-top-bar">
        <img
            src={process.env.PUBLIC_URL + path}
            alt={alt}
            id="header-image"
        ></img>
        <div id="header-text-box">
            <div id="top-header">
                {text}
            </div>
        </div>
    </div>       
  );
};

export default PictureBar;