// import React from 'react';
// import ServiceHeader from '../components/ServiceHeader';
// import testImage from '../assests/image/testImage.jpg'; // Ensure this path is correct

// const ServicesMain = () => {
//   const servicesData = [
//     {
//       imgSrc: testImage,
//       description: 'Mulyavardhan provides tailored technology solutions to drive business growth. From data acquisition and database management to AI, machine vision, AR, and energy monitoring, we help you implement the right tech to enhance efficiency and achieve your goals.',
//       link: './pages/services/service1.html',
//     },
//     {
//       imgSrc: testImage,
//       description: 'Mulyavardhan offers cutting-edge solutions in AR and machine vision to transform your business operations and elevate your customer experiences.',
//       link: './pages/services/service2.html',
//     },
//     {
//       imgSrc: testImage,
//       description: 'Energy monitoring and sustainable technology solutions to help your business reduce its carbon footprint while improving operational efficiency.',
//       link: './pages/services/service3.html',
//     },
//   ];

//   return (
//     <section className="home colorChooseWhite" id="home">
//       <div className="home-content flex-column">
//         {servicesData.map((service, index) => (
//           <ServiceHeader
//             key={index}
//             imgSrc={service.imgSrc}
//             description={service.description}
//             link={service.link}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ServicesMain;
import React from 'react';
import ServiceHeader from '../components/ServiceHeader';
import testImage from '../assests/image/testImage.jpg';
import '../css/blogMain.css';
import ContactTo from '../components/ContactTo';

const ServicesMain = () => {
  const servicesData = [
    {
      imgSrc: testImage,
      description: 'Mulyavardhan provides tailored technology solutions...',
      link: '/service1',
    },
    {
      imgSrc: testImage,
      description: 'Mulyavardhan offers cutting-edge solutions in AR and machine vision to transform your business operations and elevate your customer experiences.',
      link: '/service2',
    },
    {
      imgSrc: testImage,
      description: 'Energy monitoring and sustainable technology solutions to help your business reduce its carbon footprint while improving operational efficiency.',
      link: '/service3',
    },
  ];

  return (
    <>
      <div className="basic-title">
        <div className="blog-title alignLeftPaddingMargin ">MULYAVARDHAN BLOG</div><br />
        <p className="blog-para alignLeftPaddingMargin">Tips for Sustainable Business</p>
      </div>
      <section className="home colorChooseWhite" id="home">
        <div className="home-content flex-column">
          {servicesData.map((service, index) => (
            <ServiceHeader
              key={index}
              imgSrc={service.imgSrc}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </section>
      <ContactTo />
    </>
  );
};

export default ServicesMain;
