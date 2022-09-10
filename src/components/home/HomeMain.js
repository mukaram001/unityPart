import React from "react";

import HomeNavbar from "../navbars/HomeNavbar";
import HomeSectionFive from "./HomeSectionFive";
import HomeSectionSix from "./HomeSectionSix";
import HomeSectionEight from "./HomeSectionEight";
import HomeSectionSeven from "./HomeSectionSeven";
import IconCrasual from "./IconCrasual";
import HomeFooter from "../footers/HomeFooter";
import Homevideosect from "./Homevideosect";
import HomevideoSectOne from "./HomevideoSectOne";
import HomevideoSectthree from "./HomevideoSectthree";
import HomevideoSectOnefour from "./HomevideoSectOnefour";
import Header from "../navbars/Header";
import HomeSectionNine from "./HomeSectionNine";
import HomeSectionEightCarousel from "./HomeSectionEightCarousel";

import "../../assests/styles/home/HomeStyle.css";
import Navbar from "../navbars/Navbar";

const HomeMain = () => {
  return (
    <div>
      <Navbar />
      <HomevideoSectOne />
      <HomevideoSectthree />
      <Homevideosect />
      <HomevideoSectOnefour />
      <IconCrasual />
      <HomeSectionFive />
      <HomeSectionSix />
      <HomeSectionSeven />
      <HomeSectionNine />
      <HomeSectionEightCarousel />
      <HomeSectionEight />
      <HomeFooter style={{ marginTop: "100px" }} />
    </div>
  );
};

export default HomeMain;
