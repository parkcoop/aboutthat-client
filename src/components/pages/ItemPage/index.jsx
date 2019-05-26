import React, { Component } from "react";
import Datasheet from "./components/Datasheet";
import Sidebar from "./components/Sidebar";
import axios from "axios";

// const styles = {
//   display: "flex",
//   width: "80%",
//   margin: "auto"
// };

class index extends Component {
  constructor(props) {
    super();
    this.state = {
      pageResponse: ""
    };
  }

  // componentDidMount() {
  //   axios
  //     .get(`http://localhost:3000/items/${this.props.match.params.id}`)
  //     .then(foundItem => {
  //       console.log(foundItem.data);
  //       this.setState({
  //         pageResponse: foundItem.data
  //       });
  //     });
  // }

  componentWillMount() {
    axios
      .get(
        `https://secure-garden-36333.herokuapp.com/items/${
          this.props.match.params.id
        }`
      )
      .then(foundItem => {
        console.log(foundItem.data);
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
    console.log("------------------------ ", this.state.pageResponse);
    return <div>{this.showDatasheet()}</div>;
  }
}

export default index;
