import React from "react";

import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import logoGame from '../../assests/images/logoGame.png'
import NavImage from "../../assests/images/download.svg";

import "./homeNavbar.css";

const BlogNavbar = () => {
  return (
    <div className="container" id='blognav'>
    {/* --------------------------------------------------------- */}
      <Navbar bg="" expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <Link to="" className="navBrand ml-0 text-white">
              <strong> All Articles</strong>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              // style={{ maxHeight: '100px' }}
              // navbarScroll
            >
              <Nav.Link to="" className=" navtext text-white">
                {" "}
                Annoucements
              </Nav.Link>
              <Nav.Link to="" className=" navtext text-white">
                Project Updates
              </Nav.Link>
              <Nav.Link to="/DOCS" className=" navtext text-white">
                Platforms
              </Nav.Link>
              <Nav.Link to="" className=" navtext text-white">
                Technology
              </Nav.Link>
              <Nav.Link to="" className=" navtext text-white">
                {" "}
                Tutorials
              </Nav.Link>
            </Nav>

            <NavDropdown
              title="Authors"
              // id="basic-nav-dropdown"
              className="navtext"
            >
              <NavDropdown.Item href="#action/3.1">
                {" "}
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  style={{ width: "30px" }}
                  alt="Avatar"
                />{" "}
                James
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  style={{ width: "30px" }}
                  alt="Avatar"
                />{" "}
                James
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                {" "}
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  style={{ width: "30px" }}
                  alt="Avatar"
                />{" "}
                James
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  style={{ width: "30px" }}
                  alt="Avatar"
                />{" "}
                James
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default BlogNavbar;
