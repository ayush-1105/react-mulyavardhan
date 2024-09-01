import React from 'react';
import NameCard from '../components/NameCard';
import AddressCard from '../components/AddressCard';
import testImage from '../assests/image/testImage.jpg'
import '../css/aboutCss.css'
import '../css/style.css'

const AboutContent = () => {
    const nameCards = [
        { imgSrc: testImage, name: 'Rajendra Pethe' },
        { imgSrc: testImage, name: 'Piyush Pande' },
        { imgSrc: testImage, name: 'Ulhas Marathe' },
        { imgSrc: testImage, name: 'Dinesh Joshi' },
      ];

  const addressCards = [
    {
      country: 'America',
      address: `123 Green Avenue,\nSuite 456, New York,\nNY 10001, USA`,
    },
    {
      country: 'America',
      address: `123 Green Avenue,\nSuite 456, New York,\nNY 10001, USA`,
    },
    {
      country: 'America',
      address: `123 Green Avenue,\nSuite 456, New York,\nNY 10001, USA`,
    },
  ];

  return (
    <>
      <div className="flex-column1">
        <div className="flex-row1">
          {nameCards.slice(0, 2).map((card, index) => (
            <NameCard key={index} imgSrc={card.imgSrc} name={card.name} />
          ))}
        </div>
        <div className="flex-row1">
          {nameCards.slice(2, 4).map((card, index) => (
            <NameCard key={index} imgSrc={card.imgSrc} name={card.name} />
          ))}
        </div>
      
      <div className="flex-column1 extraMargin">
        <button className="button-primary">
          <span className="green-dot"></span>
          <span className="letter-about">Locations</span>
        </button>
        <br />
        <span className="bold-text">Both Humans and Earth Love Our Kitchens</span>
        <div className="flex-row1">
          {addressCards.map((card, index) => (
            <AddressCard key={index} country={card.country} address={card.address} />
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default AboutContent;
