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
                        src={process.env.PUBLIC_URL + "/images/aboutPic2.JPG"}
                        alt="BitLeigh's Headshot"
                        id="center-pic"
                    ></img>
                    <p>
                        BitLeigh Vu currently resides in Atlanta, Georgia while completing her Bachelor’s Degree Program in Computer Science at Georgia Institute of Technology graduating in Spring 2021. During her time at Tech, she has been involved in many areas of campus including Student Government Association as an Information Technology Lead, Resident Advisor for first-year and upperclassmen students, Volunteer for Believe Our Purpose, Share Our Plan, and Lead Front-End Engineer for Student Center Programs Council.
                    </p>
                    <p>
                        In her spare time, she enjoys testing new recipes in the kitchen, playing Stardew Valley, and (sometimes) working out. She loves her 13-year-old Miniature Australian Shepherd, copious amounts of cold brew with (a large) splash of hazelnut creamer, and homemade breads.</p>
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
                        Computer science and programming to me are no longer that scene from the Matrix with a black screen and neon binary numbers floating about. It’s a means to analyze and visualize data, share content, fly space shuttles, and so much more we have yet to see and I can’t wait.
                    </p>
                </div>
            </div>
            <div id="intersection-box">
                <div id="intersection-header">Intersection of People & Programming</div>
                <div id="intersection-text">
                    <p>
                        Before I took my first programing course, everything that was remotely related to programming was daunting as I have never seen ‘underneath the hood’ before. Even after completing my initial programming course and changing majors, programming didn’t come easy to me and some concepts left me wondering if this really was the right path for me. I found the best way I could truly learn content was to relay information to someone else and teach them the concepts the best way I knew how. 
                    </p>
                    <p>
                        The software development internships I have had provided me with a foundation of knowledge and skills for the workforce, but working on these technologies I found myself asking questions on features and how they were to improve user interactions or workflows. I found myself looking beyond solely software development to see if there was a position I could do more than solely code, but be in the technical conversation for users and researching their needs for implementation. This user-centric mindset and effective communication has allowed me to venture into program/project management to deliver business outcomes for users.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;