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
                            description={"Threads: Media & People | Major GPA: 3.76/4.0"}
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
                            job={"Technical Product Owner"}
                            company={"NCR"}
                            link={"https://www.ncr.com/"}
                            location={"Atlanta, GA"}
                            date={"Beginning July 2021"}
                        />
                        <WorkItem 
                            job={"Technical Project Manager Intern"}
                            company={"American Express"}
                            link={"https://www.americanexpress.com/"}
                            location={"Remote"}
                            date={"July 2020"}
                            description={"Utilized Agile and Scrum ceremonies with Jira to effectively support feature development. Completed cross-team collaboration to address blockers and plan roadmaps for product development."}
                        />
                        <WorkItem 
                            job={"Software Developer Intern"}
                            company={"American Express"}
                            link={"https://www.americanexpress.com/"}
                            location={"Phoenix, Arizona"}
                            date={"May 2019 - August 2019"}
                            description={"Implemented UI design for card replacement module deployed to an initial 30 million users. Upgraded back-end error handling service to encrypt and query database during technical down-time."}
                        />
                        <WorkItem 
                            job={"Technical Implementation Engineering Intern"}
                            company={"Landis+Gyr"}
                            link={"https://www.landisgyr.com/"}
                            location={"Alpharetta, Georgia"}
                            date={"January 2019 - April 2019"}
                            description={"Completed electrical meter configuration and initial database setup for over 300 electrical cooperatives"}
                        />
                    </div>
                </div>
                <div className="row section-marker">
                    <div className="col-sm-4 section-header">Technologies</div>
                    <div className="col-sm-8">
                        <ul id="lists-box">
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Jira</li>
                            <li>Agile</li>
                            <li>Scrum</li>
                            <li>Wireframes</li>
                            <li>Git</li>
                        </ul>
                    </div>
                </div>
                <div className="row section-marker">
                    <div className="col-sm-4 section-header">Certifications</div>
                    <div className="col-sm-8">
                        <ul id="lists-box">
                            <li>Scrum Foundation Professional</li>
                            <li>Question, Persuade, and Refer (Suicide Prevention Training)</li>
                            <li>Safe Space Certified (LGBTQIA Ally Training)</li>
                        </ul>
                    </div>
                </div>
                <div className="row section-marker">
                    <div className="col-sm-4 section-header">Projects</div>
                    <div className="col-sm-8">
                        <WorkItem 
                            job={"Creator & Software Developer"}
                            company={"Crazy Cash"}
                            location={"Atlanta, Georgia"}
                            date={"Quarantine 2020"}
                            description={"Designed and created a React Native application focused on educating children on financial literacy and  setting and saving towards goals."}
                        />
                        <WorkItem 
                            job={"Lead Front-End Engineer"}
                            company={"GT Student Center Programs Council"}
                            link={"https://studentcenter.gatech.edu/scpc"}
                            location={"Atlanta, Georgia"}
                            date={"April 2018 - Present"}

                            description={"Designed and implemented an event planning application including member management, event tracking, and scheduling for Georgia Tech’s largest student-led event planning organization. Completed user research and wireframes for design vision and user interaction testing. Used Agile and Scrum methodologies in 2-week sprints to lead an 8-person development team."}
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
                            job={"Member"}
                            company={"Georgia Institute of Technology Technology Fee Committee"}
                            location={"Atlanta, Georgia"}
                            date={"October 2019 - Present"}
                            description={"1 of 4 undergraduate students on the committee to advocate for over 3 million of technology fee allocations on behalf of the undergraduate student body."}
                        />
                        <WorkItem 
                            job={"Resident Advisor"}
                            company={"Georgia Institute of Technology"}
                            link={"https://www.gatech.edu/"}
                            location={"Atlanta, Georgia"}
                            date={"August 2018 - Present"}
                            description={"Maintain safety of 250+ residents as a first-responder to emergency situations. Coordinate and advise budgeting, marketing, and resource allocation for 50+ events yearly. Awarded 2018-2019 Community Builder of the Year based on number of engaging events and involvement within the residence hall."}
                        />
                        <WorkItem 
                            job={"Information Technology Project Lead"}
                            company={"GT Student Government Association"}
                            link={"https://sga.gatech.edu/"}
                            location={"Atlanta, Georgia"}
                            date={"May 2019 - May 2020"}
                            description={"Facilitate initiatives and roundtables on-campus to identify fall-throughs in information technology with student organizations. Led personal development events and socials throughout the year to engage team members."}
                        />
                        <WorkItem 
                            job={"General Member"}
                            company={"GT Student Center Programs Council"}
                            link={"https://sga.gatech.edu/"}
                            location={"Atlanta, Georgia"}
                            date={"September 2017 - Present"}
                            description={"Planned and led homecoming week activities including the homecoming concert. Volunteered and assisted in more than 60+ events campus-wide. Led recruitment initiatives on campus biannually and helped increase annual budget by $24,000."}
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