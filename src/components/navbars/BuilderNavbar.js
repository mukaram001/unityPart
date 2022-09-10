import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assests/images/Logo.png";
import logoGame from "../../assests/images/logoGame.png";

import "../../assests/styles/navbars/HomeNavbar.css";
import "./homeNavbar.css";
import { useUser } from "../store/hooks";
import { useMoralis } from "react-moralis";
import { formatWalletAddress } from "../../utils/helperFunctions";
import { useAppDispatch } from "../store";
import { LocalStoragePersistanceService } from "../../persist/LocalStorage";
import { loginUser } from "../store/user";
const localStorage = new LocalStoragePersistanceService();
const BuilderNavbar = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const user = useUser();
  const { account, logout } = useMoralis();
  const onLogout = async () => {
    await logout();
    localStorage.removeItem("connectorId");
    dispatch(loginUser({ jwt: "", user: null }));
  };
  return (
    <div className="headermain">
      <Navbar bg="" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="navBrand ml-0">
              {/* <strong>IDEAOLOGY</strong> */}
              <img className="img-fluid" src={logo} alt="..." />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              // style={{ maxHeight: '100px' }}
              // navbarScroll
            >
              <NavLink
                // to={{ pathname: "http://3.144.76.242:3000/" }}
                to={{ pathname: "http://market.manialands.com" }}
                target="_blank"
                className=" navtext"
              >
                {" "}
                Marketplace
              </NavLink>
              {/* to="/builder"
             to='/builder_add_scenes' */}
              <NavLink
                to="/builder_scene"
                //  to='/builder'
                //  to="/builder_main"
                className={`${
                  pathname === "/builder" ? "navColorChange" : "navtext"
                }`}
              >
                Builder
              </NavLink>
              <NavLink
                to="/docs"
                className={`${
                  pathname === "/docs" ? "navColorChange" : "navtext"
                }`}
              >
                Docs
              </NavLink>
              <NavLink
                to="/event"
                className={`${
                  pathname === "/event" ? "navColorChange" : "navtext"
                }`}
              >
                Events
              </NavLink>
              <NavLink
                to="/blog"
                className={`${
                  pathname === "/blog" ? "navColorChange" : "navtext"
                }`}
              >
                {" "}
                Blog
              </NavLink>
              <NavLink
                to="/dao"
                className={`${
                  pathname === "/dao" ? "navColorChange" : "navtext"
                }`}
              >
                {" "}
                DAO
              </NavLink>
            </Nav>
            {!user?.user ? (
              <Link className="ExploLink" to="/connect">
                <button class="btn btn-primary" id="headerbtn" type="">
                  Sign In
                </button>
              </Link>
            ) : (
              <Link className="ExploLink" to="/connect">
                <button
                  class="btn btn-primary"
                  id="headerbtn"
                  type=""
                  onClick={onLogout}
                >
                  {formatWalletAddress(account ?? "", 4, 4)}
                </button>
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default BuilderNavbar;
