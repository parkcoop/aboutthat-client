import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// import heart from "./img/heart.png";
//make heart + number as component
class Datasheet extends React.Component {
  constructor(props) {
    super();
    this.state = {
      pageResponse: "Coffee"
    };
  }

  componentDidMount() {
    console.log(this.props);
    // axios
    //   .get(`http://localhost:3000/items/${this.props.data._id}`)
    //   .then(foundItem => {
    //     console.log(foundItem.data);
    //     this.setState({
    //       pageResponse: foundItem.data
    //     });
    //   });
    console.log(this.props.data.name);
    axios
      .get(
        `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&origin=*&titles=${this.props.data.name.toLowerCase()}`
      )
      .then(wikiResponse => {
        console.log(wikiResponse);
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
          {this.props.data.name}
          {/* <img id="heart" src={heart} /> */}
        </h1>
        <p id="contributors">
          Contributors:{" "}
          {this.props.data.contributors.length > 1 &&
            this.props.data.contributors.map(contributors => {
              return contributors + ", ";
            })}
          {this.props.data.contributors.length == 1 &&
            this.props.data.contributors.map(contributors => {
              return contributors;
            })}
        </p>
        <hr />
        <p>
          {this.props.data.description.map(descriptions => {
            if (descriptions.endsWith(".")) {
              return (
                descriptions.charAt(0).toUpperCase() +
                descriptions.slice(1) +
                " "
              );
            } else {
              return `${descriptions
                .charAt(0)
                .toUpperCase()}${descriptions.slice(1)}. `;
            }
          })}
        </p>
        <p>
          Contains:
          {this.props.data.mayContain &&
            this.props.data.mayContain.map(chemicals => {
              return <b>{chemicals.toUpperCase()}</b>;
            })}
        </p>
        <p>
          Read more:{" "}
          {this.props.data.sources.map(sources => {
            if (sources.startsWith("http")) {
              return (
                <li>
                  <a href={sources}>{sources}</a>
                </li>
              );
            } else {
              return (
                <li>
                  <a href={"http://" + sources}>{sources}</a>
                </li>
              );
            }
            // console.log(sources.startsWith("http"));
          })}
        </p>
        <hr />
        {this.state.pageResponse && (
          <div>
            <h4>
              <i>From Wikipedia:</i>
            </h4>
            <p>
              {this.state.pageResponse &&
                this.state.pageResponse.substring(0, 1000) + "..."}
            </p>
            <a
              href={`https://en.wikipedia.org/wiki/${this.props.data.name.toLowerCase()}`}
            >
              OMG
            </a>
          </div>
        )}
        <Link to={`/items/edit/${this.props.data._id}`}>
          <button>Add a fact</button>
        </Link>
      </div>
    );
  }
}

export default Datasheet;
