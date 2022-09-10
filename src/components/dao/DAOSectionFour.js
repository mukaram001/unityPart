import React from "react";

import SectionFourPic from "../../assests/images/DAOSectionFourPic.png";

const DAOSectionFour = () => {
  return (
    <>
      <div className="container DAOSectionTwoMain d-flex">
        <div className="row">
          <div className="col-md-5">
            <img src={SectionFourPic} alt="pic" className="sectionTwopicDao" />
          </div>
          <div className="col-md-7 pt-4">
            <p className="DAOTextHeading pt-5">How does the DAO work?</p>
            <p className="DAOSubText">
              The community will propose and vote on policy updates, future LAND
              auctions, whitelisting of NFT contracts to be allowed inside the
              World, Builder and Marketplace, and whatever the community deems
              relevant. Voting takes place on the Lorem DAO's governance
              interface, powered by Aragon.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DAOSectionFour;
