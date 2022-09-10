import React from "react";
import { Link } from "react-router-dom";

// import DocsNavbar from "../../../../components/navBars/docsNavbar";
import DocSidebar from "../../../../components/docs/sidebar";
// import HomeFooter from "../../../../components/footers/homeFooter";

import "../../../../components/docs/docsPages/docPagesStyle.css";
const DocsDAO = () => {
  return (
    <div className="row p-0 m-0">
      {" "}
      {/* <DocsNavbar /> */}
      <div className="col-md-3 ">
        <DocSidebar />
      </div>
      <div className="col-md-9 pb-5">
        <div className="container">
          <p className="DocsMainHeading">Introduction</p>

          <div className=" docsBox p-4">
            <div>
              <p className="boxTextDocs">Was this article useful?</p>
            </div>
            <div className="docsBoxBtn">
              <button className="docsBoxBtnOne">Yes</button>&nbsp;&nbsp;
              <button className="docsBoxBtnTwo ">No</button>
            </div>
          </div>
          <p className="DocsText textRight">
            Have a suggestion?
            <span className="DocsTextLinks"> Edit this doc on GitHub</span>
          </p>
        </div>
      </div>
      {/* <HomeFooter /> */}
    </div>
  );
};

export default DocsDAO;
