import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import { IoMdContacts } from "react-icons/io";

import { cardData } from "./CardData";
import heading_Border from "../../assests/images/borderOne.png";
import cardPISC from "../../assests/images/Card_img_1.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../assests/styles/home/HomeStyle.css";

const HomeSectionSix = () => {
  const history = useHistory();

  const EventHandler = () => {
    history.push("/event");
  };
  // const cards = [1, 1, 1, 1, 1, 1, 1];
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow:4 ,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 2460,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 1630,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="container-fluid p-0 ">
        <div className="row m-0 HomeSectionSixMain">
          <div className="col-md-6 offset-md-3">
            <p className="text-center" id="homesectsixtext">
              Buy and sell LAND, Estates, Avatar wearables and names in the
              Mania Lands Marketplace: stocking the very best digital goods and
              paraphernalia.
            </p>
          </div>
          <p className="Blog_Heading text-center">
            {" "}
            CAN'T DECIDE WHERE TO START?
          </p>
          <p className="text-center mb-0">
            <img
              src={heading_Border}
              style={{ width: "30%" }}
              alt="pic"
              id="homesectsiximg"
            />
          </p>
          <div className="container Blog_Cards_Main">
            <div className="row p-3">
              <Slider {...settings}>
                {cardData.map((item) => {
                  return (
                    <>
                      <div className="p-3" onClick={EventHandler}>
                        <div className="card_Main">
                          <img
                            className="img-fluid "
                            // src={item.image}
                            src={cardPISC}
                            alt="pic"
                          />
                          <div className="overlay">
                            <p className="text_hover text-center ">
                              {" "}
                              <IoMdContacts />
                              05+ <br />
                              Game Community Building with Sinful & ...{" "}
                            </p>
                          </div>
                          <p
                            className="card_text text-center"
                            style={{
                              position: "absolute",
                              bottom: " 4%",
                              left: "2%",
                            }}
                          >
                            {" "}
                            <IoMdContacts />
                            05+ <br />
                            Game Community Building with Sinful & ...
                          </p>
                        </div>
                      </div>
                    </>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSectionSix;
