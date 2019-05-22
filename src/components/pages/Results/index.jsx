import React from "react";
import data from "../../aboutdata.json";
// import data from "../../aboutdata.json";
import { Route, Link, NavLink, Switch } from "react-router-dom";
import axios from "axios";

class Result extends React.Component {
  constructor(props) {
    super();
    this.state = {
      results: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://localhost:3000/items/search?term=${
          this.props.match.params.searchTerm
        }`
      )
      .then(data => {
        console.log(data);
        this.setState({
          results: data.data
        });
      });
  }

  results() {
    return <div />;
  }

  handleClick() {}

  render() {
    // console.log(this.props.match.params);
    // let searchTerm = this.props.match.params.searchTerm;

    // let results = data.items.filter(obj =>
    //   obj.name.toLowerCase().includes(searchTerm)
    // );

    return (
      <div className="resultContainer">
        <h1>Search results for "{this.props.match.params.searchTerm}":</h1>
        {this.state.results.map(obj => {
          return (
            <div className="singularResult">
              <h3>
                <Link to={`/items/${obj._id}`}>{obj.name}</Link>
              </h3>
              <p className="description">{obj.description}</p>

              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}
export default Result;