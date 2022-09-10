import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { IoIosArrowBack, IoMdAdd } from "react-icons/io";

import shirt from "../../assests/images/shirt-1 1.png";
import PriceModalInputImg from "../../assests/images/priceModalInputImg.png";
import PriceModalInputImg2 from "../../assests/images/priceModalInputImg2.png";
import BuilderFooter from "../footers/BuilderFooter";
import BuilderNavbar from "../navbars/BuilderNavbar";
import { BsThreeDots } from "react-icons/bs";
import boxIcon from "../../assests/images/boxIcon.png";

import "./style.css";
import Navbar from "../navbars/Navbar";

const MetaGlassItem = () => {
  const [publisShow, setPublihShow] = useState(false);
  const publishHandler = () => {
    setPublihShow(true);
  };
  const publishHandlerClose = () => {
    setPublihShow(false);
  };
  const [priceShow, setPriceShow] = useState(false);
  const priceHandler = () => {
    setPriceShow(true);
    setPublihShow(false);
  };
  const priceHandlerClose = () => {
    setPriceShow(false);
  };
  return (
    <>
      <div className="">
        {/* <BuilderNavbar /> */}
        <Navbar/>
        <div className="metaGlassMain  padddingTop_nav">
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex">
                &nbsp; &nbsp;
                <Link to="/metaGlass">
                  {" "}
                  <span
                    className="backIcon_modal modalIcon p-3"
                    //   onClick={() => {
                    //     setShow(false);
                    //   }}
                  >
                    <IoIosArrowBack />{" "}
                  </span>
                </Link>
                &nbsp; &nbsp;
                <span className="text-white d-flex align-items-center metaGlassHeading">
                  Meta Glasses
                </span>
              </div>
              <div className="col-md-6 d-flex align-items-center justify-content-end">
                <div className="text-end">
                  &nbsp;&nbsp;{" "}
                  <button className="metaglassAddBtn btnStyle text-center">
                    Add Item <IoMdAdd />
                  </button>
                  &nbsp;&nbsp; <button className="prevBtn">PREVIEW</button>
                  &nbsp;&nbsp;
                  <button
                    className="btnStyle publishBtn"
                    onClick={publishHandler}
                  >
                    PUBLISH
                  </button>
                  &nbsp;&nbsp;
                  <button className="dotsBtn">
                    <BsThreeDots />
                  </button>
                </div>
              </div>
            </div>
            {/* -----------------------------------------Add components----------------------- */}
            <div className="row  heightAdjustment">
              <div className="col-md-12 p-4 ">
                <div className="tableAdjustment p-3">
                  <table className="w-100 text-white">
                    <thead>
                      <tr className="tableHeadingMain">
                        <th className="tableHead px-3">Items</th>
                        <th className="tableHead"></th>
                        <th className="tableHead">Rarity</th>
                        <th className="tableHead">Category</th>
                        <th className="tableHead">Price</th>
                        <th className="tableHead">Status</th>
                        <th className="tableHead"></th>
                      </tr>
                    </thead>
                    <tbody className="">
                      <tr className="tbodyHeight">
                        <td className="">
                          <div className="itemImg text-center">
                            <img
                              alt="pic"
                              src={shirt}
                              className="shirtSetting"
                            />
                          </div>
                        </td>
                        <td className="tabledata text-white">Yoga Pants</td>
                        <td>
                          {" "}
                          <button className="tableBtn1 tableItemBtn">
                            RARE
                          </button>
                        </td>
                        <td className="tabledata">
                          <strong>Eyes</strong>
                        </td>
                        <td>
                          <button className="tableBtn3"  onClick={priceHandler}>
                            <img
                              src={boxIcon}
                              className=" tableBtn3Img"
                              alt="pic"
                            />
                            &nbsp; <span className="text-white">0.1</span>
                            <span className="tabledata"> ($694.14)</span>
                          </button>
                        </td>
                        <td className=" tabledata">
                          <input name="" type="radio" id="test1" />
                          <label for="test1" className="done">&nbsp; Done</label>
                        </td>
                        <td>
                          <button className="dotsBtn">
                            <BsThreeDots />
                          </button>
                        </td>
                      </tr>
                      <tr className="tbodyHeight">
                        <td className="">
                          {" "}
                          <div className="itemImg text-center">
                            <img
                              alt="pic"
                              src={shirt}
                              className="shirtSetting"
                            />
                          </div>
                        </td>
                        <td className="tabledata text-white">Meta glasses</td>
                        <td>
                          <button className="tableBtn2 tableItemBtn">
                            LEGENDARY
                          </button>
                        </td>
                        <td className="tabledata">
                          <strong>Eyes</strong>
                        </td>
                        <td>
                          {" "}
                          <button className="tableBtn3"  onClick={priceHandler}>
                            <img
                              src={boxIcon}
                              className=" tableBtn3Img"
                              alt="pic"
                            />
                            &nbsp; <span className="text-white">0.1</span>
                            <span className="tabledata"> ($694.14)</span>
                          </button>
                        </td>
                        <td className="done tabledata">
                          <input name="" type="radio" id="test1" />
                          <label for="test1">&nbsp; Done</label>
                        </td>
                        <td>
                          <button className="dotsBtn">
                            <BsThreeDots />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footerBg">
          <BuilderFooter />
        </div>
      </div>
      {/* ------------------------Publish collection Modal------------------------- */}
      <Modal
        className="p-5"
        show={publisShow}
        centered
        onHide={publishHandlerClose}
        size="lg"
        // backdrop="static"
        // keyboard={false}
      >
        <div
          className="p-3 px-4"
          style={{ background: "#241A46", borderRadius: "5px" }}
        >
          <div className="text-white text-center">
            <p className="modal_heading mb-0 text-white">Publish Collection</p>
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <p className="modalPublish_text">
                  You are about to publish a collection with 1 item. In order to
                  support the growth of the community, there is publication fee
                  of 150.0 USD per item (Paid in MANA) that goes to the DAO and
                  the Curation Committee.
                </p>
              </div>
            </div>
            <Link className="text-decoration-none">
              <p className="publishStylishText">
                Learn more about the publication fee.
              </p>
            </Link>
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <p className="modalPublish_text ">
                  - Total in MANA is calculated based on the current market
                  prices. This value can slightly change when the transaction is
                  executed.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 p-2">
              <div className="publishModal_card p-2 px-3">
                <p className="modalPublish_text ">Qty. of items</p>
                <p className="modalPublish_text text-white mb-0">1</p>
              </div>
            </div>
            <div className="col-md-3  p-2">
              <div className="publishModal_card p-2 px-3">
                <p className="modalPublish_text ">Fee per item</p>
                <p className="modalPublish_text text-white mb-0">USD 150.0</p>
              </div>
            </div>
            <div className="col-md-3 p-2">
              <div className="publishModal_card p-2 px-3">
                <p className="modalPublish_text ">Total in USD</p>
                <p className="modalPublish_text text-white mb-0">USD 150.0</p>
              </div>
            </div>
            <div className="col-md-3 p-2">
              <div className="publishModal_card p-2 px-3">
                <p className="modalPublish_text ">Total in MANA</p>
                <p className="modalPublish_text text-white mb-0">144.91</p>
              </div>
            </div>
          </div>
          <div className="text-center pt-2">
            <button
              variant="primary"
              className=" Publishmodal_btn "
             
            >
              Next
            </button>
          </div>
          <div className="row pt-3">
            <div className="col-md-8 offset-md-2">
              <p className="text-center modalPublish_text">
                You don’t have enough
                <Link className="text-decoration-none">
                  <strong className="mana"> MANA</strong>{" "}
                </Link>
                to publish this collection. You can get more using the Account
                dapp.
              </p>
            </div>
          </div>
        </div>
      </Modal>
      {/* -------------------------------------------------- */}
      {/* --------------------------------Set Price Modal------------------------------------- */}
      <Modal
        className="p-5"
        show={priceShow}
        centered
        onHide={priceHandlerClose}
        // size="lg"
        // backdrop="static"
        // keyboard={false}
      >
        <div
          className="p-3 px-4"
          style={{ background: "#241A46", borderRadius: "5px" }}
        >
          <div className="text-white text-center">
            <p className="modal_heading mb-0 fs-4">Set Price</p>
          </div>
          <div>
            <p className="modalPublish_text mb-0">Price</p>
            <div className="position-relative">
              <span className="position-absolute pt-2 px-2">
                <img src={PriceModalInputImg} alt="pic" />
              </span>
              <input
                className="priceModalInput w-100 p-2 px-5 "
                placeholder="0.1"
              />
            </div>
            <div className="d-flex align-items-center">
              {" "}
              <p>
                <label class="switch mt-3">
                  <input type="checkbox" onChange="" />
                  <span class="slider round"></span>
                </label>{" "}
              </p>
              <p className="modalPublish_text mb-0"> &nbsp;Make it free</p>
            </div>
          </div>
          <div>
            <p className="modalPublish_text mb-0">Beneficiery</p>
            <div className="position-relative">
              <input
                className="priceModalInput w-100 p-2 pr-5"
                placeholder="0xCf05a09F3D05f46cE68e16C102666938666d"
              />
              <span
                className="position-absolute  pt-2 p-2"
                style={{ right: "8px" }}
              >
                <img src={PriceModalInputImg2} alt="pic" />
              </span>
            </div>
            <div className="d-flex align-items-center">
              {" "}
              <p>
                <label class="switch mt-3">
                  <input type="checkbox" onChange="" />
                  <span class="slider round"></span>
                </label>{" "}
              </p>
              <p className="modalPublish_text mb-0">
                {" "}
                &nbsp;I’m the beneficiery
              </p>
            </div>
          </div>
          <div className="priceTextBody p-3">
            <p className="modalPublish_text mb-0 text-center">
              Keep in mind that the minimum amount supported for costless
              transactios is 1.0 MANA. If your item costs less than that, the
              buyer will need to cover the transaction cost in MATIC.
            </p>
          </div>
          <div className="text-center pt-3 ">
            <button
              variant="primary"
              className=" Publishmodal_btn w-100"
              //   onClick={handleShowTwo}
            >
              Save
            </button>
          </div>
        </div>
      </Modal>
      {/* -------------------------------------------------- */}
    </>
  );
};

export default MetaGlassItem;
