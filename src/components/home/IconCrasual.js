import React from "react";
import Carousel from "react-bootstrap/Carousel";

import iconImage1 from "../../assests/images/iconImages/1.png";
import iconImage2 from "../../assests/images/iconImages/2.png";
import iconImage3 from "../../assests/images/iconImages/3.png";
import iconImage4 from "../../assests/images/iconImages/4.png";
import iconImage5 from "../../assests/images/iconImages/5.png";
import iconImage6 from "../../assests/images/iconImages/6.png";

import "../../assests/styles/home/HomeStyle.css";

const IconCrasual = () => {

  return (
    <>
      <div className="container-fluid p-0 ">
        <Carousel variant="dark" className="IconSliderMain homecarosel" interval={1000}>
          <Carousel.Item
            className="iconSlideImg"
            style={{ transitionDuration: "3s" }}
          >
            <div className="d-flex justify-content-around align-items-center IconSliderMain  p-4">
              <div className="text-center ">
                <img
                  src={iconImage1}
                  className="img-fluid hoverEffect h-75 w-75"
                  alt="pic"
                />
              </div>
              <div className="text-center ">
                <img
                  src={iconImage2}
                  className="img-fluid h-75 w-75 hoverEffect"
                  alt="pic"
                />
              </div>
              <div className="">
                <img
                  src={iconImage3}
                  className="img-fluid hoverEffect h-75 w-75"
                  alt="pic"
                />
              </div>
              <div className="text-center">
                <img
                  src={iconImage4}
                  className="img-fluid hoverEffect h-75 w-75"
                  alt="pic"
                />
              </div>
              <div className="text-center">
                <img
                  src={iconImage5}
                  className="img-fluid hoverEffect h-75 w-75"
                  alt="pic"
                />
              </div>
              <div className="text-center">
                <img
                  src={iconImage6}
                  className="img-fluid hoverEffect h-75 w-75"
                  alt="pic"
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item
            className="iconSlideImg"
            style={{ transitionDuration: "3s" }}
          >
            <div className="d-flex justify-content-around align-items-center IconSliderMain p-4">
              <div className="text-center ">
                <img
                  src={iconImage1}
                  className="img-fluid hoverEffect h-75 w-75"
                  alt="pic"
                />
              </div>
              <div className="text-center ">
                <img
                  src={iconImage2}
                  className="img-fluid h-75 w-75 hoverEffect"
                  alt="pic"
                />
              </div>
              <div className="">
                <img
                  src={iconImage3}
                  className="img-fluid hoverEffect h-75 w-75"
                  alt="pic"
                />
              </div>
              <div className="text-center">
                <img
                  src={iconImage4}
                  className="img-fluid hoverEffect h-75 w-75"
                  alt="pic"
                />
              </div>
              <div className="text-center">
                <img
                  src={iconImage5}
                  className="img-fluid hoverEffect h-75 w-75"
                  alt="pic"
                />
              </div>
              <div className="text-center">
                <img
                  src={iconImage6}
                  className="img-fluid hoverEffect h-75 w-75"
                  alt="pic"
                />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default IconCrasual;
