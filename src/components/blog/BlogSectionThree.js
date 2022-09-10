import React from "react";

import { FaDiscord, FaTwitter, FaTelegramPlane } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";

import "./blog.css";

const BlogSectionThree = () => {
  return (
    <>
      <div className="container pt-5 pb-5">
        <div className="row BlogSectionThreeMain btnanimated">
          {/* ---------------------------------------------------------------------------------------------------------------------- */}
          <div className="col-md-6 justify-content-center align-items-center d-flex">
            <div className="text-center">
              <p className="BolgNews">Developers newsletter</p>
              <p className="text-white">Subscribe to the latest news about Lorem</p>
            </div>
          </div>
          {/* ------------------------------------------------------------------------------------------------------------ */}
          <div className="col-md-6 align-items-center d-flex">
            <div className="w-100 p-5">
              <form>
                <input placeholder="mail@domain.com" className="BlogInput" />
                <p></p>
                <button className="BlogsubscribeBtn">Subscribe</button>
              </form>
            </div>
          </div>
          {/* ---------------------------------------------------------------------------------------------------- */}
        </div>
        <div className="row pt-5">
          <div className="col-md-3">
            <div className="BlogSectionThreeIconsMain">
              <div>
                <p className="BlogSectionThreeIcons">
                  {" "}
                  <FaDiscord />
                </p>
                <p className="BlogSectionThreeIconsText">
                  Join us on &nbsp;
                  <strong>Discord</strong>
                </p>
              </div>
            </div>
          </div>
          {/* ------------------------------------------------------------------------------------------ */}
          <div className="col-md-3">
            <div className="BlogSectionThreeIconsMain">
              <div>
                <p className="BlogSectionThreeIcons">
                  {" "}
                  <FaTwitter />
                </p>
                <p className="BlogSectionThreeIconsText">
                  Follow us on &nbsp;
                  <strong>Twitter</strong>
                </p>
              </div>
            </div>
          </div>
          {/* ------------------------------------------------------------------------------------------ */}
          <div className="col-md-3">
            <div className="BlogSectionThreeIconsMain">
              <div>
                <p className="BlogSectionThreeIcons">
                  {" "}
                  <FaTelegramPlane />
                </p>
                <p className="BlogSectionThreeIconsText">
                  Join us on &nbsp;
                  <strong>Telegram</strong>
                </p>
              </div>
            </div>
          </div>
          {/* ------------------------------------------------------------------------------------------ */}
          <div className="col-md-3">
            <div className="BlogSectionThreeIconsMain">
              <div>
                <p className="BlogSectionThreeIcons">
                  {" "}
                  <BsBoxSeam />
                </p>
                <p className="BlogSectionThreeIconsText">
                  Get started with our &nbsp;
                  <strong>SDK</strong>
                </p>
              </div>
            </div>
          </div>
          {/* ------------------------------------------------------------------------------------------ */}
        </div>
      </div>
    </>
  );
};

export default BlogSectionThree;
