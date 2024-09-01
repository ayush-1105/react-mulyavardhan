import React from "react";
import '../../css/blogCss.css';
import testImage from "../../assests/image/testImage.jpg"
import ImageSection from "../../components/ImageSectionBlog";
import HeadlineSection from "../../components/HeadlineSectionBlog";
import ContentSection from "../../components/ContentSectionBlog";
import ContactTo from "../../components/ContactTo";

const Blog1 = () => {
  const subheadings = [
    {
      subhead: 'Strategic Supplier Partnerships for Sustainable Growth',
      content: `Consider the impact of your supplier relationships on your business and the environment.
        Opt for partnerships with suppliers who prioritize sustainability, offering eco-friendly materials and
        ethical practices. Mulyavardhan's experts share insights into selecting strategic partners that
        align with your business values, helping you achieve both operational efficiency and sustainability goals.`,
    },
    {
      subhead: 'From Cost-Saving to Value-Adding - Implementing Lean Practices',
      content: `Transform your business operations by adopting lean practices that minimize waste and maximize
        value. Learn how to streamline processes, reduce inefficiencies, and enhance productivity with
        Mulyavardhan's step-by-step guide. These practices not only lower costs but also foster a culture of
        continuous improvement within your organization.`,
    },
    {
      subhead: 'Energy Management for Operational Efficiency',
      content: `Optimize your energy usage with smart energy management solutions. Mulyavardhan explores the latest
        advancements in energy-efficient technologies, showcasing how strategic investments in energy
        management can reduce operational costs and enhance your business's sustainability credentials.`,
    },
    {
      subhead: 'Enhancing Employee Engagement through Sustainable Workspaces',
      content: `Create a workplace environment that promotes both sustainability and employee well-being.
        Mulyavardhan recommends practical changes such as integrating green office spaces, using
        eco-friendly materials, and promoting energy-saving habits among employees. These initiatives can
        boost employee satisfaction and contribute to a more productive and engaged workforce.`,
    },
    {
      subhead: 'Conclusion',
      content: `Transforming your business into a model of sustainability and efficiency doesn’t require sweeping
        changes. Small, strategic adjustments can lead to significant improvements in both your operational
        performance and environmental impact. Mulyavardhan is here to guide you on this journey, offering
        expert advice and practical insights to help you unlock your business's full potential. Stay tuned
        to our blog for more strategies and tips on how to drive growth while fostering a sustainable
        future. Let’s build a stronger, more responsible business landscape, one step at a time.`,
    },
  ];

  return (
    <>
      <div className="backgroundColorWhite">
        <ImageSection imageSrc={testImage} altText="Blog" />
        <HeadlineSection 
          headline="Maximizing Business Value" 
          content="Welcome to the Mulyavardhan Insights blog, your trusted resource for driving business success through strategic innovation and sustainability. In this post, we'll uncover how practical and effective strategies can transform your business into a model of growth and responsible leadership." 
        />
        <ContentSection 
          title="Introduction"
          subheadings={subheadings}
        />
      </div>
      <ContactTo />
    </>
  );
};

export default Blog1;
