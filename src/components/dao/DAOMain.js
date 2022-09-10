import React from "react";
import HomeFooter from "../footers/HomeFooter";
import DaoNavbar from "../navbars/Header";
import Navbar from "../navbars/Navbar";
import DAOSectionFive from "./DAOSectionFive";
import DAOSectionFour from "./DAOSectionFour";
import DAOSectionOne from "./DAOSectionOne";
import DAOSectionSix from "./DAOSectionSix";
import DAOSectionThree from "./DAOSectionThree";
import DAOSectionTwo from "./DAOSectionTwo";

const DAOMain = () => {
  return (
    <>
      {/* <DaoNavbar /> */}
      <Navbar/>
      <DAOSectionOne />
      <DAOSectionTwo />
      <DAOSectionThree />
      <DAOSectionFour />
      <DAOSectionFive />
      <DAOSectionSix />
      <HomeFooter />
    </>
  );
};

export default DAOMain;
