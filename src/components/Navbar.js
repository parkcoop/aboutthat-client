import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "./auth/auth-service";
import logo from "../logo.png";

function Logo() {
  return (
    <a className="img" href="/">
      <img className="img" src={logo} width="225px" />
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
            <p>🏆{this.state.loggedInUser.points}</p>
            <Link to={`/users/${this.state.loggedInUser.username}`}>
              <button>My Profile</button>
            </Link>{" "}
            <Link to="/">
              <button onClick={() => this.logoutUser()}>Logout</button>
            </Link>
          </div>
          <div style={{ height: 125 }} className="nav-flex-container1">
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
          <div className="userDialogStyles2">
            {/* <ul style={{ listStyle: "none", paddingLeft: 0, margin: 0 }}> */}
            <div>
              <Link to="/login" style={{ textDecoration: "none" }}>
                Login
              </Link>
            </div>
            <div>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                Signup
              </Link>
            </div>
            {/* </ul> */}
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
