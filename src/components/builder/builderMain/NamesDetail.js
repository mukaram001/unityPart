import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ethers } from "ethers";
import { IoIosArrowBack } from "react-icons/io";

import BuilderNavbar from "../../navbars/BuilderNavbar";
import BuilderFooter from "../../footers/BuilderFooter";
import DetailPic from "../../../assests/images/NamesPic.svg";
import BuilderAll from "./BuilderAll";
import Navbar from "../../navbars/Navbar";
import "./style.scss";
import { Field, Loader } from "decentraland-ui";
import { createNewNameRequest } from "../../../services/requests";
import { useMoralis } from "react-moralis";
import { NAME_CONTRACT_ADDRESS } from "../../../config/contracts";
import erc20Abi from "../../../config/abis/ERC20.json";
import { useEffect } from "react";
import tokens from "../../../config/tokens";

const NamesDetail = () => {
  const { Moralis, account, isWeb3Enabled, chainId } = useMoralis();
  const tokenAddress = tokens.idea.address[parseInt(chainId, 16)];
  const history = useHistory();
  const [nameInput, setNameInput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isApproved, setApproved] = useState(false);
  useEffect(() => {
    const fetchTokenAllowance = async () => {
      try {
        const allowance = await Moralis.executeFunction({
          chain: "eth",
          contractAddress: tokenAddress,
          functionName: "allowance",
          abi: erc20Abi,
          params: {
            _owner: account,
            spender: NAME_CONTRACT_ADDRESS,
          },
        });
        if (Number(allowance) > 0) {
          setApproved(true);
        }
      } catch (e) {
        console.log(e);
      }
    };
    isWeb3Enabled && fetchTokenAllowance();
  }, [account]);
  const onClaimHandler = async () => {
    try {
      setLoading(true);
      const data = {
        nft: {
          name: nameInput,
          category: "ens",
          data: {
            ens: {
              subdomain: nameInput,
            },
          },
        },
      };
      await createNewNameRequest(data);
      setLoading(false);
      setNameInput("");
      setError("");
      history.push("/Names");
    } catch (e) {
      setError(e?.response?.data?.message);
      setLoading(false);
    }
  };
  const handleNameChange = (e) => {
    setError("");
    setNameInput(e.target.value);
  };

  const btnhandler = async () => {
    try {
      // Approve Token
      const transaction = await Moralis.executeFunction({
        chain: "eth",
        contractAddress: tokenAddress,
        functionName: "approve",
        abi: erc20Abi,
        params: {
          spender: NAME_CONTRACT_ADDRESS,
          amount: isApproved ? 0 : ethers.constants.MaxUint256,
        },
      });
      // Wait until the transaction is confirmed
      await transaction.wait();
      setApproved(!isApproved);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {/* <BuilderNavbar /> */}
      <Navbar />
      <div className="row m-0 vh-100">
        <div className="col-md-2 bilderAllMain">
          <BuilderAll />
        </div>
        <div className="col-md-10 p-0 AddScenesMain">
          {/* ----------------------------------------------------------------- */}

          <div className="">
            <p className="backIcon ">
              <Link to="/Names" className="backIconLink">
                <IoIosArrowBack />
              </Link>
            </p>
          </div>
          <div className="row m-0 p-5">
            <div className="col-md-4 text-center">
              <img src={DetailPic} alt="nameDetailPic" />
            </div>
            <div className="col-md-8 p-0">
              <p className="detailHeading">Claim a unique Name</p>
              <p className="detailText">
                {" "}
                Unique names can be assigned to your avatar for use as an alias, or they can be assigned to parcels.
              </p>
              <p className="detailText">
                Assigning a name to a parcel or estate allows you to create a unique URL, like https://name.dcl.eth,
                making it easy to send people to your LAND. When someone follows your new URL, they will be redirected
                to your LAND
                {/* <Link className="NamesLink">Our Game!</Link> */}
              </p>
              <p className="detailText">
                Names are only available in Ethereum, and can only be claimed with Ethereum MANA
                {/* <br /> <img src={HexagonIcon} alt="hexagonIcon" /> */}
              </p>{" "}
              <div>
                <div className="detaillabel">NAME</div>
                <Field
                  placeholder="Type name here"
                  message={error}
                  className="detailInput"
                  error={error}
                  value={nameInput}
                  onChange={handleNameChange}
                />
              </div>
              <p className="detaillabel pt-4">
                Authorize the
                {/* <Link className="NamesLink">DCLController</Link>{" "} */}
                DCLController contract to operate {tokens.idea.symbol} on your behalf
              </p>
              <label class="switch mt-3">
                <input type="checkbox" checked={isApproved} onChange={btnhandler} />
                <span class="slider round"></span>
              </label>{" "}
              <span className="detaillabel pt-4">{tokens.idea.symbol} APPROVED</span>
              <div className="pb-5 pt-5">
                <button className=" detailbtns">
                  <Link className="detailbtnsLink" to="/Names">
                    Cancel
                  </Link>
                </button>
                <button
                  className=" detailbtnstylish position-relative"
                  onClick={onClaimHandler}
                  disabled={loading || error || nameInput.length < 1}
                >
                  {!loading ? (
                    "CLAIM"
                  ) : (
                    <div className="m-3">
                      <Loader active size="mini" />
                    </div>
                  )}

                  {/* <Link className="detailbtnsLink">CLAIM 100</Link> */}
                </button>
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------------------------------------- */}
          <BuilderFooter />
        </div>
      </div>
    </>
  );
};

export default NamesDetail;
