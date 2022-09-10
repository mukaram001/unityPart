import React from "react";
import { useHistory } from "react-router-dom";

import "./docs.css";

const DocsSectionOne = () => {

  const history=useHistory();
  const DocPages=()=>{
    history.push('/FQA')
  }

  return (
    <>
      <p className="docMainHeading">Loerm documentation</p>
      <p className="docSubText">
        Find help about the various topics in each of these sections
      </p>
      <div className="container">
        <div className="row pt-4">
          <div className="col-md-3" onClick={DocPages}>
            <div className="DocsCardMain bgColorOne">
            <div>
              <p className="docCaardTextOne text-center mb-0">World</p>
              <p className="docCardTextTwo text-center">
                Learn to build and share your creations.
              </p></div>
            </div>
          </div>
          {/* ---------------------------------------------------------------------------------------------- */}
          <div className="col-md-3" onClick={DocPages}>
            <div className="DocsCardMain bgColorTwo btnanimated">
            <div className="text-center">
              <p className="docCaardTextOne text-center mb-0">World</p>
              <p className="docCardTextTwo">
                Learn to build and share your creations.
              </p></div>
            </div>
          </div>
          {/* ---------------------------------------------------------------------------------------------- */}
          <div className="col-md-3">
            <div className="DocsCardMain bgColorThree btnanimated">

            <div className="text-center">
              <p className="docCaardTextOne text-center mb-0">World</p>
              <p className="docCardTextTwo">
                Learn to build and share your creations.
              </p></div>
            </div>
          </div>
          {/* ---------------------------------------------------------------------------------------------- */}
          <div className="col-md-3">
            <div className="DocsCardMain bgColorFour btnanimated">
            <div className="text-center">
              <p className="docCaardTextOne text-center mb-0">World</p>
              <p className="docCardTextTwo">
                Learn to build and share your creations.
              </p></div>
            </div>
          </div>
          {/* ---------------------------------------------------------------------------------------------- */}
        </div>
      </div>
    </>
  );
};

export default DocsSectionOne;
