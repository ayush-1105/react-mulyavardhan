import React from 'react';
import PropTypes from 'prop-types';
import '../css/serviceCss.css';

const ImageSection = ({ src, alt }) => {
    return (
        <div className="img-div">
            <img src={src} className="img-tag" alt={alt} />
        </div>
    );
};

ImageSection.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default ImageSection;
