import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function SocialMediaLink({ href, icon }) {
  return (
    <li className="nav-item">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={icon} size="2x" color="lightgray" />
      </a>
    </li>
  );
}

export default SocialMediaLink;
