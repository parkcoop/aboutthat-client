import React, { Component } from "react";
import axios from "axios";

class EditItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.userInSession._id,
      username: this.props.userInSession.username
    };
  }

  //   state = {
  //     description: "",
  //     source: ""
  //   };

  handleFact(e) {
    console.log(e.target.name, e.target.value);
    this.setState({
      description: e.target.value
    });
  }
  handleSource(e) {
    console.log(e.target.name, e.target.value);
    this.setState({
      source: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    axios
      .post(
        `https://secure-garden-36333.herokuapp.com/items/edit/${
          this.props.match.params.id
        }`,
        {
          description: this.state.description,
          source: this.state.source,
          userId: this.state.userId,
          username: this.state.username
        }
      )
      .then(fromServer => {
        console.log(fromServer);
      });
    window.location.href = `/items/${this.props.match.params.id}`;
    // console.log(this.props.match.params.id);
  }

  render() {
    return (
      <div className="addModule">
        <form onSubmit={e => this.onSubmit(e)}>
          <label>Fact</label>
          <br />
          <input
            style={{ width: "50%" }}
            onChange={e => this.handleFact(e)}
            name="description"
            type="text"
            required
          />
          <br />
          <label>Source</label>
          <br />
          <input
            style={{ width: "50%" }}
            onChange={e => this.handleSource(e)}
            name="source"
            type="text"
            required
          />
          {/* <input type="text" value={this.state.user} hidden /> */}
          <br />
          <br />

          <button className="newButton" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default EditItem;
