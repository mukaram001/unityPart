import React from "react";

import Sectionfive1 from "../../assests/images/1.png";
import Sectionfive2 from "../../assests/images/2.png";
import Sectionfive3 from "../../assests/images/3.png";
import Sectionfive4 from "../../assests/images/4.png";

import "./dao.css";

const DAOSectionFive = () => {
  return (
    <>
      <div className="container DAOSectionFiveMain d-flex">
      <div className="row">
        <div className="col-md-7 pt-4">
          <p className="DAOTextHeading">
            What kinds of things will you get to determine?
          </p>
          <p className="DAOSubText">
            Over the coming year we’ll be scheduling votes to decide on a range
            of issues, including (but not limited to)
          </p>
          <ul>
            <li>
              <p className="DAOSubText">
                Upgrading LAND and Estates to add more features and protocol
                upgrades
              </p>
            </li>
            <li>
              {" "}
              <p className="DAOSubText">
                Specifics and dates of future LAND auctions.
              </p>
            </li>
            <li>
              <p className="DAOSubText">
                {" "}
                Size of marketplace fees, which are always in MANA that gets
                burnt.
              </p>
            </li>
            <li>
              <p className="DAOSubText">
                Primary sale fees, which are always in MANA that gets burnt.
              </p>
            </li>
            <li>
              {" "}
              <p className="DAOSubText">
                Addition and replacement of community-run content servers.
              </p>
            </li>
            <li>
              {" "}
              <p className="DAOSubText">
                Allocation of MANA grants to development efforts.
              </p>
            </li>
            <li>
              <p className="DAOSubText">
                Addition of new wearables to the Lorem World, Builder and
                Marketplace.
              </p>
            </li>
            <li>
              {" "}
              <p className="DAOSubText">
                Replacing members of the Security Council.
              </p>
            </li>
          </ul>
        </div>
        <div className="col-md-5 ">
          <div className="text-center">
            <img src={Sectionfive1} alt="pic" className="sectionfivepicDao" />
          </div>
          <div className="text-center">
            <img src={Sectionfive2} alt="pic" className="sectionfivepicDao" />
          </div>
          <div className="text-center">
            <img src={Sectionfive3} alt="pic" className="sectionfivepicDao" />
          </div>
          <div className="text-center">
            <img src={Sectionfive4} alt="pic" className="sectionfivepicDao" />
          </div>
        </div></div>
      </div>
      <div className="container pb-4">
        <p className="DAOSectionText">What about MANA?</p>
        <p className="DAOSubText">
          MANA has already been fully Idealogy, in the sense that the
          private key that controlled its smart contract{" "}
          <sapn className="pinkText"> has been thrown away</sapn>
        </p>
      </div>
    </>
  );
};

export default DAOSectionFive;
