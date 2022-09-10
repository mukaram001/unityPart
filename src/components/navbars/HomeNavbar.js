import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from '../../assests/images/Logo.png'
import logoGame from "../../assests/images/logoGame.png";

import "../../assests/styles/navbars/HomeNavbar.css";
import "./homeNavbar.css";

const HomeNavbar = () => {
  const { pathname } = useLocation();
  return (
    <div className="headermain">
      <Navbar bg="" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="navBrand ml-0">
              {/* <strong>IDEAOLOGY</strong> */}
              <img className="img-fluid" src={logo} alt='...'/>
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
                // to={{ pathname: "http://18.218.182.220:3000/" }}
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
               to='/builder_scene'
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
            <form class="d-flex">
             
             {pathname==='/builder_scene' ? (<button class="btn btn-primary" id="headerbtn" type="">
                <Link className="ExploLink" to="/Game">
                  Sign
                </Link>
              </button>):(<button class="btn btn-primary" id="headerbtn" type="">
                <Link className="ExploLink" to="/Game">
                  Start Exploring
                </Link>
              </button>)}
              
            </form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HomeNavbar;
