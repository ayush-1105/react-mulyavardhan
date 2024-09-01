import React from 'react';
import '../css/aboutCss.css'
import '../css/style.css'

const AddressCard = ({ country, address }) => {
  return (
    <div className="locations-box">
      <i className="fa-solid fa-globe"></i><br />
      <span className="location-country">{country}</span><br />
      {address.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}<br />
        </React.Fragment>
      ))}
    </div>
  );
};

export default AddressCard;
