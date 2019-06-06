import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import headertext from "../../headertext.png";
class Home extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };
    this.handleInput = this.handleInput.bind(this);
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  handleInput(e) {
    this.setState({
      searchTerm: [e.target.value]
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/search/${this.state.searchTerm}`} />;
    }

    return (
      <div className="search">
        <div className="searchBar">
          <img
            alt="Because in a world of deceptive marketing, it is almost impossible to find reliable information"
            src={headertext}
          />
          <form onSubmit={this.setRedirect}>
            <input required onChange={this.handleInput} className="searchBox" />
            <button
              type="submit"
              className="newButton"
              style={{
                backgroundColor: "yellow",
                color: "black",
                boxShadow: "0 6px yellowgreen"
              }}
            >
              GO!
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Home;
