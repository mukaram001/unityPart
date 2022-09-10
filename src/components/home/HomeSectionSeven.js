import React from "react";
import { Link } from "react-router-dom";

import SectionSevenPic from "../../assests/images/SectionSevenPic.png";

import "../../assests/styles/home/HomeStyle.css";

const HomeSectionSeven = () => {
  return (
    <>
      <div className=" container">
        <div className=" HomeSectionSevenMain">
          <div className="row">
            <div className="col-md-7 p-0">
              <div className="container p-5" id="homesectseven">
                <p className="welcome About_Heading ">ABOUT PLAY MAX</p>
                <p className="homeSubHeading " style={{ lineHeight: " 42px" }}>
                  Determine the future of the virtual world
                </p>
                <p className="SectionOneText " >
                  Buy and sell LAND, Estates, Avatar wearables and names in the
                  Marketplace stocking the very best digital goods and
                  paraphernalia backed by the ethereum blockchain.
                </p>
                <div className="" id="homesectsevenbutton">
                  <button className="homeSectionOneBtn ">
                    <Link to="/startExploring" className="Links">
                    Start Browsing
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-5 p-0">
              <img
                src={SectionSevenPic}
                className="sectionSevenPic"
                alt="pic"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSectionSeven;
