import React, { Component } from "react";
import Datasheet from "./components/Datasheet";
import Sidebar from "./components/Sidebar";
import axios from "axios";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageResponse: "",
      user: this.props.userInSession
    };
  }

  componentWillMount() {
    console.log(this.props.userInSession);
    axios
      .get(`http://localhost:5000/items/${this.props.match.params.id}`)
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
          <Datasheet user={this.state.user} data={this.state.pageResponse} />
        </div>
      );
    }
  }

  render() {
    return <div>{this.showDatasheet()}</div>;
  }
}

export default index;
