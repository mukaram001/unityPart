import React from "react";

import "../../assests/styles/home/HomeStyle.css";

const HomeSectionEight = () => {
  return (
    <>
      <div className="container" id="footerabove">
        <div className="row m-0">
          <div className="offset-md-1 col-md-10 latestUpdateMain">
            <div className="w-100 text-center">
              <p className="text-center updateHeading">
                Get the latest updates
              </p>
              <p className="text-center update_text">
                Breaking news on events, competitions and new developments in
                Idealogy, delivered straight to your inbox.
              </p>
              <input
                className="update_Input mt-2"
                placeholder="email@domain.com"
              />
              &nbsp;&nbsp;
              <button className="updateBtn mt-2">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSectionEight;
