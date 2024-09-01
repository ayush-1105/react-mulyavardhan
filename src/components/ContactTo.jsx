import React from 'react';
import { Link } from 'react-router-dom';
import testImage from '../assests/image/testImage.jpg'; 
import '../css/style.css';

const ContactTo = () => {
  return (
    <div>
      <section className="home colorChoose" id="home">
        <div className="home-content">
          <div className="box-container flex-row space-between">
            <div className="text-box extraSpace">
              <p>
                Mulyavardhan provides tailored technology solutions to drive business growth. From data acquisition and database management to AI, machine vision, AR, and energy monitoring, we help you implement the right tech to enhance efficiency and achieve your goals.
              </p>
              <button className="button">
                <Link to="/contact">
                  <span className="icon">
                    Ask for a Quote &nbsp;
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
              </button>
            </div>
            <div className="image-box extraSpace">
              <img src={testImage} alt="Image1" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactTo