import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "./auth/auth-service";
import logo from "../logo.png";

function Logo() {
  return (
    <a className="img" href="/">
      <img className="img" src={logo} width="250px" />
    </a>
  );
}

function NavItems() {
  return (
    <ul className="navitems">
      <li className="navList">
        <Link style={{ textDecoration: "none" }} to="">
          Home
        </Link>
      </li>
      <li className="navList">
        <Link style={{ textDecoration: "none" }} to="">
          About
        </Link>
      </li>
      <li className="navList">
        <Link style={{ textDecoration: "none" }} to="">
          Discuss
        </Link>
      </li>
      <li className="navList">
        <Link style={{ textDecoration: "none" }} to="/addEntry">
          Submit Entry
        </Link>
      </li>
    </ul>
  );
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }
  logoutUser = () => {
    this.setState({ loggedInUser: null });
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
      window.location.href = "/";

      // this.props.getUser(null);
    });
  };
  render() {
    // return (
    if (this.state.loggedInUser) {
      return (
        <div>
          <div className="userDialogStyles">
            Logged in as {this.state.loggedInUser.username}
            <br />
            <Link to={`/users/${this.state.loggedInUser.username}`}>
              <button>My Profile</button>
            </Link>{" "}
            <Link to="/">
              <button onClick={() => this.logoutUser()}>Logout</button>
            </Link>
          </div>
          <div className="nav-flex-container1">
            <Logo />
          </div>
          <div className="nav-flex-container2">
            <NavItems />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="userDialogStyles">
            <ul style={{ listStyle: "none", paddingLeft: 0, margin: 0 }}>
              <li>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  Signup
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-flex-container1">
            <Logo />
          </div>
          <div className="nav-flex-container2">
            <NavItems />
          </div>
        </div>
      );
    }
  }
}

export default Navbar;
