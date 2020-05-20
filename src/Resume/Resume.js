import React from 'react';
import { Link } from 'react-router-dom';

import WorkItem from './Bullets/WorkItem';
import EducationItem from './Bullets/EducationItem';
import './Resume.css';

const Resume = () => {

  return (  
    <div className="entire-pg">
        <div id="wrapper">
            <div id="resume-top-bar">
                <img
                    src={process.env.PUBLIC_URL + "/images/resumeHeader.jpg"}
                    alt="Facebook Logo"
                    id="resume-image"
                ></img>
                <div id="header-text-box">
                    <div id="resume-header">
                        Resume
                    </div>
                    <a href="/files/BitLeighVuResume.pdf" target="_blank" download>
                        <button type="button" className="btn btn-light" id="download-button">Download Resume</button>
                    </a>
                </div>
            </div>
            <div id="full-resume">
                <div className="row section-marker">
                    <div className="col-sm-4 section-header">Education</div>
                    <div className="col-sm-8">
                        <EducationItem 
                            school={"Georgia Institute of Technology"}
                            degree={"Candidate for Bachelor of Science in Computer Science"}
                            location={"Atlanta, Georgia"}
                            date={"June 2017 - Present"}
                            description={"Threads: Media & People | Concentration: Information Technology Management | Major GPA: 3.75/4.0"}
                        />
                        <EducationItem 
                            school={"Georgia College & State University"}
                            degree={"Full-time Dual Enrollment"}
                            location={"Milledgeville, Georgia"}
                            date={"August 2015 - May 2017"}
                            description={"GPA 3.65/4.00"}
                        />
                    </div>
                </div>
                <div className="row section-marker">
                    <div className="col-sm-4 section-header">Work Experience</div>
                    <div className="col-sm-8">
                        <WorkItem 
                            job={"Technical Program Manager Intern"}
                            company={"American Express"}
                            link={"https://www.americanexpress.com/"}
                            location={"Remote"}
                            date={"Beginning July 2020"}
                        />
                        <WorkItem 
                            job={"Software Developer Intern"}
                            company={"American Express"}
                            link={"https://www.americanexpress.com/"}
                            location={"Phoenix, Arizona"}
                            date={"May 2019 - August 2019"}
                            description={"Implement new Card Replacement Module for all consumers & Upgraded Back-End Error Handling to increase user experience"}
                        />
                        <WorkItem 
                            job={"Resident Advisor"}
                            company={"Georgia Institute of Technology"}
                            link={"https://www.gatech.edu/"}
                            location={"Atlanta, Georgia"}
                            date={"August 2018 - Present"}
                            description={"Provide security and build relationships with first-year students to provide support in residence halls"}
                        />
                        <WorkItem 
                            job={"Technical Implementation Engineering Intern"}
                            company={"Landis+Gyr"}
                            link={"https://www.landisgyr.com/"}
                            location={"Alpharetta, Georgia"}
                            date={"January 2019 - April 2019"}
                            description={"Provide meter configuration to align with customers’ proposals and updates to proper databases    "}
                        />
                    </div>
                </div>
                <div className="row section-marker">
                    <div className="col-sm-4 section-header">Technologies</div>
                    <div className="col-sm-8">
                        <ul id="lists-box">
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>Python</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>React</li>
                            <li>Redux</li>
                        </ul>
                    </div>
                </div>
                <div className="row section-marker">
                    <div className="col-sm-4 section-header">Certifications</div>
                    <div className="col-sm-8">
                        <ul id="lists-box">
                            <li>Question, Persuade, and Refer (Suicide Prevention Training)</li>
                            <li>Safe Space Certified (LGBTQIA Ally Training)</li>
                        </ul>
                    </div>
                </div>
                <div className="row section-marker">
                    <div className="col-sm-4 section-header">Projects</div>
                    <div className="col-sm-8">
                        <WorkItem 
                            job={"Front-End Web Developer Lead"}
                            company={"GT Student Center Programs Council"}
                            link={"https://studentcenter.gatech.edu/scpc"}
                            location={"Atlanta, Georgia"}
                            date={"April 2018 - Present"}
                            description={"Utilize a React framework and MongoDB database to create a site to manage Georgia Tech’s student-led event planning organization"}
                        />
                        <WorkItem 
                            job={"Software Developer"}
                            company={"Class Project"}
                            location={"Atlanta, Georgia"}
                            date={"August 2018 - December 2018"}
                            description={"An internal resource planning Android Application to efficiently track and categorize donations to non-profit organizations. Track donations and utilize distribution metrics to further optimize services"}
                        />
                    </div>
                </div>
                <div className="row section-marker">
                    <div className="col-sm-4 section-header">Leadership</div>
                    <div className="col-sm-8">
                        <WorkItem 
                            job={"Information Technology Project Lead"}
                            company={"GT Student Government Association"}
                            link={"https://sga.gatech.edu/"}
                            location={"Atlanta, Georgia"}
                            date={"May 2019 - May 2020"}
                            description={"Facilitate communication with organizations across campus to ensure proper IT standards and security"}
                        />
                        <WorkItem 
                            job={"General Member"}
                            company={"GT Student Center Programs Council"}
                            link={"https://sga.gatech.edu/"}
                            location={"Atlanta, Georgia"}
                            date={"September 2017 - Present"}
                            description={"Responsible for leading homecoming week activities & planning events campus-wide; Helped increase budget by $24,000"}
                        />
                        <WorkItem 
                            job={"Volunteer"}
                            company={"GT Believe Our Purpose, Share Our Plan"}
                            link={"http://bopsop.gtorg.gatech.edu/"}
                            location={"Atlanta, Georgia"}
                            date={"August 2017 - May 2018"}
                            description={"Volunteered weekly at a local elementary to tutor and facilitate computer science and writing workshops"}
                        />
                    </div>
                </div>
                <div className="row section-marker">
                    <div className="col-sm-4 section-header">Honors & Awards</div>
                    <div className="col-sm-8">
                        <ul id="lists-box">
                            <li>2017 President’s Volunteer Service Award</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Resume;