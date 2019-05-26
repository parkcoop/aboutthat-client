import React, { Component } from "react";
import AuthService from "./auth-service";
import { Link } from "react-router-dom";

const loginStyles = {
  background: "white",
  padding: 100,
  margin: "auto",
  width: "50%",
  textAlign: "center",
  borderRadius: "0px 0px 10px 10px"
};

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.service = new AuthService();
  }

  // handleChange() and handleSubmit() will be added here

  handleFormSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service
      .signup(username, password)
      .then(response => {
        this.setState({
          username: "",
          password: ""
        });
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
      <div
        className="infoSection"
        style={{ textAlign: "center", margin: "auto" }}
      >
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
            type="password"
            name="password"
            value={this.state.password}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <br />
          <button type="submit">Sign up</button>
        </form>

        <p>
          Already have account?
          <Link to={"/login"}> Login</Link>
        </p>
      </div>
    );
  }
}

export default Signup;
