import React,{useState} from "react";
import { Link } from "react-router-dom";
import BuilderFooter from "../footers/BuilderFooter";
import BuilderNavbar from "../navbars/BuilderNavbar";
import { IoIosArrowBack, IoMdAdd } from "react-icons/io";
import Modal from "react-bootstrap/Modal";
import { BsThreeDots } from "react-icons/bs";
import "./style.css";
import Navbar from "../navbars/Navbar";
const MetaGlasses = () => {
  const [publisShow, setPublihShow] = useState(false);
  const publishHandler = () => {
    setPublihShow(true);
  };
  const publishHandlerClose = () => {
    setPublihShow(false);
  };
  return (
    <div className="">
      {/* <BuilderNavbar /> */}
      <Navbar/>
      <div className="metaGlassMain pt-5 ">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex">
              &nbsp; &nbsp;
              <Link>
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
                &nbsp;&nbsp; <button className="prevBtn">PREVIEW</button>
                &nbsp;&nbsp;
                <button className="btnStyle publishBtn" onClick={publishHandler}>PUBLISH</button>
                &nbsp;&nbsp;
                <button className="dotsBtn">
                  <BsThreeDots />
                </button>
              </div>
            </div>
          </div>
          {/* -----------------------------------------Add components----------------------- */}
          <div className="row align-items-center heightAdjustment">
            <div className="col-md-6 offset-md-3 text-center">
              <p className="text-white textStylish fs-3">
              <strong>
                <span className="textStylish">Loooking</span>
                <span className="textStylish"> Good!</span></strong>
              </p>
              <p className=" fs-5" style={{color:'#695F81'}}>
                You have no items or collections yet. Create a new item or
                collection, and dress the Metaverse in style.
              </p>
              <Link to='/add_item'><button className="metaglassAddBtn btnStyle text-center">
                Add Item <IoMdAdd />
              </button></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footerBg">
        <BuilderFooter />
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
              // onClick={priceHandler}
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


    </div>
  );
};

export default MetaGlasses;
