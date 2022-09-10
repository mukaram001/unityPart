import React from "react";
import { Link } from "react-router-dom";

import BuilderNavbar from "../navbars/BuilderNavbar";

import "./style.css";

const BuilderMain = () => {
  return (
    <>
      <BuilderNavbar />
      <div className="pt-5 text-center" style={{ backgroundColor: "#37225A" }}>
        <div className="BuilderListMain">
          <ul className="builderSectionOnelist">
            <li>
              <Link className="builderListItem"> &nbsp; &nbsp;&nbsp;Scenes</Link>
            </li>
            <li>
              <Link className="builderListItem">&nbsp;&nbsp;&nbsp;Land</Link>
            </li>
            <li>
              <Link to="/Names" className="builderListItem">
                &nbsp;&nbsp;&nbsp;Names
              </Link>
            </li>
            <li>
              <Link className="builderListItem">&nbsp;&nbsp;&nbsp;Collection</Link>
            </li>
          </ul>
        </div>
        <div className="d-flex align-items-center justify-content-center vh-100 text-white">
          <p>
            You need to{" "}
            <span>
              <Link to="/connect" className="textStylish">
                <strong>Sign in</strong>
              </Link>
            </span>{" "}
            to access this page.
          </p>
        </div>
      </div>

      {/* <HomeFooter /> */}
    </>
  );
};

export default BuilderMain;
