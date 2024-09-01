import React from 'react';
import PropTypes from 'prop-types';
import '../css/serviceCss.css';

const ServiceComponent = ({ imageSrc, mainPara, fare, adContent, keyFeatures, heading, subContents, contentList }) => {
  return (
    <div className="service-container">
      <div className="left-column">
        <div className="img-div">
          <img src={imageSrc} className="img-tag" alt="Service" />
        </div>
      </div>
      <div className="right-column">
        <div className="ad-div">
          <p className="main-para">{mainPara}</p><br /><br />
          <p className="fare">{fare}</p>
          <p className="ad-content">{adContent}</p><br /><br />
          {keyFeatures.map((feature, index) => (
            <p className="key-features" key={index}>{feature}</p>
          ))}<br />
          <div className="button-div">
            <button className="button-tag">
              <a className="link" href="./pages/contact.html">ASK FOR A QUOTE <span className="icon">&nbsp;<i className="fa-solid fa-arrow-right"></i></span></a>
            </button>
          </div>
        </div>
        <div className="content-box">
          <p className="heading">{heading}</p><br /><br />
          {subContents.map((subContent, index) => (
            <React.Fragment key={index}>
              <p className="sub-headings">{subContent.subHeading}</p><br /><br />
              <p className="sub-content">{subContent.content}</p><br /><br />
            </React.Fragment>
          ))}
          <p className="sub-content">Our Digital Transformation Services encompass:</p><br /><br />
          <ul className="content-list">
            {contentList.map((item, index) => (
              <li key={index}>
                <p className="sub-headings">{item.title}</p>
                <p className="sub-content">{item.description}</p><br />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

ServiceComponent.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  mainPara: PropTypes.string.isRequired,
  fare: PropTypes.string.isRequired,
  adContent: PropTypes.string.isRequired,
  keyFeatures: PropTypes.arrayOf(PropTypes.string).isRequired,
  heading: PropTypes.string.isRequired,
  subContents: PropTypes.arrayOf(PropTypes.shape({
    subHeading: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  contentList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

export default ServiceComponent;
