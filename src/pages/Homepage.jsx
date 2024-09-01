import React from 'react';
import testImage from '../assests/image/testImage.jpg'
import '../css/style.css';

import HomeMain from '../components/HomeMain';
import ServiceHeader from '../components/ServiceHeader';
import ContactTo from '../components/ContactTo';

const Homepage = () => {
  // Data
  const servicesData = [
    {
      imgSrc: testImage,
      description: 'Mulyavardhan provides tailored technology solutions to drive business growth. From data acquisition and database management to AI, machine vision, AR, and energy monitoring, we help you implement the right tech to enhance efficiency and achieve your goals.',
      link: 'service1',
    },
    {
      imgSrc: testImage,
      description: 'Mulyavardhan offers cutting-edge solutions in AR and machine vision to transform your business operations and elevate your customer experiences.',
      link: 'service2',
    },
    {
      imgSrc: testImage,
      description: 'Energy monitoring and sustainable technology solutions to help your business reduce its carbon footprint while improving operational efficiency.',
      link: 'service3',
    },
  ];

  return (
    <div>
      <HomeMain />
      {/* Map */}
      {servicesData.map((service, index) => (
        <ServiceHeader
          key={index}
          imgSrc={service.imgSrc}
          description={service.description}
          link={service.link}
        />
      ))}
      <ContactTo />
    </div>
  );
};

export default Homepage;
