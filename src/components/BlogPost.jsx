import React from 'react';
import { Link } from 'react-router-dom';
import '../css/blogMain.css';

const BlogPost = ({ imgSrc, title, link }) => {
  return (
    <div className="blog-div-content">
      <Link to={link} className="blog-link">
        <div className="blog-img-div">
          <img src={imgSrc} alt={title} />
        </div>
        <div className="blog-main-headline">
          <p className="blog-main-para">{title}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogPost;
