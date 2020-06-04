import React from 'react';

import WorkItem from './Bullets/WorkItem';
import EducationItem from './Bullets/EducationItem';
import './Resume.css';

const Resume = () => {

  return (  
    <div className="entire-pg">
        <div id="wrapper">
            <div id="resume-top-bar">
                <div id="header-text-box">
                    <div className="text-header">
                        Resume
                    </div>
                    <a href="/files/BitLeighVuResume.pdf" target="_blank" download>
                        <button type="button" className="btn btn-light" id="download-button">Download Resume →</button>
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
                            description={"Implemented new design for a card replacement module deployed to an initial ~30 million users. Upgraded and implemented feature for back-end error handling service for business card holders to re-access debts and persistently query database on error."}
                        />
                        <WorkItem 
                            job={"Technical Implementation Engineering Intern"}
                            company={"Landis+Gyr"}
                            link={"https://www.landisgyr.com/"}
                            location={"Alpharetta, Georgia"}
                            date={"January 2019 - April 2019"}
                            description={"Install and update electrical meter configuration and initial database setup for over 300 electrical cooperatives in North America"}
                        />
                        <WorkItem 
                            job={"Resident Advisor"}
                            company={"Georgia Institute of Technology"}
                            link={"https://www.gatech.edu/"}
                            location={"Atlanta, Georgia"}
                            date={"August 2018 - Present"}
                            description={"Maintain safety of 250+ residents as a first-responder to emergency situations. Coordinate and advise budgeting, marketing, and resource allocation for 50+ events yearly. Awarded 2018-2019 Community Builder of the Year based on number of engaging events and involvement within the residence hall."}
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
                            description={"Designed and implemented a web application to manage student-led event planning organization for Georgia Tech’s campus. Completed user research and wireframes for design vision and user interaction testing. Used Agile and SCRUM methodologies in 2-week sprints to lead a small development team."}
                        />
                        <WorkItem 
                            job={"Software Developer"}
                            company={"Centsible"}
                            location={"Atlanta, Georgia"}
                            date={"August 2018 - December 2018"}
                            description={"An internal resource planning Android Application to efficiently track and categorize donations to non-profit organizations and utilize distribution metrics to further optimize services."}
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
                            description={"Facilitate initiatives and roundtables on-campus to identify fall-throughs in information technology with student organizations. Led bonding events and socials throughout the year to engage team members."}
                        />
                        <WorkItem 
                            job={"General Member"}
                            company={"GT Student Center Programs Council"}
                            link={"https://sga.gatech.edu/"}
                            location={"Atlanta, Georgia"}
                            date={"September 2017 - Present"}
                            description={"Planned and led homecoming week activities including the homecoming concert. Volunteered and assisted in more than 60+ events campus-wide. Led recruitment initiatives on campus biannually and helped increase annual budget by ~$24,000."}
                        />
                        <WorkItem 
                            job={"Volunteer"}
                            company={"GT Believe Our Purpose, Share Our Plan"}
                            link={"https://bopsop.gtorg.gatech.edu/"}
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
                            <li>2019 Georgia Tech Department of Housing Community Builder Award</li>
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