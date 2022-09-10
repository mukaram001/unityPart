import React, { useState } from "react";

import BlogSectionThree from "../blog/BlogSectionThree";
import Header from "../navbars/Header";
import DocSidebar from "./sidebar";
import HomeFooter from "../footers/HomeFooter"
import DocsSectionOne from "./DocsSectionOne";
import Navbar from "../navbars/Navbar";

const DocsMain = () => {
  return (
    <div style={{backgroundColor:'#241A46'}}>
     {/* <Header /> */}
     <Navbar/>
      <div className="row p-0 m-0">
        {" "}
       
        <div className="col-md-3" style={{backgroundColor:'#3E335F'}}>
          <DocSidebar />
        </div>
        <div className="col-md-9 p-4">
          <DocsSectionOne />
          <BlogSectionThree />
        </div>
        <HomeFooter />
      </div>
    </div>
  );
};

export default DocsMain;
