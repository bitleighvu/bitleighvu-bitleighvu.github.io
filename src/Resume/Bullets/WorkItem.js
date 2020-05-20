import React from 'react';

import './WorkItem.css';

const WorkItem = ({ job, company, link, location, date, description }) => {

  return (  
    <div className="work-item">
        <div className="work-job text-uppercase">{job}</div>
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="work-company"
        >{company}
        </a>
        <span className="work-location">{", " + location}</span>
        <span className="work-date">{", " + date}</span>
        <div className="work-description">{description} </div>
    </div>
  );
};

export default WorkItem;