import React from 'react';
import PropTypes from 'prop-types';
import '../css/blogCss.css'

const HeadlineSection = ({ headline, content }) => {
  return (
    <div className="headline-div">
      <p className="headline">{headline}</p>
      <br />
      <p className="headline-content">{content}</p>
    </div>
  );
};

HeadlineSection.propTypes = {
  headline: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default HeadlineSection;
