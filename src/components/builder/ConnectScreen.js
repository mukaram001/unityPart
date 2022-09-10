import React, { useState } from "react";
import { FaWallet } from "react-icons/fa";
import { RiMessageLine } from "react-icons/ri";
import { ethers } from "ethers";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link, useHistory } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import MetaMask from "../../assests/images/metamask.svg";
import fortmatic from "../../assests/images/formnamtic.png";
import walletConnect from "../../assests/images/wallectConnect.png";
import Coinbase from "../../assests/images/wallet.svg";
import HomeNavbar from "../navbars/HomeNavbar";
import wallet from '../../assests/images/wallet.png'
import "./style.css";
import BuilderNavbar from "../navbars/BuilderNavbar";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { useMoralis } from "react-moralis";
import { useUser } from "../store/hooks";
import { loginUser } from "../store/user";
import { useAppDispatch } from "../store";
import { signMessage } from "../../utils/helperFunctions";
import { LocalStoragePersistanceService } from "../../persist/LocalStorage";
import { loginRequest } from "../../services/requests";
import Navbar from "../navbars/Navbar";
const localStorage = new LocalStoragePersistanceService();

const ConnectScreen = () => {
  const history = useHistory();
  const { account, enableWeb3, authenticate } = useMoralis();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const user = useUser();
  const dispatch = useAppDispatch();

  // ------------------------------------------
  const [data, setdata] = useState({
    address: "",
    Balance: null,
  });

  const getbalance = (address) => {
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [address, "latest"],
      })
      .then((balance) => {
        setdata({
          Balance: ethers.utils.formatEther(balance),
        });
      });
  };
  const accountChangeHandler = (account) => {
    setdata({
      address: account,
    });
    getbalance(account);
  };
  const connectCoinbaseWallet = async () => {
    try {
      class MoralisWalletLinkProvider {
        walletLink = new WalletLinkConnector({
          appName: "IDEAOLOGY",
          // appLogoUrl: "APP_LOGO_URL",
        });
        async activate() {
          return this.walletLink.activate();
        }
      }
      const web3Provider = new MoralisWalletLinkProvider();
      const web3 = await web3Provider.activate();
      const user = await enableWeb3({
        connector: web3,
      });
      user && handleClose();
    } catch (e) {
      console.log(e);
    }
  };
  const connectWalletHandler = async (provider) => {
    try {
      const user = await authenticate({
        provider,
        signingMessage: `Decentraland Login \n Current Time ${new Date()}`,
      });
      if (!user) {
        console.log("Morlais user not found!");
        return;
      }
      localStorage.setItem("connectorId", provider);
      // Get Signature
      const signature = user.get("authData")?.moralisEth?.signature;
      const message = user.get("authData")?.moralisEth?.data;
      const authToken = signMessage(signature, "1d", { message });
      const result = await loginRequest(authToken);
      dispatch(
        loginUser({
          user: result?.user,
          jwt: result?.accessToken,
        })
      );
      handleClose();
      history.push("/builder_scene");
    } catch (e) {
      console.log(e);
    }
  };

  // ==================================

  return (
    <>
      {/* <BuilderNavbar /> */}
      <Navbar/>
      <div className="" style={{ position: "relative" }}>
        <div className="d-flex justify-content-center align-items-center ConnectMain ">
          <div>
            <p className="text-white text-center pt-3 connectHeading">Get Started</p>
            <div className="d-flex justify-content-center pt-3">
              <div className=" walletBg d-flex justify-content-center align-items-center">
                {/* <FaWallet /> */}
                <img src={wallet} alt='...' />
              </div>
            </div>
            <p className="text-white text-center pt-4 fs-4 connent_text">
              You can use the{" "}
              <a href="https://metamask.io" rel="noreferrer" target="_blank" className="textStylish">
                <strong>MetaMask</strong>
              </a>{" "}
              extension or your email account
            </p>
            <div className="text-center pt-4">
              <button className="connectBtn " onClick={handleShow}>
                CONNECT
              </button>
            </div>
          </div>
        </div>
        <div className="" style={{ position: "absolute" }}>
          <RiMessageLine />
        </div>
      </div>
      {/* ----------------------Modal------------------------------------/ */}
      <Modal show={show} onHide={handleClose} centered backdrop="static" keyboard={false} className="modalMain">
        <Modal.Body>
          <div className="d-flex">
            <div className="w-100">
              <p className="text-center text-white modalHeading  ">Sign In</p>
              <p className="text-center modal_subtext_color">Choose how you want to connect to Ethereum.</p>
            </div>
            <div className="">
              <p className="text-end text-white m-0 fs-5">
                <span style={{ cursor: "pointer" }} onClick={handleClose}>
                  <IoMdClose />
                </span>
              </p>
            </div>
          </div>
          <div className="d-flex p-2 metaCardMain " onClick={() => connectWalletHandler("metamask")}>
            <div className="d-flex align-items-center">
              <img src={MetaMask} alt="pic" className="metaImg" />
            </div>
            <div className="d-flex align-items-center">
              <div className="p-2">
                <p className="mb-0 text-white metaHeading">MetaMask</p>
                <p className="mb-0 modal_subtext_color">Using a browser extension</p>
              </div>
            </div>
          </div>
          {/* --------------------------------------------------------- */}
          <div className="d-flex metaCardMain p-2">
            <div className="d-flex align-items-center">
              <img src={fortmatic} alt="pic" className="metaImg" />
            </div>
            <div className="d-flex align-items-center">
              <div className="p-2">
                <p className="mb-0 text-white metaHeading">Fortmatic</p>
                <p className="mb-0 modal_subtext_color">Using your email</p>
              </div>
            </div>
          </div>
          {/* --------------------------------------------------------- */}
          <div className="d-flex metaCardMain p-2" onClick={() => connectWalletHandler("walletconnect")}>
            <div className="d-flex align-items-center">
              <img src={walletConnect} alt="pic" className="metaImg" />
            </div>
            <div className="d-flex align-items-center">
              <div className="p-2">
                <p className="mb-0 text-white metaHeading">WalletConnect</p>
                <p className="modal_subtext_color mb-0">Using a mobile wallet</p>
              </div>
            </div>
          </div>
          {/* --------------------------------------------------------- */}
          <div className="d-flex metaCardMain p-2" onClick={connectCoinbaseWallet}>
            <div className="d-flex align-items-center">
              <img src={Coinbase} alt="pic" className="metaImg" />
            </div>
            <div className="d-flex align-items-center">
              <div className="p-2">
                <p className="mb-0 text-white metaHeading">Coinbase Wallet</p>
                <p className="modal_subtext_color mb-0">Using your mobile or browser extension</p>
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
    </>
  );
};

export default ConnectScreen;
