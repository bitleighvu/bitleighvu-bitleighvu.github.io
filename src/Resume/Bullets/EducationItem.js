import React from 'react';

import './EducationItem.css';

const EducationItem = ({ school, degree, location, date, description }) => {

  return (  
    <div className="edu-item">
        <div className="edu-school text-uppercase">{school}</div>
        <span className="edu-degree">{degree + ", "}</span>
        <span className="edu-location">{location}</span>
        <span className="edu-date">{", " + date}</span>
        <div className="buledulet-description">{description} </div>
    </div>
  );
};

export default EducationItem;