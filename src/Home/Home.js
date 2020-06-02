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
          <div id="home-header">
            You belong. You matter.
          </div>
      </div>
  </div>
        
  );
};

export default Home;