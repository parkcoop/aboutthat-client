import React, { Component } from "react";

import axios from "axios";
class ChangePhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.userInSession._id,
      photoUrl: ""
    };
  }

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    axios.post("https://secure-garden-36333.herokuapp.com/uploadAvatar", {
      imageUrl: this.state.photoUrl,
      userId: this.state.userId
    });

    window.location.href = `/users/${this.props.userInSession.username}`;
  };

  handleUpload = file => {
    console.log("file", file);
    axios
      .post("https://secure-garden-36333.herokuapp.com/upload", file)
      .then(response => {
        this.setState({ photoUrl: response.data.secure_url });
      })
      .catch(err => console.error(err));
  };

  handleFile = async e => {
    e.preventDefault();
    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);
    await this.handleUpload(uploadData);
  };

  render() {
    return (
      <div
        style={{
          textAlign: "center",
          background: "white",
          width: "50%",
          margin: "auto"
        }}
      >
        <form onSubmit={e => this.onSubmit(e)}>
          <input type="file" onChange={this.handleFile} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ChangePhoto;
