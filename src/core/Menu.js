import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth/helper";
import { AiOutlineShoppingCart,AiFillHeart } from "react-icons/ai";
import { Navbar, NavbarBrand } from "reactstrap";
import Logo from "../assets/logo.png";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    if(path === '/wishList'){
      return {color: '#D82E2F'}
    }
    return { color: "#2ecc72" };
  } else {
    return { color: "#FFFFFF" };
  }
};

const Menu = ({ history }) => (
  <div>
    <Navbar
      color="dark"
      dark
      expand
      light
      style={{ justifyContent: "space-between" }}
    >
      <NavbarBrand href="/" style={currentTab(history, "/")}>
        <img src={Logo} alt="Logo" height={20} style={{ marginRight: "8px" }} />
        ShopIt
      </NavbarBrand>
      <ul className="nav justify-content-end">
        {isAuthenticated() && isAuthenticated().user.role === 0 && (
          <li className="nav-item">
            <Link
              style={currentTab(history, "/user/dashboard")}
              className="nav-link"
              to="/user/dashboard"
            >
              User Settings
            </Link>
          </li>
        )}
        {isAuthenticated() && isAuthenticated().user.role === 1 && (
          <li className="nav-item">
            <Link
              style={currentTab(history, "/admin/dashboard")}
              className="nav-link"
              to="/admin/dashboard"
            >
              A. Dashboard
            </Link>
          </li>
        )}

        {!isAuthenticated() && (
          <Fragment>
            <li className="nav-item">
              <Link
                style={currentTab(history, "/signup")}
                className="nav-link"
                to="/signup"
              >
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={currentTab(history, "/signin")}
                className="nav-link"
                to="/signin"
              >
                Sign In
              </Link>
            </li>
          </Fragment>
        )}
        {isAuthenticated() && (
          <li className="nav-item">
            <span
              style={{ cursor: "pointer" }}
              className="nav-link text-warning"
              onClick={() => {
                signout(() => {
                  history.push("/");
                });
              }}
            >
              Signout
            </span>
          </li>
        )}
        <li className="d-flex">
          <Link
            style={currentTab(history, "/wishList")}
            className="nav-link"
            to="/wishList"
          >
            <AiFillHeart />
          </Link>
        </li>
        <li className="d-flex">
          <Link
            style={currentTab(history, "/cart")}
            className="nav-link"
            to="/cart"
          >
            <AiOutlineShoppingCart />
          </Link>
        </li>
      </ul>
      {/* <NavbarText >Simple Text</NavbarText> */}
    </Navbar>
  </div>
);

export default withRouter(Menu);
