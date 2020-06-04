import React from 'react';

import './About.css';

const About = () => {

  return (  
    <div className="entire-pg">
        <div> 
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
                        BitLeigh Vu currently resides in Atlanta, Georgia while completing her Bachelor’s Degree Program in Computer Science at Georgia Institute of Technology graduating in Spring 2021. During her time at Tech, she has been involved in many areas of campus including Student Government Association as an Information Technology Lead, Resident Advisor for first-year and upperclassmen students, Volunteer for Believe Our Purpose, Share Our Plan, and Lead Front-End Web Developer for Student Center Programs Council.
                    </p>
                    <p>
                        In her spare time, she enjoys testing new recipes in the kitchen, playing Stardew Valley, and (sometimes) working out. She loves her 13-year-old Miniature Australian Shepherd, copious amounts of cold brew with (a large) splash of hazelnut creamer, and homemade bread.</p>
                </div>
                
            </div>
            <div id="question-box">
                <div id="question-header">Why I Chose Computer Science</div>
                <div id="question-text">
                    <p>
                        Majoring in computer science was something I never saw myself in a million years doing, but I’m so glad I’m doing it now. Prior to coming to Tech, I was dual-enrolled at a local college completing coursework to apply to pharmacy school and had no prior experience with programming. I went to finish coursework at Tech and had to take at least one programming course my first-year and that truly was the very beginning of it all. 
                    </p>
                    <p>
                        As I was volunteering at a local elementary school at this time, I asked if I could teach Scratch to students as a means to dip their toes into the world of programming! These interactions drove me to change trajectory to where I am today.
                    </p>
                    <p>
                        Computer science and programming to me is no longer that scene from the Matrix with a black screen and neon binary numbers floating about. It’s a means to analyze and visualize data, share content, fly space ships, and so much more. 
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;