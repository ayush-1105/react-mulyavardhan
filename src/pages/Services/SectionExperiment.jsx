// src/pages/Service1.jsx
import React from 'react';
import ImageSection from '../../components/ServiceImage';
import ContentSection from '../../components/ServiceContent';
import testImage from '../../assests/image/testImage.jpg';

const contentData = {
    heading: "Digital Transformation Services: Elevate Your Business with Data-Driven Excellence",
    subContent: "Transform your business operations with Mulyavardhan's cutting-edge Digital Transformation Services. Our team of experts is dedicated to scaling up your sustainable processes to a sophisticated data-driven approach, shifting from experience-based to data-based decision-making for a comprehensive improvement.",
    subHeadings: [
        { title: 'Tailored Data-Driven Strategies', content: 'Mulyavardhan specializes in developing customized data-driven strategies that enhance operational efficiency and decision-making. We collaborate closely with you to integrate advanced technologies and data analytics, ensuring every facet of your digital transformation aligns with your unique business goals and requirements.' },
        { title: 'Expertise in Cutting-Edge Technologies', content: 'Our Digital Transformation Services encompass:' },
    ],
    keyFeatures: [
        'Industrial IoT (IIoT): Connect and optimize your industrial operations with smart technologies, enhancing real-time data collection and process efficiency.',
        'Digital Twins: Create virtual replicas of your physical assets to simulate and analyze performance, facilitating better decision-making and predictive maintenance.',
        'Data Analytics: Gain actionable insights from your data with advanced analytics, driving strategic decisions and uncovering new opportunities.',
        'Business Analytics: Utilize business-specific analytics tools to monitor performance, forecast trends, and make informed decisions aligned with your business objectives.',
        'Custom Software Development: Develop bespoke software solutions tailored to your unique challenges, integrating seamlessly with your existing systems.',
    ],
    mainContent: "Mulyavardhan provides tailored technology solutions to drive business growth. From data acquisition and database management to AI, machine vision, AR, and energy monitoring, we help you implement the right tech to enhance efficiency and achieve your goals.",
    fare: "Starts at $10,000",
    mainPara: "Business Consulting Services",
    buttonLink: "contact.html",
    buttonText: "ASK FOR A QUOTE",
    additionalContent: (
        <div>
            <p>description</p>
        </div>
    ),
    additionalContentStyle: { color: 'blue', fontSize: '16px' },
};

const Service1 = () => {
    return (
        <div className="backgroundColorWhite">
            <div className="main-div">
                <ImageSection
                    src={testImage}
                    alt="Service"
                />
                <ContentSection {...contentData} />
            </div>
        </div>
    );
};

export default Service1;
