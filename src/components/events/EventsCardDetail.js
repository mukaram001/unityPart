import React from "react";
import { Link } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import { MdLocationOn } from "react-icons/md";
import { BsFillShareFill } from "react-icons/bs";
import { AiOutlineLeft } from "react-icons/ai";

import trendingCardPicThree from "../../assests/images/trendImg3.png";

import "./style.css";
import HomeNavbar from "../navbars/HomeNavbar";

const EventsCardsDetail = () => {
  const avatars = [1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15];
  return (
    <>
      <HomeNavbar/>
      <div className="EventCardDetailMain">
        <div className="container">
          <div className="row">
            <div className="col-md-2 ECD_backbtn">
              {" "}
              <button className="ECD_backbtn_inner">
                <Link className="ECD_backbtn_innerLink" to="/Events">
                  <AiOutlineLeft />
                </Link>
              </button>
            </div>
            <div className="col-md-8   ">
              <div className="ECD_Card ">
                {" "}
                <img
                  src={trendingCardPicThree}
                  className="EventsSectionThree_Img w-100  "
                  alt="pic"
                />
                <div className="d-flex p-4">
                  <div className="d-flex align-items-center p-2">
                    {" "}
                    <p className="EventCarsualDate t_c ECD_date ">
                      <span className="t_c">Aug</span>{" "}
                      <span className="t-c">01</span>{" "}
                    </p>
                  </div>
                  <div className="p-2">
                    <p className="eventcarsualheading mb-0">
                      Wilderness P2E | Wildditch World Cup
                    </p>
                    <p className="ECD_text">Public, Organized by Ney</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ECD_TextMain pt-2">
        <div className="container">
          <div className="row  ">
            <div className="col-md-2"></div>
            <div className="col-md-8 p-4">
              <p className="ECD_heading mb-0">Wildditch World Cup begins!</p>
              <p className="ECD_text mb-0">
                Wilderness P2E has now launched its Platform Runner parkour
                game- Wildditch.
              </p>
              <p className="ECD_text">
                Get the highest score in any single run at Wildditch Parkour and
                win Prizes.
              </p>
              <p className="ECD_heading mb-0">1st Prize:</p>
              <p className="ECD_text">30,000 $WLDY + Legendary Wearable</p>
              <p className="ECD_heading mb-0">2nd Prize:</p>
              <p className="ECD_text">20,000 $WLDY + Epic Wearable</p>
              <p className="ECD_heading mb-0">3rd Prize:</p>
              <p className="ECD_text">10,000 $WLDY + Epic Wearable</p>
              <p className="ECD_text">NFT Wearables for all Top 10 Scorers!</p>
              <p className="ECD_text">
                Inviting everyone to participate in this Run to Earn Parkour in
                the Magical Forest at Wilderness P2E, collect energy orbs and
                escape the dragons.
              </p>
              <p className="ECD_text mb-0">
                We look forward to havin' you in our Wizarding World.
              </p>
              <p className="ECD_text">Yours magically, The Ministry</p>
              <div className="d-flex justify-content-between pt-5">
                <p className="ECD_text">Started: 02 days a go</p>
                <p className="  ECD_live">
                  <Link className="Imgno_Link">
                    <span>&#x2022;</span> Live
                  </Link>
                </p>
              </div>
              <p className=" EventCard_no">
                {" "}
                <MdLocationOn /> Wednesday 0,-4
              </p>
              <p className="d-flex avatars">
                {avatars.map(() => {
                  return (
                    <>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                        className="m-2"
                      />
                    </>
                  );
                })}
              </p>
              <button className="EventCard_btn1  m-1">
                <Link className="EventBtn1_link">Jump In</Link>
              </button>
              <button className="EventCard_btn2 m-1">
                <Link className="EventBtn2_link">
                  <BsFillShareFill />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsCardsDetail;
