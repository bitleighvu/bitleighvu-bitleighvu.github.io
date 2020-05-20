import React from 'react';

import './Home.css';

const Home = () => {

  return (  
    <div id="home-pg"> 
        <div id="home-wrapper">
          <img
            src={process.env.PUBLIC_URL + "/images/phone.jpg"}
            alt="Home"
            id="large-images"
          ></img>
          <div id="name-header">
              BitLeigh Vu
          </div>
          <div id="headliner">
              Tech. Homemade Bread. Dogs.
          </div>
        </div>
    </div>
  );
};

export default Home;