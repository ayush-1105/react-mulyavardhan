// src/components/ContentSection.jsx
import React from 'react';
import PropTypes from 'prop-types';
import '../css/serviceCss.css';

const ContentSection = ({
    heading = "",
    subContent = "",
    subHeadings = [],
    keyFeatures = [],
    mainContent = "",
    fare = "",
    mainPara = "",
    buttonLink = "",
    buttonText = "",
    additionalContent = null,
    additionalContentStyle = {}
}) => {
    return (
        <div className="content-div">
            <div className="ad-div">
                <p className="main-para">{mainPara}</p><br /><br />
                {fare && <p className="fare">{fare}</p>}
                <p className="ad-content">{mainContent}</p><br /><br />
                {keyFeatures.length > 0 && keyFeatures.map((feature, index) => (
                    <React.Fragment key={index}>
                        <p className="key-features">{feature}</p><br />
                    </React.Fragment>
                ))}
                {buttonLink && buttonText && (
                    <div className="button-div">
                        <button className="button-tag">
                            <a className="link" href={buttonLink}>{buttonText}
                                <span className="icon">&nbsp;<i className="fa-solid fa-arrow-right"></i></span>
                            </a>
                        </button>
                    </div>
                )}
            </div>
            <div className="content-box">
                <p className="heading">{heading}</p><br /><br />
                <p className="sub-content">{subContent}</p><br /><br />
                {subHeadings.length > 0 && subHeadings.map((subHeading, index) => (
                    <React.Fragment key={index}>
                        <p className="sub-headings">{subHeading.title}</p><br /><br />
                        <p className="sub-content">{subHeading.content}</p><br /><br />
                    </React.Fragment>
                ))}
                {additionalContent && (
                    <div style={additionalContentStyle} className="additional-content">
                        {additionalContent}
                    </div>
                )}
            </div>
        </div>
    );
};

ContentSection.propTypes = {
    heading: PropTypes.string,
    subContent: PropTypes.string,
    subHeadings: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            content: PropTypes.string,
        })
    ),
    keyFeatures: PropTypes.arrayOf(PropTypes.string),
    mainContent: PropTypes.string,
    fare: PropTypes.string,
    mainPara: PropTypes.string,
    buttonLink: PropTypes.string,
    buttonText: PropTypes.string,
    additionalContent: PropTypes.node,
    additionalContentStyle: PropTypes.object,
};

export default ContentSection;
