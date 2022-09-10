import React from "react";

import Trending from "./Trending";
import EventsSectionThree from "./EventsSectionThree";
import EventsCarusal from "./EventsCarusal";
import HomeNavbar from "../navbars/HomeNavbar";

import "./style.css";
import HomeFooter from "../footers/HomeFooter";
import EventFooter from "../footers/EventFooter";
import Navbar from "../navbars/Navbar";

const EventsMain = () => {
  return (
    <>
      {/* <HomeNavbar/> */}
      <Navbar/>
      <EventsCarusal />
      <Trending />
      <EventsSectionThree />
      <EventFooter/>
      {/* <HomeFooter /> */}
    </>
  );
};

export default EventsMain;
