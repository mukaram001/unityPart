import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { RiLayoutGridFill } from "react-icons/ri";
import { MdUpload } from "react-icons/md";
import { FaGreaterThan, FaList } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import { BsFillHeartFill, BsFillEyeFill } from "react-icons/bs";
import {RiArrowRightSLine} from 'react-icons/ri'

import BuilderFooter from "../footers/BuilderFooter";
import BuilderAll from "./builderMain/BuilderAll";
import BuilderNavbar from "../navbars/BuilderNavbar";
import buildingImg from "../../assests/images/builder/builderPic.png";

import "./style.css";
import HomeNavbar from "../navbars/HomeNavbar";
import Navbar from "../navbars/Navbar";

const AddScenes = () => {
  const cards = [1, 1, 1, 1, 1, 1, 1];
  const [showOne, setShowOne] = useState(false);
  const [showTwo, setShowTwo] = useState(false);

  const handleCloseOne = () => setShowOne(false);
  const handleShowOne = () => setShowOne(true);
  const handleCloseTwo = () => setShowTwo(false);
  const handleShowTwo = () => {
    setShowTwo(true);
    setShowOne(false);
  };
  // ---------------Card Detail-------------------
  const [showCardDetail, setShowCardDetail] = useState(false);
  const handleCloseCardDetail = () => setShowCardDetail(false);
  const handleShowCardDetail = () => setShowCardDetail(true);
  // --------------New Item function--------------------------------------
  const [show, setShow] = useState(false);
  function handleShow(breakpoint) {
    setShow(true);
  }
  // ---------------------------------------------------------------------
  return (
    <>
      {/* <BuilderNavbar /> */}
      {/* <HomeNavbar/> */}
      <Navbar/>
      <div className="row m-0 ">
        <div className="col-md-2 bilderAllMain">
          <BuilderAll />
        </div>
        <div className="col-md-10  AddScenesMain">
          <div className="">
            <div className="container  p-5">
              <div className="col-sm-12">
                <div className="d-flex justify-content-between">
                  <p className="bilderResult mb-0">
                    <span className="textStylish scenes">Scenes</span> &nbsp; <span className="sectionTwoTextBuilder">0 Result</span>
                  </p>
                  <p className="justify-content-between  d-flex">
                    <span className="builderIconMain">
                      <Link className="uploadicon">
                        <span onClick={() => handleShow()}>
                          {" "}
                          <MdUpload />
                        </span>
                      </Link>
                    </span>
                    <span className="builderIconMain" onClick={handleShowOne}>
                      <Link className="plusicon">
                        {" "}
                        <GoPlus />{" "}
                      </Link>
                    </span>
                  </p>
                </div>

                <div className="builderContainer d-flex align-items-center justify-content-center">
                  <div>
                    <div className="text-center">
                      <button className="BuilderPlusBtn" onClick={handleShowOne}>
                        <GoPlus />
                      </button>
                    </div>
                    <div className="text-center addSceneText  pt-3 ">It looks like you don't have any scenes.</div>
                    <div className="text-center addSceneText">
                      <span>
                        <Link className="textStylish">
                          <strong>Click here</strong>
                        </Link>
                      </span>{" "}
                      to get started.
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 pt-5">
                <div className="d-flex justify-content-between ">
                  <div>
                    <p className="sectionTwoTextBuilder">From the scene pool</p>
                  </div>
                  <div>
                    <Link className="builderViewMore">
                      View more &nbsp;<span className="fs-3"><RiArrowRightSLine /></span>
                    </Link>
                  </div>
                </div>

                <div className="row background-card-invoices1  pt-3">
                  {/* {clientInvoiceData.quotations_rental_equipment_record?.map( */}
                  {/* (items, index) => ( */}
                  {cards.map(() => {
                    return (
                      <>
                        <div
                          className="col p-0 m-2"
                          // key={index}
                          style={{ cursor: "pointer" }}
                          onClick={
                            handleShowCardDetail
                            // history.push({
                            //     pathname: routes.CLIENT_ORDER_DETAIL,
                            //   })
                            //   dispatch(
                            //     editClientInvoiceDetail({
                            //       equipment_id: items.equipment_id,
                            //       rdn_id: clientInvoiceData.rdn_edit_id,
                            //     })
                            //   );
                          }
                        >
                          <div className="col-sm-12 background-card-invoices ">
                            <div
                              className="row m-0 addSceneCard"
                             
                            >
                              <div className="col-sm-12 p-0  d-flex justify-content-center align-items-center imgbgScenes">
                                <img
                                  src={buildingImg}
                                  alt="pic"
                                  className="img-fluid h-75 w-75"
                                  style={{
                                    borderRadius: "20px",
                                  }}
                                />
                              </div>
                              <div
                                className="col-sm-12 m-0 p-0 d-flex justify-content-center align-items-end "
                                style={
                                  {
                                    //    backgroundColor:'red'
                                  }
                                }
                              >
                                <div className="h-100 w-100 pb-2 SceneCardImg">
                                  <p className="cardTextHead text-center">Architecture</p>
                                  <p className="cardTextSub text-center">16x16m</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <BuilderFooter />
        </div>
      </div>

      {/* -----------------------Modal------------------------------------------ */}
      <Modal className="p-5" show={showOne} onHide={handleCloseOne} size="lg" backdrop="static" keyboard={false}>
        <div className="p-5 ">
          <div className="text-white text-center">
            <p className="modal_heading mb-0">Create Scene</p>
            <p className="modal_text">Set a name and description of your scene.</p>
          </div>
          <div>
            <p className="modal_text mb-0">NAME</p>
            <input className="modal_input" placeholder="New Scene" />
          </div>
          <div className="pt-3">
            <p className="modal_text mb-0">DESCRIPTION</p>
            <input className="modal_input" placeholder="Some description..." />
          </div>
          <div className="d-flex justify-content-between pt-5">
            <Button variant="secondary" className=" modal_btn w-100" onClick={handleCloseOne}>
              Cancel
            </Button>
            <span> &nbsp;&nbsp;&nbsp;&nbsp;</span>{" "}
            <Button variant="primary" className=" modal_btn w-100 p-2" onClick={handleShowTwo}>
              Next
            </Button>
          </div>
        </div>
      </Modal>
      {/* ----------------------Second Modal------------------------------------- */}

      <Modal className="p-5" show={showTwo} onHide={handleCloseTwo} size="lg" backdrop="static" keyboard={false}>
        <div className="p-5 ">
          <div className="text-white text-center">
            <p className="modal_heading mb-0">Create Scene</p>
            <p className="modal_text">Set a size of your new scene.</p>
          </div>

          <div className="d-flex justify-content-between pt-5">
            <Button variant="secondary" className=" modal_btn w-100" onClick={handleCloseTwo}>
              Cancel
            </Button>
            <span> &nbsp;&nbsp;&nbsp;&nbsp;</span>{" "}
            <Button variant="primary" className=" modal_btn w-100 p-2">
              Next
            </Button>
          </div>
        </div>
      </Modal>

      {/* -------------------------New Item Modal------------------------------------------------------- */}

      <Modal className="p-3" show={show} onHide={() => setShow(false)} backdrop="static">
        <div className="container p-4 ">
          <div className="row ">
            <p className="text-white">Import Scene</p>
            <p className="text-white">You can import any Scene made with the Builder!</p>
            <div className="text-center p-5">
              <p className="text-white">upload Icon</p>
              <p className="text-white">
                Drag your Secne .zip file here,or <br /> Browser your computer
              </p>
            </div>
            <div className="d-flex justify-content-between pt-5">
              <Button
                variant="secondary"
                className=" modal_btn w-100"
                onClick={() => {
                  setShow(false);
                }}
              >
                Cancel
              </Button>
              <span> &nbsp;&nbsp;&nbsp;&nbsp;</span>{" "}
              <Button variant="primary" className=" modal_btn w-100 p-2" type="file">
                Import
              </Button>
            </div>
          </div>
        </div>
      </Modal>
      {/* --------------------------Card Detail Modal---------------------------------------------------- */}
      <Modal
        className="p-5"
        show={showCardDetail}
        // onHide={handleCloseTwo}
        size="lg"
        backdrop="static"
        // keyboard={false}
      >
        <div className="p-3 CardDetailModalMain">
          <div className="d-flex justify-content-between">
            <div>
              <button className="backIcon_modal modalIcon" onClick={handleCloseCardDetail}>
                <IoIosArrowBack />
              </button>
            </div>
            <div className="eyeHeartIcon">
              &nbsp; &nbsp;
              <span>
                <BsFillEyeFill />
              </span>
              &nbsp; &nbsp;{" "}
              <span>
                <BsFillHeartFill />
              </span>
            </div>
          </div>
          <div className="text-center pt-5">
            <img src={buildingImg} className=" w-50 h-50" alt="pic" />
          </div>
        </div>
        <div className="cardDetailFooter p-3">
          <p className="cardDetailFooter_heading">Sui NFT</p>
          <p className="cardDetailFooter_text">
            <RiLayoutGridFill /> 4 Parcels &nbsp; &nbsp; <FaList /> 4 Items
          </p>
        </div>
      </Modal>
    </>
  );
};

export default AddScenes;
