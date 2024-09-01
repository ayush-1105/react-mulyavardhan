import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css'; 

const Header = () => {
  useEffect(() => {
    const menu = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const navbarLinks = document.querySelectorAll('.navbar li a');

    const handleMenuClick = (event) => {
      event.stopPropagation(); 
      menu.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    };

    const handleLinkOrOutsideClick = () => {
      menu.classList.remove('bx-x');
      navbar.classList.remove('active');
    };

    menu.addEventListener('click', handleMenuClick);
    window.addEventListener('scroll', handleLinkOrOutsideClick);
    document.addEventListener('click', handleLinkOrOutsideClick);

    navbarLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.stopPropagation(); 
        handleLinkOrOutsideClick();
      });
    });

    // Cleanup event listeners on component unmount
    // so that it would return to its original state
    //and also it will make nav to 0%
    return () => {
      menu.removeEventListener('click', handleMenuClick);
      window.removeEventListener('scroll', handleLinkOrOutsideClick);
      document.removeEventListener('click', handleLinkOrOutsideClick);
      navbarLinks.forEach(link => {
        link.removeEventListener('click', handleLinkOrOutsideClick);
      });
    };
  }, []);

  return (
    <header>
      <Link to="/" className="logo">
        <img decoding="async" src="https://framerusercontent.com/images/1qNIOPtQIhqYw4uQzXOKv6OAA.svg" alt="Logo" />
      </Link>

      <div className="bx bx-menu" id="menu-icon"></div>

      <ul className="navbar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/ServicesMain">Services</Link></li>
        <li><Link to="/Blog">Blog</Link></li>
      </ul>
    </header>
  );
};

export default Header;
