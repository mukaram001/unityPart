import React,{useState} from "react";
import Carousel from "react-bootstrap/Carousel";

import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { BsFillShareFill } from "react-icons/bs";

import trendingCardPicOne from "../../assests/images/trendImg1.png";

import "./style.css";

const EventsCarusal = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div className="EventCarusalMain">
        <div className="container">
          <div className="row">
            <div className="d-flex justify-content-between">
              <p className="eventMainHeading">World Events</p>
              <p className="text-center">
                &nbsp;{" "}
                <input
                  className="EventInput"
                  type="text"
                  placeholder={` Search...`}
                />
                &nbsp;
                <button className="AllEvents submitbtn">
                  <Link className="AllEvents_link">
                    Submit Event <AiOutlinePlus />
                  </Link>
                </button>
              </p>
            </div>
           
              {/* -------------------------------------------------------- */}
              <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                  {" "} <div className="row p-3">
                  <div className="col-md-7 p-0">
                    <div className="position-relative ">
                      <p className="m-2  eventCard_img_no">
                        <Link className="Imgno_Link">
                          <span>&#x2022;</span> Live
                        </Link>
                      </p>
                      <img
                        className=" EventsCarosal_Img  h-50 w-100"
                        src={trendingCardPicOne}
                        alt="pic"
                      />
                    </div>
                  </div>
                  <div className="col-md-5 p-0 ">
                    {" "}
                    <div className="eventCarsualbg  p-4">
                      <p className="text-end EventCard_no">
                        {" "}
                        <MdLocationOn /> Wednesday 0,-4
                      </p>

                      <div className="pt-4">
                        <p className="EventCarsualDate t_c ">
                          <span className="t_c">Aug</span>{" "}
                          <span className="t-c">01</span>{" "}
                        </p>
                        <p className="eventcarsualheading mb-0">
                          Wilderness P2E | Wildditch World Cup
                        </p>
                        <p className="eventcarsualtext">
                          Public, Organized by Ney
                        </p>
                        <p className="eventcarsualday mb-0">
                          Started: 02 days a go
                        </p>
                        <button className="EventCard_btn1  m-1">
                          <Link className="EventBtn1_link" to="/Wallet">
                            Jump In
                          </Link>
                        </button>
                        <button className="EventCard_btn2 m-1">
                          <Link className="EventBtn2_link">
                            <BsFillShareFill />
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div></div>
                </Carousel.Item>
                {/* ------------------------------------------------------- */}
                <Carousel.Item>
                  {" "} <div className="row p-3">
                  <div className="col-md-7 p-0">
                    <div className="position-relative ">
                      <p className="m-2  eventCard_img_no">
                        <Link className="Imgno_Link">
                          <span>&#x2022;</span> Live
                        </Link>
                      </p>
                      <img
                        className=" EventsCarosal_Img  h-50 w-100"
                        src={trendingCardPicOne}
                        alt="pic"
                      />
                    </div>
                  </div>
                  <div className="col-md-5 p-0 ">
                    {" "}
                    <div className="eventCarsualbg  p-4">
                      <p className="text-end EventCard_no">
                        {" "}
                        <MdLocationOn /> Wednesday 0,-4
                      </p>

                      <div className="pt-4">
                        <p className="EventCarsualDate t_c ">
                          <span className="t_c">Aug</span>{" "}
                          <span className="t-c">01</span>{" "}
                        </p>
                        <p className="eventcarsualheading mb-0">
                          Wilderness P2E | Wildditch World Cup
                        </p>
                        <p className="eventcarsualtext">
                          Public, Organized by Ney
                        </p>
                        <p className="eventcarsualday mb-0">
                          Started: 02 days a go
                        </p>
                        <button className="EventCard_btn1  m-1">
                          <Link className="EventBtn1_link" to="/Wallet">
                            Jump In
                          </Link>
                        </button>
                        <button className="EventCard_btn2 m-1">
                          <Link className="EventBtn2_link">
                            <BsFillShareFill />
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div></div>
                </Carousel.Item>
                {/* --------------------------------------------- */}
                <Carousel.Item>
                  {" "} <div className="row p-3">
                  <div className="col-md-7 p-0">
                    <div className="position-relative ">
                      <p className="m-2  eventCard_img_no">
                        <Link className="Imgno_Link">
                          <span>&#x2022;</span> Live
                        </Link>
                      </p>
                      <img
                        className=" EventsCarosal_Img  h-50 w-100"
                        src={trendingCardPicOne}
                        alt="pic"
                      />
                    </div>
                  </div>
                  <div className="col-md-5 p-0 ">
                    {" "}
                    <div className="eventCarsualbg  p-4">
                      <p className="text-end EventCard_no">
                        {" "}
                        <MdLocationOn /> Wednesday 0,-4
                      </p>

                      <div className="pt-4">
                        <p className="EventCarsualDate t_c ">
                          <span className="t_c">Aug</span>{" "}
                          <span className="t-c">01</span>{" "}
                        </p>
                        <p className="eventcarsualheading mb-0">
                          Wilderness P2E | Wildditch World Cup
                        </p>
                        <p className="eventcarsualtext">
                          Public, Organized by Ney
                        </p>
                        <p className="eventcarsualday mb-0">
                          Started: 02 days a go
                        </p>
                        <button className="EventCard_btn1  m-1">
                          <Link className="EventBtn1_link" to="/Wallet">
                            Jump In
                          </Link>
                        </button>
                        <button className="EventCard_btn2 m-1">
                          <Link className="EventBtn2_link">
                            <BsFillShareFill />
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div></div>
                </Carousel.Item>
              </Carousel>

              {/* --------------------------------------------------------------------- */}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsCarusal;
