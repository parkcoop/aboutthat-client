import React, { Component } from "react";
import axios from "axios";

const styles = {
  background: "white",
  width: "50%",
  margin: "auto",
  padding: 100
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
      <div style={styles}>
        Hi {this.state.user.username}, you have {this.state.user.points} points
        {this.state.user.additions &&
          this.state.user.additions.map(additions => {
            return (
              <div>
                <ul>
                  <li>{additions.item}</li>
                  <li>{additions.contribution}</li>
                </ul>
              </div>
            );
          })}
      </div>
    );
  }
}

export default UserProfile;
