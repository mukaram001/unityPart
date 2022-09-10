import React from "react";

import { ReactComponent as TwitterLogo } from "../../assests/images/svg/Twitter.svg";
import { ReactComponent as DribbleLogo } from "../../assests/images/svg/Dribble.svg";
import { ReactComponent as GitHubLogo } from "../../assests/images/svg/github.svg";

import "../../assests/styles/footers/builderfooter.css";

const BuilderFooter = () => {
  return (
    <>
      <div className="Footer ">
        <div className="FooterContent">
          <h5 className="ColorWhite text-upperCase p-3">Need Help?</h5>
          <ul className="p-3">
            <li>Privacy Policy</li>
            <li>Terms of use</li>
            <li>Content Policy</li>
            <li>Code of Ethics</li>
          </ul>
          <h5 className="ColorWhite text-upperCase p-3">Follow us</h5>
          <div className="icons">
            <TwitterLogo />
            <DribbleLogo />
            <GitHubLogo />
          </div>
        </div>
        <hr />
        <div className="FooterBottom">
          <p className="text-upperCase text-light-gray">© 2022 Mania Lands</p>
        </div>
      </div>
    </>
  );
};

export default BuilderFooter;
