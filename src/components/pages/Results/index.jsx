import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Result extends React.Component {
  constructor(props) {
    super();
    this.state = {
      results: []
    };
  }

  componentDidMount() {
    if (
      this.props.match.params.searchTerm === " " ||
      this.props.match.params.searchTerm === "  "
    ) {
      window.location.href = `/`;
    }
    axios
      .get(
        `https://secure-garden-36333.herokuapp.com/items/search?term=${
          this.props.match.params.searchTerm
        }`
      )
      .then(data => {
        this.setState({
          results: data.data
        });
      });
  }

  render() {
    return (
      <div className="resultContainer">
        <div style={{ padding: 20, background: "#212529", color: "white" }}>
          <h1>Search results for "{this.props.match.params.searchTerm}":</h1>
          <p className="warningText">
            Heroku sometimes takes a few seconds to spin up the API
          </p>
        </div>
        {this.state.results.map((obj, i) => {
          return (
            <div key={i} className="singularResult">
              <h3>
                <Link to={`/items/${obj._id}`}>{obj.name}</Link>
              </h3>
              <p className="description">
                {obj.description.map(descriptions => {
                  if (descriptions.endsWith(".")) {
                    return descriptions + " ";
                  } else {
                    return descriptions + ". ";
                  }
                })}
              </p>

              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}
export default Result;
