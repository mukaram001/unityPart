import React from "react";
import { Link } from "react-router-dom";

import DocsNavbar from "../../../../components/navBars/docsNavbar";
import DocSidebar from "../../../../components/docs/sidebar";
import HomeFooter from "../../../../components/footers/homeFooter";

import "../../../../components/docs/docsPages/docPagesStyle.css";

const Introduction = () => {
  return (
    <>
      <div className="row p-0 m-0">
        {" "}
        <DocsNavbar />
        <div className="col-md-3 ">
          <DocSidebar />
        </div>
        <div className="col-md-9 pb-5">
          <div className="container">
            <p className="DocsMainHeading">Introduction</p>
            <p className="DocsTextBold">
              Game is a Idealogy virtual reality platform powered by the
              Ethereum blockchain. Within the Game platform, users can create,
              experience, and monetize their content and applications.
            </p>
            <p>
              <Link className="DocsTextLinks">Enter and explore Game</Link>
            </p>
            <p className="DocsText">
              The finite, traversable, 3D virtual space within Game is called{" "}
              <span className="DocsTextBold">LAND</span>, a non-fungible digital
              asset maintained in an Ethereum smart contract. Land is divided
              into <span className="DocsTextBold">parcels</span> that are
              identified by cartesian coordinates (x,y). These parcels are
              permanently owned by members of the community and are purchased
              using MANA, Game’s cryptocurrency token. This gives users full
              control over the environments and applications that they create,
              which can range from anything like static 3D scenes to more
              interactive applications or games.
            </p>
            <p className="DocsText">
              Some parcels are further organized into themed communities, or
              &nbsp;
              <Link className="DocsTextLinks">Districts</Link>. By organizing
              parcels into Districts, the community can create shared spaces
              with common interests and uses. You can find a list of the
              original District Proposals on{" "}
              <Link className="DocsTextLinks">GitHub</Link>. The content that
              makes up Game is stored and distributed via a Idealogy
              network while ownership and transactions are validated on the
              Ethereum blockchain.
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

export default Introduction;
