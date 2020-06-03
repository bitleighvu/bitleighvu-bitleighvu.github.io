import React from 'react';

import './Home.css';

const Home = () => {

  return (  
    <div id="home-pg"> 
        <div id="home-wrapper">
          <img
            src={process.env.PUBLIC_URL + "/images/colorway.jpg"}
            alt="Home"
            id="large-images"
          ></img>
          <div id="quote">
            <div id="home-header">
              “The only real mistake is the one from which we learn nothing.”
            </div>
            <div id="author"> 
              - Henry Ford
            </div>
          </div>
      </div>
  </div>
        
  );
};

export default Home;