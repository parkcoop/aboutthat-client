import React, { Component } from "react";
import AuthService from "./auth-service";
import { Link } from "react-router-dom";

const loginStyles = {
  background: "white",
  padding: 100,
  margin: "auto",
  width: "50%",
  textAlign: "center"
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    console.log("hi");
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    this.service
      .login(username, password)
      .then(response => {
        this.setState({ username: "", password: "" });
        this.props.getUser(response);
        window.location.href = "/";
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="addModule">
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <br />
          <input
            style={{ border: "0.5px solid grey" }}
            type="text"
            name="username"
            value={this.state.username}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <br />
          <label>Password:</label>
          <br />
          <input
            style={{ border: "0.5px solid grey" }}
            name="password"
            type="password"
            value={this.state.password}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <br />
          <button className="newButton" type="submit">
            Login
          </button>
        </form>
        <p>
          Don't have account?
          <Link to={"/signup"}> Signup</Link>
        </p>
      </div>
    );
  }
}

export default Login;
