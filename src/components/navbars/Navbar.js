import React from "react";
import { Link, useLocation } from "react-router-dom";

import { RiArrowDropDownLine } from "react-icons/ri";
import logo from "../../assests/images/Logo.png";

import "./navbar.scss";

// ----------------------------------------------

import { useUser } from "../store/hooks";
import { useMoralis } from "react-moralis";
import { formatWalletAddress } from "../../utils/helperFunctions";
import { useAppDispatch } from "../store";
import { LocalStoragePersistanceService } from "../../persist/LocalStorage";
import { loginUser } from "../store/user";
const localStorage = new LocalStoragePersistanceService();

const Navbar = () => {
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
    <div>
      <nav className="navbar homeNav  navbar-expand-lg navbar-dark bg-dark ">
        <div class="container-fluid mx-5  ">
          <Link to="/" className="navbar-brand">
            {" "}
            <img className="img-fluid" src={logo} alt="..." />
          </Link>

          <button
            className="navbar-toggler  navToggleBtn  "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navDropdownBtn">
              <RiArrowDropDownLine />
            </span>
            <span className="navbar-toggler-icon navBarBtn"></span>
          </button>
          <div
            className="collapse navbar-collapse w-100"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  href="http://market.manialands.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link "
                >
                  Marketplace
                </a>
              </li>
              <li class="nav-item">
                <Link
                  to="/builder_scene"
                  className={`${
                    pathname === "/builder_scene"
                      ? "navColorChange"
                      : "nav-link"
                  }`}
                >
                  Builder
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/docs"
                  className={`${
                    pathname === "/docs" ? "navColorChange" : "nav-link"
                  }`}
                >
                  Docs
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/event"
                  className={`${
                    pathname === "/event" ? "navColorChange" : "nav-link"
                  }`}
                >
                  Events
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/blog"
                  className={`${
                    pathname === "/blog" ? "navColorChange" : "nav-link"
                  }`}
                >
                  Blogs
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/dao"
                  className={`${
                    pathname === "/dao" ? "navColorChange" : "nav-link"
                  }`}
                >
                  DAO
                </Link>
              </li>
              {/* <li class="nav-item">
                  <button class="btn btn-primary" type="submit">Start Exploring</button>
              </li> */}
              {/* <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
              </li> */}
              {/* <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li> */}
            </ul>
            <form class="d-flex">
              {pathname === "/builder_scene" ||
              pathname === "/connect" ||
              pathname === "/names" ||
              pathname === "/land" ||
              pathname === "/collection" ||
              pathname === "/metaGlass" ||
              pathname === "/add_item" ? (
                !user?.user ? (
                  <Link to="/connect">
                    {" "}
                    <button
                      className="btn btn-primary navbnt_start"
                      type="submit"
                    >
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
                )
              ) : (
                <Link to="/Game">
                  {" "}
                  <button
                    className="btn btn-primary navbnt_start"
                    type="submit"
                  >
                    Start Exploring
                  </button>
                </Link>
              )}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
