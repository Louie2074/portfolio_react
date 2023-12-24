import React from 'react';
import '../styles/Card.css'; // Make sure to import the CSS file

const Card = ({
  startDate,
  endDate,
  position,
  company,
  description,
  skills,
}) => {
  return (
    <div className="card">
      <div className="card-header">
        <span className="date-range">
          {startDate} — {endDate || 'PRESENT'}
        </span>
        <h2 className="title">
          {company}
        </h2>
        <div className="role">
          {position}
        </div>
      </div>
      <div className="card-body">
        <p>{description}</p>
      </div>
      <div className="tags">
        {skills.map((skill, index) => (
          <span key={index} className="tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
