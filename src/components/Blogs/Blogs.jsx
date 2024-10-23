import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handelBookmarks,handelReadingTime}) => {

  const [blogs,setBlogs]=useState([]);

  useEffect(()=>{
  fetch('blogs.json')
  .then(res =>res.json())
  .then( data => setBlogs(data))
  },[])

  return (
    <div className="w-2/3">
      <h2 className="text-3xl">Blogs: {blogs.length}</h2>
      {
        blogs.map( blog =><Blog blog={blog} handelReadingTime={handelReadingTime} handelBookmarks={handelBookmarks} key={blog.id}></Blog>)
      }
    </div>
  );
};

Blogs.propTypes={
  handelBookmarks: PropTypes.func,
  handelReadingTime:PropTypes.func
}

export default Blogs;