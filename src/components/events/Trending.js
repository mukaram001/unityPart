import React from "react";
import { useHistory } from "react-router-dom";

import trendingCardPicOne from "../../assests/images/trendImg1.png";
import trendingCardPicTwo from "../../assests/images/trendImg2.png";
import trendingCardPicThree from "../../assests/images/trendImg3.png";
import trendingCardPicFour from "../../assests/images/trendImg4.png";
import trendingCardPicFive from "../../assests/images/trendImg5.png";
import trendingCardPicSix from "../../assests/images/trendImg6.png";

import "./style.css";

const Trending = () => {
const history =useHistory();
const CardDetail=()=>{
  history.push('/EventsCardDetail')
}

  return (
    <>
      <div className="TrendingMain">
        <div className="container">
          <div className="row">
            <p className="eventMainHeading">Trending</p>
            {/* -------------Started map function here---------------- */}
            <div className="col-md-6 pt-3" onClick={CardDetail}>
              <div className="trending_card_Main m-0 row">
                <div className="col-5 p-0 ">
                  <div className="position-relative h-100">
                    <p className="m-2 p-1 trend_img_no"> +01</p>
                    <img
                      className="  trendingCardImg img-fluid h-100"
                      src={trendingCardPicOne}
                      alt="pic"
                    />
                  </div>
                </div>
                <div className="col-7 p-0">
                  <p className="trend_date mb-0">Aug 08</p>
                  <p className="trend_text mb-0 ">
                    Meta Lite bar represents Miller Lite x J Miller
                  </p>
                  <p className="trend_btn">
                    <button className="trend_btn_inner">Jump In</button>
                  </p>
                </div>
              </div>
            </div>
            {/* --------------------------------Cadrs------------------------- */}
            <div className="col-md-6 pt-3">
              <div className="trending_card_Main m-0 row">
                <div className="col-5 p-0 ">
                  <div className="position-relative h-100">
                    <p className="m-2 p-1 trend_img_no"> +01</p>
                    <img
                      className="  trendingCardImg img-fluid h-100"
                      src={trendingCardPicTwo}
                      alt="pic"
                    />
                  </div>
                </div>
                <div className="col-7 p-0">
                  <p className="trend_date mb-0">Aug 08</p>
                  <p className="trend_text mb-0 ">
                    Meta Lite bar represents Miller Lite x J Miller
                  </p>
                  <p className="trend_btn">
                    <button className="trend_btn_inner">Jump In</button>
                  </p>
                </div>
              </div>
            </div>
            {/* --------------------------------Cadrs------------------------- */}
            <div className="col-md-6 pt-3">
              <div className="trending_card_Main m-0 row">
                <div className="col-5 p-0 ">
                  <div className="position-relative h-100">
                    <p className="m-2 p-1 trend_img_no"> +01</p>

                    <img
                      className="  trendingCardImg img-fluid h-100"
                      src={trendingCardPicThree}
                      alt="pic"
                    />
                  </div>
                </div>
                <div className="col-7 p-0">
                  <p className="trend_date mb-0">Aug 08</p>
                  <p className="trend_text mb-0 ">
                    Meta Lite bar represents Miller Lite x J Miller
                  </p>
                  <p className="trend_btn">
                    <button className="trend_btn_inner">Jump In</button>
                  </p>
                </div>
              </div>
            </div>
            {/* --------------------------------Cadrs------------------------- */}
            <div className="col-md-6 pt-3">
              <div className="trending_card_Main m-0 row">
                <div className="col-5 p-0 ">
                  <div className="position-relative h-100">
                    <p className="m-2 p-1 trend_img_no"> +01</p>

                    <img
                      className="  trendingCardImg img-fluid h-100"
                      src={trendingCardPicFour}
                      alt="pic"
                    />
                  </div>
                </div>
                <div className="col-7 p-0">
                  <p className="trend_date mb-0">Aug 08</p>
                  <p className="trend_text mb-0 ">
                    Meta Lite bar represents Miller Lite x J Miller
                  </p>
                  <p className="trend_btn">
                    <button className="trend_btn_inner">Jump In</button>
                  </p>
                </div>
              </div>
            </div>
            {/* --------------------------------Cadrs------------------------- */}
            <div className="col-md-6 pt-3">
              <div className="trending_card_Main m-0 row">
                <div className="col-5 p-0 ">
                  <div className="position-relative h-100">
                    <p className="m-2 p-1 trend_img_no"> +01</p>

                    <img
                      className="  trendingCardImg img-fluid h-100"
                      src={trendingCardPicFive}
                      alt="pic"
                    />
                  </div>
                </div>
                <div className="col-7 p-0">
                  <p className="trend_date mb-0">Aug 08</p>
                  <p className="trend_text mb-0 ">
                    Meta Lite bar represents Miller Lite x J Miller
                  </p>
                  <p className="trend_btn">
                    <button className="trend_btn_inner">Jump In</button>
                  </p>
                </div>
              </div>
            </div>
            {/* --------------------------------Cadrs------------------------- */}
            <div className="col-md-6 pt-3">
              <div className="trending_card_Main m-0 row">
                <div className="col-5 p-0 ">
                  <div className="position-relative h-100">
                    <p className="m-2 p-1 trend_img_no"> +01</p>

                    <img
                      className="  trendingCardImg img-fluid h-100"
                      src={trendingCardPicSix}
                      alt="pic"
                    />
                  </div>
                </div>
                <div className="col-7 p-0">
                  <p className="trend_date mb-0">Aug 08</p>
                  <p className="trend_text mb-0 ">
                    Meta Lite bar represents Miller Lite x J Miller
                  </p>
                  <p className="trend_btn">
                    <button className="trend_btn_inner">Jump In</button>
                  </p>
                </div>
              </div>
            </div>
            {/* --------------------------------Cadrs------------------------- */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
