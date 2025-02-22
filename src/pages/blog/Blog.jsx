import React from "react";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import "./blog.css";
import ScrollAd from '../../components/scrollAd/ScrollAd.jsx';
import Footer from '../../components/footer/Footer.jsx'

const blogPosts = [
  { id: 1, image: "images/jpg/insta-img-1.jpg", category: "Photography", date: "Jan 20, 2025", comments: "5 Comment", title: "The Female Body Shape Men Find Most Attractive", col: "col-12 col-lg-6" },
  { id: 2, image: "images/jpg/insta-img-2.jpg", category: "Camera", date: "Jan 20, 2025", comments: "5 Comment", title: "The Female Body Shape Men Find Most Attractive", col: "col-12 col-lg-3" },
  { id: 3, image: "images/jpg/insta-img-3.jpg", category: "country", date: "Jan 20, 2025", comments: "5 Comment", title: "The Female Body Shape Men Find Most Attractive", col: "col-12 col-lg-3" },
  { id: 4, image: "images/jpg/insta-img-4.jpg", category: "country", date: "Jan 20, 2025", comments: "5 Comment", title: "The Female Body Shape Men Find Most Attractive", col: "col-12 col-lg-3" },
  { id: 5, image: "images/jpg/insta-img-5.jpg", category: "camera", date: "Jan 20, 2025", comments: "5 Comment", title: "The Female Body Shape Men Find Most Attractive", col: "col-12 col-lg-6" },
  { id: 6, image: "images/jpg/insta-img-6.jpg", category: "Photography", date: "Jan 20, 2025", comments: "5 Comment", title: "The Female Body Shape Men Find Most Attractive", col: "col-12 col-lg-3" },
  { id: 7, image: "images/jpg/insta-img-7.jpg", category: "camera", date: "Jan 20, 2025", comments: "5 Comment", title: "The Female Body Shape Men Find Most Attractive", col: "col-12 col-lg-3" },
  { id: 8, image: "images/jpg/insta-img-8.jpg", category: "tips", date: "Jan 20, 2025", comments: "5 Comment", title: "The Female Body Shape Men Find Most Attractive", col: "col-12 col-lg-3" },
  { id: 9, image: "images/jpg/insta-img-2.jpg", category: "Photography", date: "Jan 20, 2025", comments: "5 Comment", title: "The Female Body Shape Men Find Most Attractive", col: "col-12 col-lg-6" },
];

const BlogPost = ({ image, category, date, comments, title, col}) => (
  <div className={col + " blog-img-content"}>
    <div className="single-post-area position-relative">
      <div className="post-thumbnail">
        <img src={image} />
      </div>
      <a href="#" className="btn post-catagory">{category}</a>
      <div className="post-content position-absolute">
        <div className="post-meta position-relative">
          <a href="#">{date}</a>
          <a href="#">{comments}</a>
        </div>
        <a href="#" className="post-title">{title}</a>
      </div>
    </div>
  </div>
);

const Blog = () => {
  return (
    <>
      <Breadcrumb pageTitle="Latest Blog" currentPage="Blog" />
      <div className="blog-area section-padding-80-0 mb-70">
        <div className="container">
          <div className="row">
            {blogPosts.map(post => (
              <BlogPost key={post.id} {...post} />
            ))}
          </div>
        </div>
      </div>
      
    <ScrollAd/>
    <Footer/>
    </>
  );
};

export default Blog;
