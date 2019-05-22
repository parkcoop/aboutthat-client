import React, { Component } from "react";
import Datasheet from "./components/Datasheet";
import Sidebar from "./components/Sidebar";
import axios from "axios";
const styles = {
  display: "flex",
  width: "80%",
  margin: "auto"
};

class index extends Component {
  constructor(props) {
    super();
    this.state = {
      pageResponse: ""
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3000/items/${this.props.match.params.id}`)
      .then(foundItem => {
        console.log(foundItem.data);
        this.setState({
          pageResponse: foundItem.data
        });
      });
  }
  render() {
    return (
      <div style={styles}>
        <Sidebar />
        <Datasheet name={this.state.pageResponse.name} />
      </div>
    );
  }
}

export default index;
