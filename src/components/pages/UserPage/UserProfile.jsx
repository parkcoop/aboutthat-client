import React, { Component } from "react";
import axios from "axios";

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
      .get(`http://localhost:5000/users/${this.props.match.params.username}`)
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
        <h5>{this.state.user.points} points</h5>
        <h6>Contributions:</h6>
        {this.state.user.additions &&
          this.state.user.additions.map(additions => {
            return (
              <div
                style={{
                  background: "grey",
                  width: "100%",
                  margin: "auto",
                  borderRadius: "10px",
                  color: "white"
                }}
              >
                <h3>{additions.item}</h3>
                <h2>{additions.contribution}</h2>
                {/* <ul>
                  <li>{additions.item}</li>
                  <li>{additions.contribution}</li>
                </ul> */}
              </div>
            );
          })}
      </div>
    );
  }
}

export default UserProfile;
