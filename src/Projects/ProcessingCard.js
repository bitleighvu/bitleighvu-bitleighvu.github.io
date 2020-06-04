import React from 'react';

const ProcessingCard = ({ src, alt, title, link, text, date }) => {

  return (  
      <div className="card proc-card">
        <img className="card-img-top"
            src={src}
            alt={alt}
            />
        <div className="card-body">
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
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

export default ProcessingCard;