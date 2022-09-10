import React from "react";
import { Link } from "react-router-dom";

import DocsNavbar from "../../../../components/navBars/docsNavbar";
import DocSidebar from "../../../../components/docs/sidebar";
import HomeFooter from "../../../../components/footers/homeFooter";

import "../../../../components/docs/docsPages/docPagesStyle.css";

const SystemRequirments = () => {
  return (
    <>
      <div className="row p-0 m-0">
        {" "}
        <DocsNavbar />
        <div className="col-md-3">
          <DocSidebar />
        </div>
        <div className="col-md-9 pb-5">
          <div className="container">
            <p className="DocsMainHeading">System requirements</p>
            <p className="DocsText">
              These are the minimum system specs required to successfully run
              the Game explorer.
            </p>
            <p className="DocsText">
              The minimum requirements differ depending on if you’re running
              Game via a web browser, or if you’re running a locally installed
              desktop client. The desktop client has considerably lower
              requirements, as it’s not limited by the browser.
            </p>
            <p className="DocsText borderLeft">
              Note: Game currently does not run on any mobile devices.
            </p>
            <p className="DocsSubHeading mb-0">
              Web Client <span className="hashColor">#</span>
            </p>
            <p className="DocsText">Minimum system requirements</p>
            <p className="DocsText">
              <ul>
                <li>Processor: Intel® Core i3-9100 / AMD™ Athlon 3000G</li>
                <li>
                  Video: NVIDIA® GeForce® GTX 670 / AMD™ Radeon RX 550 / Intel®
                  UHD Graphics 630
                </li>
                <li>RAM: 4GB</li>
              </ul>
            </p>
            <p className="DocsText">Recommended system requirements</p>
            <p className="DocsText">
              <ul>
                <li>Processor: Intel® Core i7-4770 / AMD™ FX 8310</li>
                <li>Video: NVIDIA® GeForce® GTX 960 / AMD™ Radeon R9 280</li>
                <li>RAM: 8GB</li>
              </ul>
            </p>
            <p className="DocsSubHeading mb-0">
              Desktop Client <span className="hashColor">#</span>
            </p>
            <p className="DocsText">Minimum system requirements</p>
            <p className="DocsText">
              <ul>
                <li>Processor: Intel® Core i5-750 / AMD™ FX 8100</li>
                <li>
                  Video: Video: NVIDIA® GeForce® GT 440 / AMD™ Radeon HD 5670 /
                  Intel® HD Graphics 5000
                </li>
                <li>RAM: 4GB</li>
              </ul>
            </p>
            <p className="DocsText">Recommended system requirements</p>
            <p className="DocsText">
              <ul>
                <li>Processor: Intel® Core i7-4770 / AMD™ FX 8310</li>
                <li>Video: NVIDIA® GeForce® GTX 960 / AMD™ Radeon™ R9 280</li>
                <li>RAM: 8GB</li>
              </ul>
            </p>
            <div className=" docsBox p-4">
              <div>
                <p className="boxTextDocs">Was this article useful?</p>
              </div>
              <div className="docsBoxBtn">
                <button className="docsBoxBtnOne">Yes</button>&nbsp;&nbsp;
                <button className="docsBoxBtnTwo ">No</button>
              </div>
            </div>
            <p className="DocsText textRight">
              Have a suggestion?
              <span className="DocsTextLinks"> Edit this doc on GitHub</span>
            </p>
          </div>
        </div>
        <HomeFooter />
      </div>
    </>
  );
};

export default SystemRequirments;
