import React from "react";
import { Link } from "react-router-dom";
import sectionOneVedio from "../../assests/vedios/Hero Video.mp4";
import "../../assests/styles/home/HomeStyle.css";
import sectimg from "../../assests/images/charct1.png";
import "./homeStyle.css";
const HomevideoSectOne = () => {
  return (
    <div className="HomeSectionOne_main HomeSectionOne_bg row ">
      <video
        autoPlay
        loop
        muted
        className="img-fluid videosect HomeSectionOne_vedio"
      >
        <source src={sectionOneVedio} type="video/mp4" />
      </video>
      <div className="HomeSectionOne_content ">
        <div className=" row  pb-5">
          <div className="col-md-6 col-sm-12 smallImg" id="homeSectOneImg">
            <img src={sectimg} alt="img" className="sectmobileimg" />{" "}
          </div>
          <div className=" col-md-9 " id="">
            <div className="text-center welcomeBorder">
              <p className="welcome  mb-0 text-center ">
                WELCOME TO
              </p>
            </div>
            <p className="MainHeading mt-3 mb-0 ">Mania Lands</p>
            <p className="SectionOneText mb-5">
              Create, explore and trade in the first-ever virtual world owned by
              its users.
            </p>
            <div className="">
              <Link to="/Game" className="homeSectionOneBtn  Links ">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div
    //   style={{ position: "relative", height: "80vh pt-4" }}
    //   className="homevidesct"
    // >
    //   <div className="videosect ">
    //     <video autoPlay loop muted className="SectionOneVedio">
    //       <source src={sectionOneVedio} type="video/mp4" />
    //     </video>
    //   </div>
    //   <div
    //     className=" container homesectthreetextarea"
    //     id="homesectcontaineron"
    //   >
    //     <div className="HomeTextMain homesectoneleft">
    //       <div className="row ">
    //         <div className="col-md-6 col-sm-12 smallImg" id="homesectleftfour">
    //           <img src={sectimg} alt="img" className="sectmobileimg" />{" "}
    //         </div>
    //         <div className="col-md-9" id="homesectone">
    //           <p className="welcome welcomeBorder  text-center ">
    //             WELCOME TO
    //           </p>

    //           <p className="MainHeading mt- ">Mania Lands</p>
    //           <p className="SectionOneText w-75 mb-5">
    //             Create, explore and trade in the first-ever virtual world owned
    //             by its users.
    //           </p>

    //           <a
    //           // to="/Game"
    //           href='https://unitybucket-code.s3.us-east-2.amazonaws.com/unity_game/public/NFT/index.html'
    //           target='_blank'
    //           rel="noopener noreferrer"
    //            className="homeSectionOneBtn Links ">
    //             Get Started
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default HomevideoSectOne;
