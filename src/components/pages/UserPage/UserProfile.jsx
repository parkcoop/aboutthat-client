import React, { Component } from "react";
import axios from "axios";
import { Route, Link, NavLink, Switch } from "react-router-dom";

const styles = {
  background: "white",
  width: "50%",
  margin: "auto",
  padding: 50,
  textAlign: "center"
};

class UserProfile extends Component {
  constructor(props) {
    super();
    this.state = {
      user: {}
    };
  }
  componentDidMount() {
    console.log(this.props.userInSession);
    axios
      .get(
        `https://secure-garden-36333.herokuapp.com/users/${
          this.props.match.params.username
        }`
      )
      .then(returnedUser => {
        this.setState({
          user: returnedUser.data
        });
        console.log(returnedUser);
      });
  }

  render() {
    return (
      <div
        className="infoSection"
        style={{ margin: "auto", padding: 50, textAlign: "center" }}
      >
        <h1>
          {this.state.user.username &&
            this.state.user.username.charAt(0).toUpperCase() +
              this.state.user.username.slice(1)}
        </h1>
        <h5>🏆 {this.state.user.points} points</h5>
        <h6>Contributions:</h6>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap"
          }}
        >
          {this.state.user.additions &&
            this.state.user.additions.map(additions => {
              return (
                <div
                  style={{
                    background: "grey",
                    padding: 10,
                    width: "45%",
                    margin: 10,

                    color: "white"
                  }}
                >
                  <Link to={`/items/${additions.itemId}`}>
                    <h6>{additions.item}</h6>
                    <h5>"{additions.contribution}"</h5>
                    {/* <ul>
                  <li>{additions.item}</li>
                  <li>{additions.contribution}</li>
                </ul> */}
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default UserProfile;
