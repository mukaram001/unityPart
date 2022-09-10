import React, { useState, useRef, useEffect, useMemo } from "react";
import "../../../../assests/styles/newDesign/style.css";
import "../../../../assests/styles/newDesign/utility.css";
import { CardRectangle } from "../CardRectangle";
import { dummyData1 } from "../../../Middleware/dummyData";
import img1 from "../../../../assests/images/jecket.png";
// import { Footer } from './../../Layouts/Footer'
import { Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Field, Loader } from "decentraland-ui";
import { createNewCollectionRequest } from "../../../../services/requests";

const NewCollectionModal = ({ show, setShow, onSuccess }) => {
  const [ItemModal, setItemModal] = useState(false);
  const [collectionModal, setCollectionModal] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleNewCollection = (id, index) => {
    if (id == 1 && index == 0) {
      setItemModal(true);
    } else {
      setCollectionModal(true);
    }
  };
  const CloseItemModal = () => {
    setItemModal(false);
  };
  const CloseCollectionModal = () => {
    setShow(false);
  };
  const handleNameChange = (e) => {
    setError("");
    setNameInput(e.target.value);
  };
  const collectionHandler = async () => {
    try {
      setLoading(true);
      await createNewCollectionRequest({ name: nameInput });
      setLoading(false);
      setNameInput("");
      setError("");
      CloseCollectionModal();
      onSuccess();
      // history.push(`/Collections/:${pageId}`);
      // dispatch(showSideBarAction.closeSideBar());
    } catch (e) {
      setError(e?.response?.data?.message);
      setLoading(false);
    }
  };

  return (
    <>
      <Modal show={show} onHide={CloseCollectionModal} centered>
        <div className="sceneModal">
          <h5 className="ColorWhite text-center">New Collection</h5>
          <p className="text-light-gray">Enter a descriptive name for your new collection</p>
          <div className="InputForm">
            <Field
              label="Name"
              placeholder="Enter Collection Name..."
              message={error || "The name can be 32 characters at most"}
              error={error}
              value={nameInput}
              onChange={handleNameChange}
            />
          </div>
          <div className="sceneModalBtns">
            <button onClick={CloseCollectionModal} className="simpleBtn btn-larger">
              Cancel
            </button>
            <button
              onClick={collectionHandler}
              disabled={loading || error || nameInput.length < 1}
              className="btn btn-larger position-relative"
            >
              {!loading ? (
                "Create"
              ) : (
                <div className="m-3">
                  <Loader active size="mini" />
                </div>
              )}
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default NewCollectionModal;
