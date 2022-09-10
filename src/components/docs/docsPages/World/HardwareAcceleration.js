import React from "react";
import { Link } from "react-router-dom";

import DocsNavbar from "../../../../components/navBars/docsNavbar";
import DocSidebar from "../../../../components/docs/sidebar";
import HomeFooter from "../../../../components/footers/homeFooter";
import HApic from "../../../../assets/images/gpu.png";

import "../../../../components/docs/docsPages/docPagesStyle.css";

const HardwareAcceleration = () => {
  return (
    <>
      <div className="row p-0 m-0">
        <DocsNavbar />
        <div className="col-md-3 ">
          <DocSidebar />
        </div>
        <div className="col-md-9 pb-5">
          <div className="container">
            <p className="DocsMainHeading">Hardware Acceleration</p>
            <p className="DocsText">
              Since Game runs in a web browser, you might need to configure your
              browser and/or operating system to have access to all of your
              machine’s potential to run Game as smoothly as possible.
            </p>
            <p>
              <img className="img-fluid" src={HApic} alt="pic" />
            </p>
            <p className="DocsText">
              If you see this warning, it means that you are using a sub-optimal
              set up for rendering 3d graphics. Your experience when playing
              Game might be laggy and unresponsive because of this. You might
              notice missing frames as you move around in a jumpy way.
            </p>
            <p className="DocsText borderLeft">
              Note: Some lower end machines, or machines that are not designed
              for gaming, may not have a dedicated graphics card at all. If
              that’s your case, then ignore this warning. You might still be
              able to improve how you experience Game by opening the Settings
              panel and lowering the graphics quality. See{" "}
              <Link className="DocsTextLinks">system requirements</Link>.
            </p>
            <p className="DocsSubHeading">Context</p>
            <p className="DocsText ">
              {" "}
              Many machines have a <em>dedicated graphics card</em>, a piece of
              hardware that is specifically optimized for graphics processing
              (also called a GPU). This graphics card is not always in use, this
              may be done to save battery or because certain programs (like the
              web browser) are not expected to require heavy use of 3d graphics
              processing. If the
              <em>
                {" "}
                dedicated graphics card is off, the integrated graphics card{" "}
              </em>
              takes its place. This other graphics card is a lot less powerful.
              Unlike the <em>dedicated graphics card</em>, the{" "}
              <em>integrated</em>
              graphics card is not a separate piece of hardware, it’s integrated
              into the machine’s mother board.
            </p>
            <p className="DocsText ">
              The browser exposes settings to enable or disable the use of the
              <em> dedicated </em>graphics card, but you may also need to change
              settings on your operating system to make this option truly
              available to the browser.
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

export default HardwareAcceleration;
