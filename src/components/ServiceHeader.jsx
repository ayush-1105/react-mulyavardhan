import React from 'react';
import { Link } from 'react-router-dom';

const ServiceHeader = ({ imgSrc, description, link }) => {
  return (
    <Link to={link} className="box-container flex-row marginTop marginLeft borderBlue" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="image-box">
        <img src={imgSrc} alt="Service" />
      </div>
      <div className="text-box">
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default ServiceHeader;
