import React from "react";
import { Link } from "react-router-dom";

import DocsNavbar from "../../../../components/navBars/docsNavbar";
import DocSidebar from "../../../../components/docs/sidebar";
import HomeFooter from "../../../../components/footers/homeFooter";

import "../../../../components/docs/docsPages/docPagesStyle.css";

const WhitePaper = () => {
  return (
    <div className="row p-0 m-0">
      {" "}
      <DocsNavbar />
      <div className="col-md-3 ">
        <DocSidebar />
      </div>
      <div className="col-md-9 pb-5">
        <div className="container">
          <p className="DocsMainHeading">Whitepaper</p>
          <p className="DocsText">
            The original Game white paper written by Esteban Ordano, Ariel
            Meilich, Yemel Jardi, and Manuel Araoz can be found using the link
            below.
          </p>
          <p className="DocsText">
            This white paper presents a detailed explanation of the original
            philosophical motivations behind the Game project, along with a
            rigorous discussion of the proposed technical and economic
            approaches to building Game. Please keep in mind that the Game
            project is continually evolving, and some of the approaches outlined
            in the white paper have been modified.
          </p>
          <li className="pb-5">
            <Link className="DocsTextLinks">Game White Paper</Link>
          </li>

          <div className=" docsBox p-4 ">
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
      <HomeFooter />
    </div>
  );
};

export default WhitePaper;
