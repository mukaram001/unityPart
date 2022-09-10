import React from "react";

import border from "../../assests/images/borderOne.png";

import "../../assests/styles/home/HomeStyle.css";

const HomeSectionNine = () => {
  return (
    <>
      <div className="container-fluid p-0 ">
        <div className="row m-0 HomeSectionNineMain">
          <div className="col-md-6 offset-md-3">
            <p className="text-center" id="homesectninetext">
              Buy and sell LAND, Estates, Avatar wearables and names in the
              Idealogy Marketplace: stocking the very best digital goods and
              paraphernalia.
            </p>
          </div>
          <p className="Blog_Heading text-center mb-0">FROM THE BLOG</p>
          <p className="text-center mb-0">
            <img src={border} alt="pic" className="w-70" id="homesectnineimg" />
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeSectionNine;
