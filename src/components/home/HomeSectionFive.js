import React,{useState} from "react";
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";
import heading_Border from "../../assests/images/borderTwo.png";

import "../../assests/styles/home/HomeStyle.css";
import videothumb from '../../assests/images/videothumbs.png'
const HomeSectionFive = () => {
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const openModal = () => {
    setModal(!modal);
  };
  const setModals = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };
  return (
    <>
      <div className="container-fluid p-0 " id="homesectfive">
        <div className="row m-0 HomeSectionFiveMain freelanone4">
        <p className="text-center  SectionOneText mb-1 " id="homesectfivetext">
            Create, explore and trade in the first-ever virtual
            <br /> world owned by its users.
          </p>
          <p className="text-center HomeSectionTwoHeading mb-0 "> PLAY MAX</p>
          <p className="text-center mb-0">
            <img src={heading_Border} style={{ width: "30%" }} alt="pic" id="imgsectf"/>
          </p>
         
          <div
            className=""
            style={{
              borderRadius: "10px",
              textAlign: "center",
              paddingTop: "20px",
            }}
          >
            <div className="videothumbnail">
              <img src={videothumb} alt='video'onClick={openModal}/>
              {modal ? (
          <section className="modal__bg">
            <div className="modal__align">
              <div className="modal__content" modal={modal}>
                <IoCloseOutline
                  className="modal__close"
                  arial-label="Close modal"
                  onClick={setModals}
                />
                <div className="modal__video-align">
                  {videoLoading ? (
                    <div className="modal__spinner">
                      <BiLoaderAlt
                        className="modal__spinner-style"
                        fadeIn="none"
                      />
                    </div>
                  ) : null}
                  <iframe
                    className="modal__video-style"
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    src="https://www.youtube.com/embed/Ps-0f0K6izM?autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        ) : null}
            </div>
        
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSectionFive;
