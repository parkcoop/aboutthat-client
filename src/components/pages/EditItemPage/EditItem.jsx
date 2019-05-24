import React, { Component } from "react";
import axios from "axios";

const styles = {
  background: "white",
  width: "50%",
  margin: "auto",
  padding: 100,
  textAlign: "center"
};

class EditItem extends Component {
  constructor(props) {
    super(props);
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
      .post(`http://localhost:5000/items/edit/${this.props.match.params.id}`, {
        description: this.state.description,
        source: this.state.source
      })
      .then(fromServer => {
        console.log(fromServer);
      });
    window.location.href = `/items/${this.props.match.params.id}`;
    // console.log(this.props.match.params.id);
  }

  render() {
    return (
      <div style={styles}>
        <form onSubmit={e => this.onSubmit(e)}>
          <label>Fact</label>
          <br />
          <input
            onChange={e => this.handleFact(e)}
            name="description"
            type="text"
            required
          />
          <br />
          <label>Source</label>
          <br />
          <input
            onChange={e => this.handleSource(e)}
            name="source"
            type="text"
            required
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default EditItem;
