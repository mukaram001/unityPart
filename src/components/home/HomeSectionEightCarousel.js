import React,{Component} from "react";
import { Link, useHistory } from "react-router-dom";
import Slider from "react-slick";

import  {cardData}  from "./CardData";
import  blogCard1Pic from '../../assests/images/blogCard1Pic.png'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assests/styles/home/HomeStyle.css";

const HomeSectionEightCarousel = () => {
  const history = useHistory();
  const BlogHandler = () => {
    history.push("/blog");
  };
  const cards = [1, 1, 1, 1, 1, 1];
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      // {
      //   breakpoint: 2024,
      //   settings: {
      //     slidesToShow: 5,
      //     slidesToScroll: 3,
      //     infinite: true,
      //     dots: true,
      //   },
      // },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
    <div className="container" style={{paddingBottom:'60px'}}>
      <Slider {...settings}>
        {cardData.map((item) => {
          return (
            <>
              <div className="p-4" onClick={BlogHandler}>
                <div className="boxShadow">
                  <div className="" style={{ position: "relative" }}>
                    <img
                      // src={item.sectEightImg}
                      src={blogCard1Pic}
                      className="img-fluid"
                      style={{
                        borderRadius: "10px",
                        height: "250px",
                        width: "100%",
                      }}
                      alt="pic"
                    />

                    <button className="blogImgBtn">
                      <Link className="blogImgBtn_Link">ANNOUNCEMENT</Link>
                    </button>
                  </div>
                  <div className="p-4 text-center ">
                    <p className="BlogTextHead">
                      <strong>
                        {" "}
                        Community Highlights A New Way to Rent LAND in Idealogy
                      </strong>
                    </p>
                    <p className="Blog_SubText">
                      Donec orci enim, bibendum a augue quis, aliquet cursus
                      quam. Pellentesque pulvi condimentum dictum, F
                    </p>
                    <button className="homeSectionOneBtn mt-3">
                      <Link to="/startExploring" className="Links">
                        Read More
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </Slider>

     
    </div>
  );
};

export default HomeSectionEightCarousel;
