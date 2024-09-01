import React from 'react';
import BlogPost from '../components/BlogPost';
import '../css/blogMain.css';
import testImage from '../assests/image/testImage.jpg';

const BlogSection = () => {
  const blogData = [
    { imgSrc: testImage, title: 'Maximizing Business Value', link: '/blog1' },
    { imgSrc: testImage, title: 'Boosting Business Expansion', link: '/blog2' },
    { imgSrc: testImage, title: 'Effective Leadership in a Changing Business Landscape', link: '/blog3' },
    { imgSrc: testImage, title: 'The Future of Work: Adapting to Remote and Hybrid Models', link: '/blog4' },
  ];

  return (
    <div className="backgroundWhiteColor">
      <div className="blog-title">MULYAVARDHAN BLOG</div><br />
      <p className="blog-para">Tips for Sustainable Business</p>

      <div className="blog-main-div">
        {blogData.map((blog, index) => (
          <BlogPost key={index} imgSrc={blog.imgSrc} title={blog.title} link={blog.link} />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
