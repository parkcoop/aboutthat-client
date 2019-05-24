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
    return <div style={styles}>Hi {this.state.user.username}</div>;
  }
}

export default UserProfile;
