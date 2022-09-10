import React from "react";
import { Link, useLocation } from "react-router-dom";

import {FaChevronDown} from 'react-icons/fa'
import hexagonIcon from "../../../assests/images/Group 5.png";
import hexagonIcon2 from "../../../assests/images/Group 6.png";

import "./style.scss";

const BuilderAll = () => {
  const pathname = useLocation();
  console.log(pathname);
  return (
    <>
      {/* <HomeNavbar /> */}
      <div className="container-fluid bilderAllMain">
        <div className="row">
          <div className="col">
            <div className="container  ">
              <div className=" pt-5">
                <Link>
                  <button className="builderall_numberbtn text-start">
                    <img style={{ width: "22px" }} src={hexagonIcon2} alt="" />{" "}
                    100,000
                  </button>
                </Link>
              </div>
              <div className=" mt-2">
                <Link>
                  <button className="builderall_numberbtn text-start">
                    <img style={{ width: "22px" }} src={hexagonIcon} alt="" />{" "}
                    0.1
                  </button>
                </Link>
              </div>
              <hr className="underLine" />

              {/* -------------------------Sidebar------------------------------------------------ */}
              <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
                <div class="container-fluid p-0 w-100">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContentSidebar"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse "
                    id="navbarSupportedContentSidebar"
                  >
                    <ul className="  mb-2 mb-lg-0 p-0 mx-0">
                      <Link to="/builder_scene">
                        <li
                          className={`${
                            pathname ==="/builder_scene"
                              ? "text-danger fs-1 list-unstyled"
                              : "builderall_btns   text-start"
                          }`}
                        >
                          SCENES
                        </li>
                      </Link>
                      <Link to="/land" className=" ">
                        <li 
                        // className="list-unstyled builderall_btns mt-3"
                        className={`${
                            pathname ==="/land"
                              ? "text-danger fs-1 list-unstyled"
                              : "builderall_btns text-start"
                          }`}
                        >
                          LAND
                        </li>
                      </Link>

                      <Link to="/names" className="">
                        <li className="list-unstyled builderall_btns text-start mt-3 ">
                          NAMES
                        </li>
                      </Link>
                      <div className="dropdown">
                        <span
                          href=""
                          className=" builderall_btns  align-items-center  text-decoration-none dropdown-toggle"
                          id="dropdownUser2"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          COLLECTIONS &nbsp;  
                           
                          <FaChevronDown className="pb-2 fs-4"/>
                          </span>
                        <ul
                          className="dropdown-menu border-0 px-0 top-50  bg-transparent"
                          aria-labelledby="dropdownUser2"
                        >
                          {" "}
                          <Link to="/collection" className="">
                            <li className="collection_item builderall_btns">
                              {" "}
                              Collections
                            </li>
                          </Link>
                          <Link to="/metaGlass" className="">
                            <li className="mt-3 collection_item builderall_btns">
                              {" "}
                              Single Items
                            </li>{" "}
                          </Link>
                        </ul>
                      </div>
                    </ul>
                  </div>
                </div>
              </nav>

              {/* ----------------------------------------------------------- */}
            </div>
          </div>
          {/* <div className="col-md-10">
            <AddScenes/>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default BuilderAll;
