import React from "react";

import HomeFooter from "../footers/HomeFooter";
import BlogNavbar from "../navbars/blogNavbar";
import Header from "../navbars/Header";
import BlogSectionOne from "./BlogSectionOne";
import BlogSectionThree from "./BlogSectionThree";
import BlogSectionTwo from "./BlogSectionTwo";

import "./blog.css";
import Navbar from "../navbars/Navbar";

const BlogMain = () => {
  return (
    <div style={{ backgroundColor: "#241A46" }}>
      {/* <Header /> */}
      <Navbar/>
      <BlogNavbar />
      <BlogSectionOne />
      <BlogSectionTwo />
      <BlogSectionThree />
      <HomeFooter />
    </div>
  );
};

export default BlogMain;
