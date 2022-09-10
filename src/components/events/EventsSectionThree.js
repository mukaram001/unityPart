import React from "react";

import { BsFillShareFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

import trendingCardPicOne from "../../assests/images/trendImg1.png";
import trendingCardPicTwo from "../../assests/images/trendImg2.png";
import trendingCardPicThree from "../../assests/images/trendImg3.png";

import "./style.css";

const EventsSectionThree = () => {
  return (
    <>
      <div className="EventSectionThree_Main">
        <div className="container">
          <div className="row">
            <div className="col-md-3 p-3">
              <div className="EventType_Main p-2">
                <p className="eventMainHeading">Type</p>
                <p className="AllEvents allEventsMain">
                  <Link className="AllEvents_link"> ALL EVENTS</Link>
                </p>
                <p className="AllEvents_text AllEvents_text_Main">
                  All events that is based in Our Game
                </p>
                <p className=" allEventsMain">
                  <Link className="AllEvents_link"> ONE TIME EVENT</Link>
                </p>
                <p className=" AllEvents_text_Main">
                  All events that is based in Our Game
                </p>
                <p className=" allEventsMain">
                  <Link className="AllEvents_link">RECURRING EVENTS </Link>
                </p>
                <p className=" AllEvents_text_Main">
                  All events that is based in our game
                </p>
              </div>
              <div className="mt-4">
                <p className="eventMainHeading">Category</p>
                <div>
                  <p className="AllEvents allEventsMain">
                    <Link className="AllEvents_link"> ALL</Link>
                  </p>
                  <p className=" allEventsMain">
                    <Link className="AllEvents_link">ART & CULTURE </Link>
                  </p>
                  <p className=" allEventsMain">
                    <Link className="AllEvents_link"> COMPETITION</Link>
                  </p>
                  <p className=" allEventsMain">
                    <Link className="AllEvents_link"> EDUCATION</Link>
                  </p>
                  <p className=" allEventsMain">
                    <Link className="AllEvents_link"> GAMING</Link>
                  </p>
                  <p className=" allEventsMain">
                    <Link className="AllEvents_link"> PLAY TO EARN</Link>
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <p className="eventMainHeading">Event Time</p>
                <p className=" AllEvents_text_Main">00:00 - 23:00 (UTC+5)</p>
                <p>
                    {/* <input type='range' className="inputRange"/> */}
                </p>
              </div>
            </div>
            <div className="col-md-9">
              <div className="row">
                {/* ------------------------start Map function here------------------------------- */}
                <div className="col-md-6 animated mt-5">
                  <div className="position-relative ">
                    <p className="m-2  eventCard_img_no">
                      <Link className="Imgno_Link">
                        <span>&#x2022;</span> Live
                      </Link>
                    </p>
                    <img
                      className=" EventsSectionThree_Img  h-50 w-100"
                      src={trendingCardPicOne}
                      alt="pic"
                    />
                  </div>
                  <div className="ventsSectionThree_CardText p-3">
                    <div className="d-flex justify-content-between">
                      <p className="EventCard_Now">Now</p>
                      <p className="EventCard_no">
                        <MdLocationOn /> 0,-4
                      </p>
                    </div>
                    <p className="EventCard_text">
                      Wilderness P2E | Wildditch World Cup
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
                {/* --------------------------Cards----------------------------------- */}
                <div className="col-md-6 animated mt-5">
                  <div className="position-relative ">
                    <p className="m-2  eventCard_img_no">
                      <Link className="Imgno_Link">
                        <span>&#x2022;</span> Live
                      </Link>
                    </p>
                    <img
                      className=" EventsSectionThree_Img  h-50 w-100"
                      src={trendingCardPicOne}
                      alt="pic"
                    />
                  </div>
                  <div className="ventsSectionThree_CardText p-3">
                    <div className="d-flex justify-content-between">
                      <p className="EventCard_Now">Now</p>
                      <p className="EventCard_no">
                        <MdLocationOn /> 0,-4
                      </p>
                    </div>
                    <p className="EventCard_text">
                      Wilderness P2E | Wildditch World Cup
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
                {/* --------------------------Cards----------------------------------- */}
                <div className="col-md-6 animated mt-5">
                  <div className="position-relative ">
                    <p className="m-2  eventCard_img_no">
                      <Link className="Imgno_Link">
                        <span>&#x2022;</span> Live
                      </Link>
                    </p>
                    <img
                      className=" EventsSectionThree_Img  h-50 w-100"
                      src={trendingCardPicOne}
                      alt="pic"
                    />
                  </div>
                  <div className="ventsSectionThree_CardText p-3">
                    <div className="d-flex justify-content-between">
                      <p className="EventCard_Now">Now</p>
                      <p className="EventCard_no">
                        <MdLocationOn /> 0,-4
                      </p>
                    </div>
                    <p className="EventCard_text">
                      Wilderness P2E | Wildditch World Cup
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
                {/* --------------------------Cards----------------------------------- */}
                <div className="col-md-6 animated mt-5">
                  <div className="position-relative ">
                    <p className="m-2  eventCard_img_no">
                      <Link className="Imgno_Link">
                        <span>&#x2022;</span> Live
                      </Link>
                    </p>
                    <img
                      className=" EventsSectionThree_Img  h-50 w-100"
                      src={trendingCardPicOne}
                      alt="pic"
                    />
                  </div>
                  <div className="ventsSectionThree_CardText p-3">
                    <div className="d-flex justify-content-between">
                      <p className="EventCard_Now">Now</p>
                      <p className="EventCard_no">
                        <MdLocationOn /> 0,-4
                      </p>
                    </div>
                    <p className="EventCard_text">
                      Wilderness P2E | Wildditch World Cup
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
                {/* --------------------------Cards----------------------------------- */}
                <div className="col-md-6 animated mt-5">
                  <div className="position-relative ">
                    <p className="m-2  eventCard_img_no">
                      <Link className="Imgno_Link">
                        <span>&#x2022;</span> Live
                      </Link>
                    </p>
                    <img
                      className=" EventsSectionThree_Img  h-50 w-100"
                      src={trendingCardPicOne}
                      alt="pic"
                    />
                  </div>
                  <div className="ventsSectionThree_CardText p-3">
                    <div className="d-flex justify-content-between">
                      <p className="EventCard_Now">Now</p>
                      <p className="EventCard_no">
                        <MdLocationOn /> 0,-4
                      </p>
                    </div>
                    <p className="EventCard_text">
                      Wilderness P2E | Wildditch World Cup
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
                {/* --------------------------Cards----------------------------------- */}
                <div className="col-md-6 animated mt-5">
                  <div className="position-relative ">
                    <p className="m-2  eventCard_img_no">
                      <Link className="Imgno_Link">
                        <span>&#x2022;</span> Live
                      </Link>
                    </p>
                    <img
                      className=" EventsSectionThree_Img  h-50 w-100"
                      src={trendingCardPicOne}
                      alt="pic"
                    />
                  </div>
                  <div className="ventsSectionThree_CardText p-3">
                    <div className="d-flex justify-content-between">
                      <p className="EventCard_Now">Now</p>
                      <p className="EventCard_no">
                        <MdLocationOn /> 0,-4
                      </p>
                    </div>
                    <p className="EventCard_text">
                      Wilderness P2E | Wildditch World Cup
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
                {/* --------------------------Cards----------------------------------- */}
                <p className="text-center readMore EventCard_Now mt-5">
                  Read More...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsSectionThree;
