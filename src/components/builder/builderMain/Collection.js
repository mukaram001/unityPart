import React, { useState, useEffect } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { IoIosArrowBack, IoMdAdd } from "react-icons/io";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import BuilderNavbar from "../../navbars/BuilderNavbar";

import Select from "react-select";
import ReactSelect from "react-select";

import motu from "../../../assests/images/motu.png";
import fortmatic from "../../../assests/images/formnamtic.png";
import walletConnect from "../../../assests/images/wallectConnect.png";
import Coinbase from "../../../assests/images/wallet.svg";
import { IoMdClose } from "react-icons/io";
// ---------------------------------------------
import { ReactComponent as Add } from "../../../assests/images/svg/add.svg";
import AddCollections from "../newDesign/NewCollections/AddCollection";
import CollectionsList from "../newDesign/NewCollections/CollectionsList";
import { CollectionData } from "../../Middleware/dummyData";

import "../../../assests/styles/newDesign/style.css";
import "../../../assests/styles/newDesign/utility.css";

// ------------------------------------------------
// import "./style.css";
import "../style.css";
import { useUser } from "../../store/hooks";
import SigninMessage from "./SigninMessage";
import BuilderAll from "./BuilderAll";
import BuilderFooter from "../../footers/BuilderFooter";
import Navbar from "../../navbars/Navbar";
import NewCollectionModal from "../newDesign/NewCollections/NewCollectionModal";
import { getAllCollectionsRequest } from "../../../services/requests";

