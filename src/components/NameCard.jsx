import React from 'react';
import '../css/aboutCss.css'
import '../css/style.css'

const NameCard = ({ imgSrc, name }) => {
  return (
    <div className="id-box">
      <span className="icon-bar-img">
        <img src={imgSrc} alt={name} />
      </span>
      <span className="people-name">{name}</span>
    </div>
  );
};

export default NameCard;
