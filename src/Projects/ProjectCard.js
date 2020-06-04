import React from 'react';

const ProjectCard = ({ src, alt, title, link, text, date }) => {

  return (  
    <div className="card">
        <img className="card-img-top"
            src={src}
            alt={alt}
            />
        <div className="card-body">
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-title"
            >
              <h5 className="card-title">{title}</h5>
            </a>
            <p className="card-text">{text}</p>
        </div>
        <div className="card-footer">
            <small className="text-muted">{date}</small>
        </div>
    </div>
  );
};

export default ProjectCard;