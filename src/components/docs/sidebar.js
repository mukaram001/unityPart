import React, { useState } from "react";
import { Link } from "react-router-dom";

import { MdExpandLess, MdExpandMore } from "react-icons/md";

// import "./dropdown.css";
import "./sideBar.css";
const DocSidebar = () => {
  const [showdataOne, setShowdataOne] = useState(false);
  const [showdataTwo, setShowdataTwo] = useState(false);
  const [showdataThree, setShowdataThree] = useState(false);
  const [showdataFour, setShowdataFour] = useState(false);
  const [showdataFive, setShowdataFive] = useState(false);
  const [showdataSix, setShowdataSix] = useState(false);
  const [showdataSeven, setShowdataSeven] = useState(false);

  const showDataOne = () => {
    setShowdataOne((prev) => !prev);
  };
  const showDataTwo = () => {
    setShowdataTwo((prev) => !prev);
  };
  const showDataThree = () => {
    setShowdataThree((prev) => !prev);
  };
  const showDataFour = () => {
    setShowdataFour((prev) => !prev);
  };
  const showDataFive = () => {
    setShowdataFive((prev) => !prev);
  };
  const showDataSix = () => {
    setShowdataSix((prev) => !prev);
  };
  const showDataSeven = () => {
    setShowdataSeven((prev) => !prev);
  };

  return (
    <>
      {/* ///////////////////////////////////////////////////// */}

      <div className="container" id="docssidebar" style={{backgroundColor:'#3E335F'}}>
        <div className="row">
          <div className="">
            <ul>
              <li className="removeListDots paddingMargin">
                <Link to="/DOCS" className="DocsMainItems">
                  {" "}
                  Home
                </Link>
              </li>
              <li className="removeListDots adjustment">
                <p onClick={showDataOne} className="DocsMainItems pt-3">
                  World{" "}
                  {showdataOne ? (
                    <span>
                      <MdExpandLess />
                    </span>
                  ) : (
                    <span>
                      <MdExpandMore />
                    </span>
                  )}
                </p>
                {showdataOne ? (
                  <ul>
                    <li>
                      <Link to="/Introduction" className=" DocsMainInnerItems">
                        Introduction
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Docs_World_System_Requirements"
                        className=" DocsMainInnerItems"
                      >
                        System Requirements
                      </Link>
                    </li>
                    <li>
                      <Link to="/FQA" className=" DocsMainInnerItems">
                        FQA
                      </Link>
                    </li>
                    <li>
                      <p onClick={showDataTwo} className=" DocsMainInnerItems">
                        DAO{" "}
                        {showdataTwo ? (
                          <span>
                            <MdExpandLess />
                          </span>
                        ) : (
                          <span>
                            <MdExpandMore />
                          </span>
                        )}
                      </p>
                      {showdataTwo ? (
                        <ul>
                          <li>
                            <p
                              onClick={showDataThree}
                              className=" DocsMainInnerItems"
                            >
                              Overview{" "}
                              {showdataThree ? (
                                <span>
                                  <MdExpandLess />
                                </span>
                              ) : (
                                <span>
                                  <MdExpandMore />
                                </span>
                              )}
                            </p>
                            {showdataThree ? (
                              <ul>
                                <li>
                                  <Link
                                    to="/DocsDAO"
                                    className=" DocsMainInnerItems"
                                  >
                                    What Is The DAO?
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/DocsDAO"
                                    className=" DocsMainInnerItems"
                                  >
                                    DAO Uses
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/DocsDAO"
                                    className=" DocsMainInnerItems"
                                  >
                                    How The DAO Works
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/DocsDAO"
                                    className=" DocsMainInnerItems"
                                  >
                                    The DAO's Smart Contracts
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/DocsDAO"
                                    className=" DocsMainInnerItems"
                                  >
                                    The DAO Fund
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/DocsDAO"
                                    className=" DocsMainInnerItems"
                                  >
                                    DAO Limitations
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/DocsDAO"
                                    className=" DocsMainInnerItems"
                                  >
                                    Participations Requirements
                                  </Link>
                                </li>
                              </ul>
                            ) : null}
                          </li>
                          <li>
                            <p
                              onClick={showDataFour}
                              className=" DocsMainInnerItems"
                            >
                              Grants{" "}
                              {showdataFour ? (
                                <span>
                                  <MdExpandLess />
                                </span>
                              ) : (
                                <span>
                                  <MdExpandMore />
                                </span>
                              )}
                            </p>
                            {showdataFour ? (
                              <ul>
                                <li>
                                  <Link
                                    to="/DocsDAO"
                                    className=" DocsMainInnerItems"
                                  >
                                    Community Grants
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/DocsDAO"
                                    className=" DocsMainInnerItems"
                                  >
                                    Requesting Grants
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/DocsDAO"
                                    className=" DocsMainInnerItems"
                                  >
                                    Receiving Grants
                                  </Link>
                                </li>
                              </ul>
                            ) : null}
                          </li>
                          <li>
                            <Link
                              to="/Docs_World_System_Requirements"
                              className=" DocsMainInnerItems"
                            >
                              DAO User Guide
                            </Link>
                          </li>
                        </ul>
                      ) : null}
                    </li>

                    <li>
                      <Link to="/WhitePaper" className=" DocsMainInnerItems">
                        WhitePaper
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/HardwareAcceleration"
                        className=" DocsMainInnerItems"
                      >
                        Hardware Acceleration
                      </Link>
                    </li>
                  </ul>
                ) : null}
              </li>
              <li className="removeListDots adjustment">
                <p onClick={showDataFive} className="DocsMainItems pt-3">
                  Market{" "}
                  {showdataFive ? (
                    <span>
                      <MdExpandLess />
                    </span>
                  ) : (
                    <span>
                      <MdExpandMore />
                    </span>
                  )}
                </p>
                {showdataFive ? (
                  <ul>
                    <li>
                      <Link to="/FQA" className=" DocsMainInnerItems">
                        LAND Manager
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Docs_World_System_Requirements"
                        className=" DocsMainInnerItems"
                      >
                        Get Parcel Info
                      </Link>
                    </li>
                  </ul>
                ) : null}
              </li>
              <li className="removeListDots adjustment">
                <p onClick={showDataSix} className="DocsMainItems pt-3">
                  Create{" "}
                  {showdataSix ? (
                    <span>
                      <MdExpandLess />
                    </span>
                  ) : (
                    <span>
                      <MdExpandMore />
                    </span>
                  )}
                </p>
                {showdataSix ? (
                  <ul>
                    <li>
                      <Link to="/FQA" className=" DocsMainInnerItems">
                        Creating Content
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Docs_World_System_Requirements"
                        className=" DocsMainInnerItems"
                      >
                        SDK
                      </Link>
                    </li>
                    <li>
                      <Link to="/FQA" className=" DocsMainInnerItems">
                        Turtorials
                      </Link>
                    </li>
                  </ul>
                ) : null}
              </li>
              <li className="removeListDots adjustment">
                <p onClick={showDataSeven} className="DocsMainItems pt-3">
                  Ethereum essentials{" "}
                  {showdataSeven ? (
                    <span>
                      <MdExpandLess />
                    </span>
                  ) : (
                    <span>
                      <MdExpandMore />
                    </span>
                  )}
                </p>
                {showdataSeven ? (
                  <ul>
                    <li>
                      <Link to="/FQA" className=" DocsMainInnerItems">
                        Glossary
                      </Link>
                    </li>
                    <li>
                      <Link to="/FQA" className=" DocsMainInnerItems">
                        {" "}
                        About The BlockChain
                      </Link>
                    </li>
                  </ul>
                ) : null}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocSidebar;
