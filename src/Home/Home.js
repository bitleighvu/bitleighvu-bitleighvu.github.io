import React from 'react';

import './Home.css';

const Home = () => {

  return (  
    <div>  
        <img
          src={process.env.PUBLIC_URL + "/images/phone.jpg"}
          alt="Facebook Logo"
          id="large-images"
        ></img>
        <div id="name-header">
            BitLeigh Vu
        </div>
        <div id="headliner">
            4th Year Computer Science Student at Georgia Institute of Technology
        </div>
    </div>
  );
};

export default Home;