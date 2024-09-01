import React from 'react';
import PropTypes from 'prop-types';
import '../css/blogCss.css'

const ImageSection = ({ imageSrc, altText }) => {
  return (
    <div className="main">
      <img src={imageSrc} alt={altText} className="img-main" />
    </div>
  );
};

ImageSection.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default ImageSection;
