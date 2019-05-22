import React from "react";
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
  constructor() {
    super();
  }

  render() {
    return (
      <div>
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

export default Navbar;
