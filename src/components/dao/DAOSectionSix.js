import React from "react";

import "./dao.css";

const DAOSectionSix = () => {
  return (
    <>
      <div className="DAOSectionSixMain">
        <div>
          <p className="DAOTextHeading pt-5 text-center">More Info</p>
        </div>
        <div className="container pt-2">
          <div className="DAOSectionSixMainText ">
            <div className="p-5">
              <p className=" DAOSectionText ">
                Security Advisory Board? What’s that?
              </p>
              <p className="DAOSectionSixSubText ">
                The DAO is supported by the Security Advisory Board (SAB). The
                SAB acts as the guarantor of contract security, tasked with the
                job of providing a swift response to bug reports. The Board will
                be able to quickly upgrade the smart contract implementation of
                the LAND and Estate contracts and replace it with a bug-free
                version upon receiving a responsible disclosure bug report. All
                contract updates must be unanimous. Comprising 5 members, the
                Board will be made up of several expert entities or individuals
                initially chosen by the Lorem team and later appointed by
                the community.
              </p>
            </div>
            <hr />
            <div className="p-5">
              <p className=" DAOSectionText ">
                How can SAB members be changed?
              </p>
              <p className="DAOSectionSixSubText ">
                Members can be changed by the Aragon DAO – a vote must be
                started to remove or install a new member. This is an action
                that will involve the community using wMANA. A member of the SAB
                creates a vote for the community to add or remove a member of
                the SAB and community members use wMANA to cast their vote. "You
                can{" "}
                <span className="pinkText">
                  read more about the Security Advisory Board here.
                </span>
              </p>
            </div>
            <hr />
            <div className="p-5">
              <p className=" DAOSectionText ">How do I elevate a Vote?</p>
              <p className="DAOSectionSixSubText ">
                {" "}
                Initially, until fraud risk is reduced to its minimum extent
                possible, votes will only be created and scheduled by the
                Security Advisory Board (SAB).
              </p>
            </div>
          </div>
          <p className="pt-4"></p>

          <div className="DAOSecSixLastMain  p-5">
            <div className="row">
              <div className="col-md-9">
                <p className="DAOTextHeading">Get Involved</p>
                <p className="DAOSubText">
                  The DAO is your platform to greater control and influence over
                  the development of Lorem and we urge you to exercise
                  your right to vote and positively shape our virtual world.{" "}
                </p>
              </div>
              <div className="col-md-3 text-center d-flex align-items-center">
                <button className=" sectionSixDAObtn btnanimated">
                  Start Voting
                </button>
              </div>
            </div>
          </div>
        </div>
        <p className="pt-5"></p>
      
      </div>
    </>
  );
};

export default DAOSectionSix;
