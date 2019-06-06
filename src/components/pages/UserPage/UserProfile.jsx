import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
        className="addModule"
        style={{ margin: "auto", padding: 50, textAlign: "center" }}
      >
        {this.state.user && this.state.user.avatar && (
          <Link to="/changephoto">
            <img
              width="200px"
              style={{ borderRadius: "50%" }}
              src={this.state.user.avatar}
            />
          </Link>
        )}
        <h1>
          {this.state.user &&
            this.state.user.username &&
            this.state.user.username.charAt(0).toUpperCase() +
              this.state.user.username.slice(1)}
        </h1>
        <h5>🏆 {this.state.user && this.state.user.points} points</h5>
        <h6>Contributions:</h6>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap"
          }}
        >
          {this.state.user &&
            this.state.user.additions &&
            this.state.user.additions.map(additions => {
              return (
                <div className="contributionModule">
                  <Link to={`/items/${additions.itemId}`}>
                    <h6>{additions.item}</h6>
                    <h5>"{additions.contribution}"</h5>
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
