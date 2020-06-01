import React from 'react';

import './About.css';

const About = () => {

  return (  
    <div className="entire-pg">
        <div id="about-box">
            <div id="about-top-bar">
                <div id="header-text-box">
                    <div id="about-header">
                        About
                    </div>
                </div>
            </div>
            <div id="about-box">
                <img
                    src={process.env.PUBLIC_URL + "/images/aboutPic2.jpg"}
                    alt="BitLeigh's Headshot"
                    id="center-pic"
                ></img>
                <p>
                    BitLeigh Vu is from Milledgeville, Georgia and currently resides in Atlanta, Georgia. Currently a full-time student, BitLeigh is completing her Bachelor’s Degree Program in Computer Science at Georgia Institute of Technology. During her time at Tech, she has been involved in many areas of campus including Student Government Association as a Information Technology Lead, Resident Advisor for first-year and upperclassmen students, Volunteer for Believe Our Purpose, Share Our Plan, and Lead Front-End Web Developer for Student Center Programs Council.
                </p>
                <p>
                    She has interned at Landis+Gyr as a Technical Implementation Engineer and American Express as a Front-End Software Developer & Technical Program Manager.
                </p>
                <p>
                    In her spare time, she enjoys testing new recipes in the kitchen, playing Stardew Valley, and (sometimes) working out. She loves her 13-year-old Miniature Australian Shepherd, copious amounts of cold brew with (a large) splash of hazelnut creamer, and homemade bread.</p>
            </div>
        </div>
    </div>
  );
};

export default About;