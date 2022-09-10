import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import {
  FaDiscord,
  FaRedditAlien,
  FaTwitter,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

import "../../assests/styles/footers/HomeFooter.css";

const HomeFooter = () => {
  const { pathname } = useLocation();

  return (
    <div className="footersect">
      <div className="container-fluid " id="homefootersect">
        <div className="row m-0 Home_Footer_Main">
          <p className={`${pathname ==="/" ? "top_padding" : "p-0"}`}></p>
          <div className="d-flex justify-content-between p-5" id="footerlinkssect">
            <div className="col-md-5" style={{ paddingLeft: "45px" }} id='ideologysect'>
              <p className="footer_heading ">
                <strong>Mania Lands</strong>
              </p>
              <div>
                <ul id="homefooterul">
                  <li className="footer_list_item">
                    <FaMapMarkerAlt />
                    &nbsp; PO Box W75 Street lan West new queens
                  </li>
                  <li className="footer_list_item">
                    <BsFillTelephoneFill />
                    &nbsp;+24 1245 654 235
                  </li>
                  <li className="footer_list_item">
                    <GrMail />
                    &nbsp;info@exemple.com
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <p className="footer_heading">
                <strong>categories</strong>
              </p>
              <div className="responsiveness">
                {/* <ul className="responsiveness"> */}
                  <li className="footer_list_item spacing_footer">Ancient</li>
                  <li className="footer_list_item spacing_footer">Fantasy</li>
                  <li className="footer_list_item spacing_footer">Horror</li>
                  <li className="footer_list_item spacing_footer">Shooting</li>
                {/* </ul> */}
              </div>
            </div>
            <div className="col">
              <p className="footer_heading">
                <strong>Need help?</strong>
              </p>
              <div className="responsiveness">
                {/* <ul className="responsiveness"> */}
                  <li className="footer_list_item spacing_footer">
                    Privacy Policy
                  </li>
                  <li className="footer_list_item spacing_footer">
                    Terms of use
                  </li>
                  <li className="footer_list_item spacing_footer">
                    Content Policy
                  </li>
                  <li className="footer_list_item spacing_footer">
                    Code of Ethics
                  </li>
                {/* </ul> */}
              </div>
            </div>
            <div className="col">
              <p className="footer_heading">
                <strong>Follow us</strong>
              </p>
              <div className="responsiveness">
                {/* <ul className="responsiveness"> */}
                  <li className="footer_list_item">
                    <a
                      className="footer_icons"
                      href="https://twitter.com/i/flow/login"
                    >
                      <FaTwitter />
                    </a>
                  </li>
                  <li className="footer_list_item">
                    <a className="footer_icons" href="https://discord.com/">
                      <FaDiscord className="" />
                    </a>
                  </li>
                  <li className="footer_list_item">
                    <a className="footer_icons" href="https://www.reddit.com/">
                      <FaRedditAlien className="" />
                    </a>
                  </li>
                  <li className="footer_list_item">
                    <a className="footer_icons" href="https://github.com/">
                      <FiGithub />
                    </a>
                  </li>
                {/* </ul> */}
              </div>
            </div>
          </div>
          <hr />
          <div>
            <p className=" footer_cc text-center">
              © &nbsp;2022 &nbsp;Game &nbsp;Mania Lands
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
