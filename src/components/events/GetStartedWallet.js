import React from "react";
import { Link } from "react-router-dom";


import "./style.css";

const GetStartedWallet = () => {
  return (
    <>
      <div className="GetStartedWalletAMain">
        <div className="container">
          <div className="row align-item-center">
            <div>
              <p className="mb-0 text-center eventMainHeading">Get Started</p>
              <img alt='pic'/>
              <p className="text-center">
                You can use the MetaMask extension or a hardware{" "}
              </p>
              <p className="text-center">wallet like Ledger Nano S.</p>
              <p className="  ECD_live">
                <Link className="Imgno_Link">Connect</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStartedWallet;
