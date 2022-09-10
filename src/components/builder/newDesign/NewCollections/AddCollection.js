import React, { useState, useRef } from "react";
import "../../../../assests/styles/newDesign/style.css";
import "../../../../assests/styles/newDesign/utility.css";
import { CardRectangle } from "../CardRectangle";
import { dummyData1 } from "../../../Middleware/dummyData";
import redShirt from "../../../../assests/images/redShirt.png";
// import { Footer } from './../../Layouts/Footer'
import { Modal } from "react-bootstrap";
import { ReactComponent as Union } from "../../../../assests/images/svg/Union.svg";
import { CollectionData } from "../../../Middleware/dummyData";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showSideBarAction } from "../../../store/SideBarAuth";
import { ImCross } from "react-icons/im";
// import {IoMaleFemaleOutline } from 'react-icons/io';
import { BsFillCameraFill, BsGenderMale, BsGenderFemale, BsFillTriangleFill } from "react-icons/bs";
import { SelectField, Field } from "decentraland-ui";
import { TbCircleDot } from "react-icons/tb";
import { FaChromecast } from "react-icons/fa";
import NewCollectionModal from "./NewCollectionModal";
const AddCollections = ({ onRefetch }) => {
  const [ItemModal, setItemModal] = useState(false);
  const [ItemModalDetail, setItemModalDetail] = useState(false);
  const [collectionModal, setCollectionModal] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const nameRef = useRef("");
  const history = useHistory();
  const dispatch = useDispatch();
  const CloseItemModalDetail = () => {
    setItemModalDetail(false);
  };
  const ShowItemModalDetail = () => {
    setItemModalDetail(true);
    setItemModal(false);
  };
  const handleNewCollection = (id, index) => {
    if (id === 1 && index === 0) {
      setItemModal(true);
    } else {
      setCollectionModal(true);
    }
  };
  const CloseItemModal = () => {
    setItemModal(false);
  };

  const CloseCollectionModal = () => {
    setCollectionModal(false);
  };
  const handleNameChar = (e) => {
    const charLength = nameRef.current.value.length;

    if (charLength <= 32) {
      setNameInput(e.target.value);
    }
  };

  const collectionHandler = () => {
    let pageId = 1;
    if (CollectionData.length === 0) {
      let payload = {
        id: 1,
        name: nameInput,
      };

      CollectionData.push(payload);
    } else {
      let lastId = CollectionData[CollectionData.length - 1].id;
      let payload = {
        id: lastId + 1,
        name: nameInput,
      };
      pageId = lastId + 1;
      CollectionData.unshift(payload);
    }
    history.push(`/Collections/:${pageId}`);
    dispatch(showSideBarAction.closeSideBar());
  };
  // ----------------------------------------------------
  const metaGlassHandler = () => {
    history.push("/metaGlass");
  };
  // ---------------------------------------------------------------
  return (
    <>
      <div className="uploadSection mb-5">
        <h2 className="ColorWhite mt-4">No Items</h2>
        <p className="text-center">
          You have no items or collections yet. Create a new item or
          <br /> collection, and dress the Metaverse in style.
        </p>
        <div className="uploadSectionItem pb-5">
          {dummyData1.map((data, i) => (
            <CardRectangle key={data?.id} handleNewCollection={() => handleNewCollection(data?.id, i)}>
              <img src={data?.img} alt="item pic" />
              <h6 className="m-0 ColorWhite">{data?.name}</h6>
            </CardRectangle>
          ))}
        </div>
      </div>
      {/* <Footer /> */}
      <Modal show={ItemModal} onHide={CloseItemModal} centered>
        <div className="sceneModal">
          <div>
            <h5 className="text-center ColorWhite">New Item</h5>
            <p className="text-center text-light-gray pt-1">You can add new item here.</p>
          </div>
          <div className="uploadFile">
            <div className="Arrow" onClick={ShowItemModalDetail}>
              <Union />
            </div>
            <p className="text-light-gray text-center">Drag your Asset file in ZIP, GLTF, GLB, ZIP, Png Format or</p>
            <input type="file" className="bg-transparent text-light-mehroon" />
          </div>
        </div>
      </Modal>
      <Modal show={collectionModal} onHide={CloseCollectionModal} centered>
        <div className="sceneModal">
          <h5 className="ColorWhite text-center">New Collection</h5>
          <p className="text-light-gray">Enter a descriptive name for your new collection</p>
          <div className="InputForm">
            <label className="text-light-gray" htmlFor="name">
              NAME
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={nameInput}
              placeholder="Enter Collection Name..."
              onChange={handleNameChar}
              ref={nameRef}
            />
            <p className="text-light-gray">The name can be 32 characters at most</p>
          </div>
          <div className="sceneModalBtns">
            <button onClick={CloseCollectionModal} className="simpleBtn btn-larger">
              Cancel
            </button>
            <button
              //  onClick={collectionHandler}
              onClick={metaGlassHandler}
              className="btn btn-larger"
            >
              Create
            </button>
          </div>
        </div>
      </Modal>
      {/* -----------------------------Modal New Item Detail------------------------------------------- */}
      <Modal show={ItemModalDetail} size="lg" onHide={CloseItemModalDetail} centered>
        <div className="sceneModal">
          <div className="d-flex  w-100">
            <div className="text-end text-white w-100 fs-2 ml-4">New Item</div>
            <div className="text-end text-white w-75 ">
              <span className="cursor-pointer" onClick={CloseItemModalDetail}>
                {" "}
                <ImCross />
              </span>
            </div>
          </div>
          <div className="uploadFileDetail w-100  rounded">
            <div className="row">
              <div className="col-md-4">
                <div>
                  <img className="img-fluid" src={redShirt} alt="..." />
                  <span className="text-end text-secondary fs-2 px-2">
                    {" "}
                    <BsFillCameraFill />
                  </span>
                </div>
                <p className="text-secondary fs-4 px-2">
                  <BsFillTriangleFill />
                  &nbsp; 54381 triangles
                </p>
                <p className="text-secondary fs-4 px-2">
                  <TbCircleDot /> 1 material
                </p>
                <p className="text-secondary fs-4 px-2">
                  <FaChromecast /> 1 texture
                </p>
              </div>
              <div className="col-md-8">
                <p className=" text-secondary fs-4 ">Select the body shape for your item</p>
                <div className="pt-2 pb-3">
                  &nbsp;&nbsp;
                  <button className="p-2 px-4 text-secondary bg-transparent fs-3 rounded border border-secondary">
                    Both
                  </button>
                  &nbsp;&nbsp;
                  <button className="p-2 px-4 text-secondary bg-transparent fs-3 rounded border border-secondary">
                    {" "}
                    <BsGenderMale /> Male
                  </button>
                  &nbsp;&nbsp;
                  <button className="p-2 px-4 text-secondary bg-transparent fs-3 rounded border border-secondary">
                    <BsGenderFemale /> Female
                  </button>
                </div>

                <Field label="Enter a name for your item" placeholder="T shirt" />
                <SelectField
                  label="How rare is this item?"
                  placeholder="Placeholder"
                  options={[
                    { key: 1, text: "Epic", value: 1 },
                    { key: 2, text: "Choice 2", value: 2 },
                    { key: 3, text: "Choice 3", value: 3 },
                  ]}
                  onChange={(_, a) => console.log(a)}
                />
                <p className="text-white fs-5">
                  <span>Learn more</span> about rarities
                </p>
                <SelectField
                  label="What's the category of this item?"
                  placeholder="Placeholder"
                  options={[
                    { key: 1, text: "Feet", value: 1 },
                    { key: 2, text: "Choice 2", value: 2 },
                    { key: 3, text: "Choice 3", value: 3 },
                  ]}
                  onChange={(_, a) => console.log(a)}
                />
              </div>
            </div>
          </div>
          <div className="text-end">
            <button className="btnStyle border-0 text-white rounded p-3 px-4 fs-3">CREATE</button>
          </div>
        </div>
      </Modal>
      <NewCollectionModal show={collectionModal} setShow={setCollectionModal} onSuccess={onRefetch} />
    </>
  );
};

export default AddCollections;
