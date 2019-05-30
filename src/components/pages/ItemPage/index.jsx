import React, { Component } from "react";
import Datasheet from "./components/Datasheet";
import Sidebar from "./components/Sidebar";
import axios from "axios";

class index extends Component {
  constructor(props) {
    super();
    this.state = {
      pageResponse: ""
    };
  }

  componentWillMount() {
    axios
      .get(
        `https://secure-garden-36333.herokuapp.com/items/${
          this.props.match.params.id
        }`
      )
      .then(foundItem => {
        this.setState({
          pageResponse: foundItem.data
        });
      });
  }

  showDatasheet() {
    if (this.state.pageResponse) {
      return (
        <div className="resultData">
          <Sidebar data={this.state.pageResponse} />
          <Datasheet data={this.state.pageResponse} />
        </div>
      );
    }
  }

  render() {
    return <div>{this.showDatasheet()}</div>;
  }
}

export default index;
