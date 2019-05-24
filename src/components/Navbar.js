import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "./auth/auth-service";
import logo from "../logo.png";

const styles = {
  position: "absolute",
  top: 10,
  right: 10,
  backgroundColor: "white",
  borderRadius: 5,
  padding: "10px 30px",

  margin: "auto"
};
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
        <a href="">Home</a>
      </li>
      <li className="navList">
        <a href="">About</a>
      </li>
      <li className="navList">
        <a href="">Discuss</a>
      </li>
      <li className="navList">
        <a href="">Submit Entry</a>
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
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
      // this.props.getUser(null);
    });
  };
  render() {
    // return (
    if (this.state.loggedInUser) {
      return (
        <div>
          <div className="nav-flex-container1">
            <Logo />
          </div>
          <div className="nav-flex-container2">
            <NavItems />
            <div style={styles}>
              Welcome,{" "}
              <Link to={`/users/${this.state.loggedInUser.username}`}>
                {this.state.loggedInUser.username}
              </Link>
              <Link to="/">
                <button onClick={() => this.logoutUser()}>Logout</button>
              </Link>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="nav-flex-container1">
            <Logo />
          </div>
          <div className="nav-flex-container2">
            <NavItems />
            <div style={styles}>
              <ul style={{ listStyle: "none", paddingLeft: 0 }}>
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
          </div>
        </div>
      );
    }
  }
}

export default Navbar;
