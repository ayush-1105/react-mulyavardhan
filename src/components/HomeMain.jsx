import React from 'react';
import testImage from '../assests/image/testImage.jpg'

const HomeMain = () => {
  return (
    <section className="home colorChoose" id="home">
      <div className="home-content">
        <div className="box-container flex-row space-between">
          <div className="text-box text-box-main extraSpace">
            <p className="text-box-heading">
            Unlock and Maximize, value for Business Growth
            </p>
            <p className="text-box-description">Innovative Strategies</p>
            <button className="button">
              <a href="./pages/contact.html">
                <span className="icon">Ask for a Quote &nbsp;<i className="fa-solid fa-arrow-right"></i></span>
              </a>
            </button>
          </div>
          <div className="image-box image-box-main extraSpace">
            <img src={testImage} alt="Image1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMain;
