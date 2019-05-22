import React from "react";
import axios from "axios";
// import heart from "./img/heart.png";
//make heart + number as component
class Datasheet extends React.Component {
  constructor(props) {
    super();
    this.state = {
      pageResponse: ""
    };
  }

  componentDidMount() {
    console.log(this.props.data);
    axios
      .get(`http://localhost:3000/items/${this.props.data}`)
      .then(foundItem => {
        console.log(foundItem.data);
        this.setState({
          pageResponse: foundItem.data
        });
      });

    axios
      .get(
        `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&origin=*&titles=${
          this.props.name
        }`
      )
      .then(wikiResponse => {
        let pageNumber = Object.keys(wikiResponse.data.query.pages);
        let response = wikiResponse.data.query.pages[pageNumber].extract;
        this.setState({
          pageResponse: response
        });
      });
  }
  render() {
    return (
      <div className="infoSection">
        <h1>
          {this.props.name}
          {/* <img id="heart" src={heart} /> */}
        </h1>
        <p id="contributors">Contributors: parkcoop, this, that</p>
        <hr />
        <p>{this.props.description}</p>
        <p>
          Contains: <b>Caffeine</b>
        </p>
        <p>Read more: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4462044/</p>
        <hr />
        <h4>
          <i>From Wikipedia:</i>
        </h4>
        <p>{this.state.pageResponse.substring(0, 1000) + "..."}</p>
      </div>
    );
  }
}

export default Datasheet;