const Collection = () => {
  const [showsignIn, setShowsignIn] = useState(false);
  const handleClose = () => {
    setShowsignIn(false);
  };
  const handleShowModal = () => {
    setShowsignIn(true);
    setShow(false);
  };
  const values = [true, "sm-down", "md-down", "lg-down", "xl-down", "xxl-down"];
  const [show, setShow] = useState(false);
  const user = useUser();
  const [fullscreen, setFullscreen] = useState(true);
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  // --------------------------------------------
  const [openSceneModal, setOpenSceneModal] = useState(false);
  const [inputScene, setInputScene] = useState({
    name: "",
    description: "",
  });

  const [checkCollections, setCheckCollection] = useState(false);
  const [openNewCollectionModal, setOpenNewCollectionModal] = useState(false);
  const [collectionsData, setCollectionsData] = useState([]);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllCollectionsRequest();
        setCollectionsData(result?.data?.results);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [refetch]);

  useEffect(() => {
    if (collectionsData.length > 0) {
      setCheckCollection(true);
    }
  }, [collectionsData]);

  const onRefetch = () => {
    setRefetch(!refetch);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputScene({
      ...inputScene,
      [name]: value,
    });
  };

  const closeSceneModal = () => {
    setOpenSceneModal(false);
  };
  const handleSceneModal = () => {
    console.log(inputScene);
  };
  const AddCollectionHandler = (id) => {
    console.log(id, "id");
  };

  // --------------------------------------------------------------

  const [shape, setShape] = useState(false);
  const showShading = () => {
    setShape((prev) => !prev);
  };
  // ------------------------------------------
  const arr = [
    { value: "", text: "--Choose an option--" },
    { value: "apple", text: "Apple 🍏" },
    { value: "banana", text: "Banana 🍌" },
    { value: "kiwi", text: "Kiwi 🥝" },
  ];
  return (
    <div className="vh-100">
      {/* <BuilderNavbar /> */}
      <Navbar />
      {/* --------------------------------------------------------------------------------- */}

      <div className="row m-0">
        <div className="col-md-2 bilderAllMain">
          <BuilderAll />
        </div>
        <div className="col-md-10 AddScenesMain vh-100">
          {!user.user ? (
            <SigninMessage />
          ) : (
            <div className=" ">
              <div className="mainContainer">
                <div className="firstSection">
                  <p className="text-light-gray">{`${CollectionData.length} Results`}</p>
                  <div className="rightSide">
                    <button className="btn" onClick={() => handleShow()}>
                      OPEN EDITOR
                    </button>
                    <div onClick={() => setOpenNewCollectionModal(true)} className="add">
                      <Add />
                    </div>
                  </div>
                </div>
                {checkCollections && <CollectionsList CollectionData={collectionsData} />}
                {!checkCollections && <AddCollections onRefetch={onRefetch} />}
                <NewCollectionModal
                  show={openNewCollectionModal}
                  setShow={setOpenNewCollectionModal}
                  onSuccess={onRefetch}
                />
              </div>
            </div>
          )}
          <BuilderFooter />
        </div>
      </div>

      {/* -------------------------------------open editor modal------------------------------------------------------ */}

      <Modal
        className="p-3"
        show={show}
        onHide={() => setShow(false)}
        size="lg"
        backdrop="static"
        fullscreen={values}
        centered
      >
        <div className="container-fluid ">
          <div className="row ">
            <div className="col-md-3 p-0 ">
              <div className="newItemLeft_Main ">
                <div className="container">
                  <div className="d-flex justify-content-between pt-4 ">
                    <div>
                      <Link>
                        {" "}
                        <span
                          className="backIcon_modal modalIcon"
                          onClick={() => {
                            setShow(false);
                          }}
                        >
                          <IoIosArrowBack />{" "}
                        </span>
                      </Link>
                    </div>
                    <div>
                      <p className="pt-2 text-white item_modal_heading">My Items</p>
                    </div>
                    <div>
                      <Link>
                        {" "}
                        <span className="modalIcon plusIcon_modal" onClick={handleShowModal}>
                          {" "}
                          <IoMdAdd />{" "}
                        </span>
                      </Link>
                    </div>
                  </div>{" "}
                  <hr className="underLine" />
                  <div className="d-flex justify-content-between pt-5">
                    <Button variant="secondary" className=" modal_ItembtnNext w-100">
                      COLLECTIONS
                    </Button>
                    <span> &nbsp;&nbsp;&nbsp;&nbsp;</span> <button className=" modal_ItembtnNextIn w-100">ITEMS</button>
                  </div>
                  <div className="viewHeight d-flex align-items-center">
                    <p className="text-white text-center">
                      You have no items or collection yet. Create a new item or collection, and dress the metaverse in
                      style!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-0 ">
              <div className="newItemMiddle_Main">
                <div className="p-4 pl-5">
                  <button className="idle" style={{ padding: "3px 10px 8px" }} onClick={showShading}>
                    <BsFillPersonFill />
                  </button>
                  &nbsp; &nbsp;
                  <Dropdown className="d-inline ">
                    <Dropdown.Toggle className="idle" id="dropdown-basic">
                      IDLE
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="bg-transparent border-0">
                      <Dropdown.Item href="#/action-1"></Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="text-center ">
                  <img src={motu} className="viewHeightImg " alt="pic" />
                </div>
              </div>
              {shape && (
                <div className="sliderUp closeUp">
                  <div className="pt-1">
                    <label className="shapeLabel fs-6">Body Shape</label>

                    <ReactSelect
                      name="question"
                      className="react-select  pt-2"
                      classNamePrefix="react-select"
                      // isSearchable={false}
                      placeholder={<div className="select-placeholder-text">Select ...</div>}
                      // value={forgetFormik.values.question}
                      options={arr.value}
                      // onChange={(question) =>
                      // forgetFormik.setFieldValue("question", question)
                      // }
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="col-md-3 p-0 ">
              <div className="container">
                <p className="text-white p-2 pt-4 item_modal_heading">Properties</p>
                <hr className="underLine" />
                <div>
                  <Dropdown>
                    <Dropdown.Toggle className="bg-transparent" id="dropdown-basic">
                      DETAILS
                    </Dropdown.Toggle>

                    <Dropdown.Menu className=" idle border-0">
                      <Dropdown.Item href="#">Action</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div>
                  <Dropdown>
                    <Dropdown.Toggle className="bg-transparent" id="dropdown-basic">
                      BASICS
                    </Dropdown.Toggle>

                    <Dropdown.Menu className=" idle border-0">
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div>
                  <Dropdown>
                    <Dropdown.Toggle className="bg-transparent" id="dropdown-basic">
                      TAGS
                    </Dropdown.Toggle>

                    <Dropdown.Menu className=" idle border-0">
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* --------------------Sign In Modal------------------------------- */}
      <Modal
        show={showsignIn}
        onHide={handleClose}
        centered
        backdrop="static"
        size="lg"
        keyboard={false}
        className="modalMain"
      >
        <Modal.Body className="p-5">
          <div>
            <p className="text-end text-white mb-0 fs-5">
              <span style={{ cursor: "pointer" }} onClick={handleClose}>
                <IoMdClose />
              </span>
            </p>
            <p className="text-center text-white modalHeading  ">Sign In</p>
            <p className="text-center modal_subtext_color">Choose how you want to connect to Ethereum.</p>
          </div>
          {/* <div
            className="d-flex metaCardMain "
            //  onClick={btnhandler}
          >
            <div className="d-flex align-items-center">
              <img src={MetaMask} alt="pic" className="metaImg" />
            </div>
            <div className="d-flex align-items-center">
              <div className="p-2">
                <p className="mb-0 text-white metaHeading">MetaMask</p>
                <p className="modal_subtext_color">Using a browser extension</p>
              </div>
            </div>
          </div> */}
          {/* --------------------------------------------------------- */}
          <div className="d-flex metaCardMain">
            <div className="d-flex align-items-center">
              <img src={fortmatic} alt="pic" className="metaImg" />
            </div>
            <div className="d-flex align-items-center">
              <div className="p-2">
                <p className="mb-0 text-white metaHeading">Fortmatic</p>
                <p className="modal_subtext_color">Using your email</p>
              </div>
            </div>
          </div>
          {/* --------------------------------------------------------- */}
          <div className="d-flex metaCardMain">
            <div className="d-flex align-items-center">
              <img src={walletConnect} alt="pic" className="metaImg" />
            </div>
            <div className="d-flex align-items-center">
              <div className="p-2">
                <p className="mb-0 text-white metaHeading">WalletConnect</p>
                <p className="modal_subtext_color">Using a mobile wallet</p>
              </div>
            </div>
          </div>
          {/* --------------------------------------------------------- */}
          <div className="d-flex metaCardMain">
            <div className="d-flex align-items-center">
              <img src={Coinbase} alt="pic" className="metaImg" />
            </div>
            <div className="d-flex align-items-center">
              <div className="p-2">
                <p className="mb-0 text-white metaHeading">Coinbase Wallet</p>
                <p className="modal_subtext_color">Using your mobile or browser extension</p>
              </div>
            </div>
          </div>
          {/* --------------------------------------------------------- */}
          <div className="text-center text-white">
            <p className="modalFooter">
              Trezor and smart contract wallets like Dapper, Argent or Gnosis safe, do not work with Polygon. Read more
              about the Trezor support status{" "}
              <Link className="here">
                <strong>here</strong>
              </Link>{" "}
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Collection;
