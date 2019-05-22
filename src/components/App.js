import React from "react";
import "../App.css";
import NavBar from "./Navbar";
import "../index.css";
import "../mobile.css";
import Home from "./pages/Home";
import Results from "./pages/Results/index";
import ItemPage from "./pages/ItemPage/index";
import { Route, Link, NavLink, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/search/:searchTerm"
        component={props => <Results {...props} />}
      />
      <Route
        exact
        path="/items/:id"
        component={props => <ItemPage {...props} />}
      />
    </div>
  );
}

export default App;
