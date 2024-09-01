import React from 'react';
import ServiceHeader from '../components/ServiceHeader';
import ContactTo from '../components/ContactTo';
import AboutContent from '../components/AboutContent';
import testImage from '../assests/image/testImage.jpg'
const About = () => {
  // data for now only 1
  const servicesData = [
    {
      imgSrc: testImage,
      description: 'Mulyavardhan provides tailored technology solutions to drive business growth. From data acquisition and database management to AI, machine vision, AR, and energy monitoring, we help you implement the right tech to enhance efficiency and achieve your goals.',
      link: 'about',
    },
    
  ];

  return (
    <>
      {/* Map  */}
      {servicesData.map((service, index) => (
        <ServiceHeader
          key={index}
          imgSrc={service.imgSrc}
          description={service.description}
          link={service.link}
        />
      ))}
      <section className="home colorChooseWhite" id="home">
        <AboutContent />
      </section>
      <ContactTo />
    </>
  );
};

export default About;
