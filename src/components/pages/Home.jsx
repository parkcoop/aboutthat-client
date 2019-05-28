import React, { Component } from "react";
import { Route, Link, NavLink, Switch, Redirect } from "react-router-dom";
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
          <img src={headertext} width="70%" />
          <form onSubmit={this.setRedirect}>
            <input required onChange={this.handleInput} className="searchBox" />
            <button type="submit" className="btn btn-sm">
              GO!
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Home;
