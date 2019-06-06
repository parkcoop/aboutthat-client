import React from "react";
import { Link } from "react-router-dom";
import AuthService from "./auth/auth-service";
import logo from "../aboutthatlogo.png";

function Logo() {
  return (
    <a className="img" href="/">
      <img className="img" src={logo} width="350px" />
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
        <Link style={{ textDecoration: "none" }} to="/about">
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
    });
  };
  render() {
    if (this.state.loggedInUser) {
      return (
        <div>
          <div className="userDialogStyles">
            <div>
              <span>{this.state.loggedInUser.username}</span>
              <br />
              <span>🏆{this.state.loggedInUser.points}</span>
            </div>
            <Link to={`/users/${this.state.loggedInUser.username}`}>
              <button className="newButton2">Profile</button>
            </Link>{" "}
            <Link to="/">
              <button className="newButton2" onClick={() => this.logoutUser()}>
                Logout
              </button>
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
          <div className="userDialogStyles2">
            <div>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <button className="newButton">Login</button>
              </Link>
            </div>
            <div>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <button className="newButton">Signup</button>
              </Link>
            </div>
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
