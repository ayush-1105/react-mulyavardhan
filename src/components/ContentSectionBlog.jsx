import React from 'react';
import PropTypes from 'prop-types';

const ContentSection = ({ title, subheadings }) => {
  return (
    <div className="content">
      <p className="headline">{title}</p>
      <br />
      {subheadings.map((sub, index) => (
        <div key={index}>
          <p className="sub-head">{sub.subhead}</p>
          <br />
          <p className="main-content">{sub.content}</p>
          <br />
        </div>
      ))}
    </div>
  );
};

ContentSection.propTypes = {
  title: PropTypes.string.isRequired,
  subheadings: PropTypes.arrayOf(
    PropTypes.shape({
      subhead: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContentSection;
