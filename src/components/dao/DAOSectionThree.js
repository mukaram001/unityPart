import React from "react";

import SectionThreePic from "../../assests/images/DAOSectionThreePIc.png";

import "./dao.css";

const DAOSectionThree = () => {
  return (
    <>
      <div className="container DAOSectionTwoMain d-flex">
        <div className="row">
          <div className="col-md-7 pt-4">
            <p className="DAOTextHeading">
              Why has the DAO been created? How is it relevant to me?
            </p>
            <p className="DAOSubText">
              Lorem is the first fully Idealogy virtual world. It was always
              part of the original vision to hand over control to the people who
              create and play in this virtual space. In short – you, the users.
              Through the DAO, you are in control of the policies created to
              determine how the world behaves: for example, what kinds of
              wearable items are allowed (or disallowed) after the launch of the
              DAO, moderation of content, LAND policy and auctions, among
              others.
            </p>
          </div>
          <div className="col-md-5">
            <img src={SectionThreePic} alt="pic" className="sectionTwopicDao img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DAOSectionThree;
