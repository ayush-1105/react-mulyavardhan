import React from 'react';
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../css/style.css'; 

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="flex-column">
        <div className="social">
          <div className="flex-row">
            <div className="flex-column">
              <div className="text-name">
                <p>Mulyavardhan Consulting LLP</p>
              </div>
            </div>

            <div className="flex-column">
              <div className="heading-footer">Company</div>
              <div className="footer-tabs">
                <ul className="footer-tab-list">
                  <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
                  <li><Link to="/about" onClick={scrollToTop}>About</Link></li>
                  <li><Link to="/servicesMain" onClick={scrollToTop}>Services</Link></li>
                  <li><Link to="/blog" onClick={scrollToTop}>Blog</Link></li>
                  <li><Link to="/contact" onClick={scrollToTop}>Contact</Link></li>
                </ul>
              </div>
            </div>

            <div className="flex-column">
              <div className="heading-footer">Services</div>
              <div className="footer-tab">
                <ul className="footer-tab-list">
                  <li><Link to="/service1" onClick={scrollToTop}>Business Consulting Services</Link></li>
                  <li><Link to="/service2" onClick={scrollToTop}>Technology Consulting Services</Link></li>
                  <li><Link to="/service3" onClick={scrollToTop}>Content Marketing Strategies to Boost Online Presence</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-line"></div>
        <hr />

        <div className="footer-bottom">
          <p>© 2024 Mulyavardhan Consulting LLP All rights reserved</p>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
