import React from "react";
import "../mobile.css";
import "../App.css";
import "../index.css";
import NavBar from "./Navbar";
import UserProfile from "./pages/UserPage/UserProfile";
import Home from "./pages/Home";
import EditItem from "./pages/EditItemPage/EditItem";
import Results from "./pages/Results/index";
import ItemPage from "./pages/ItemPage/index";
import Signup from "./auth/Signup";
import AuthService from "./auth/auth-service";
import Login from "./auth/Login";
import AddItem from "./pages/EditItemPage/AddItem";
import ChangePhoto from "./pages/UserPage/ChangePhoto";
import About from "./pages/AboutPage/About";

import { Route, Link, NavLink, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service
        .loggedin()
        .then(response => {
          this.setState({
            loggedInUser: response
          });
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          });
        });
    }
  }

  getTheUser = userObj => {
    this.setState({
      loggedInUser: userObj
    });
  };

  render() {
    this.fetchUser();
    if (this.state.loggedInUser) {
      return (
        <div className="App">
          <NavBar userInSession={this.state.loggedInUser} />
          <Switch>
            {/* <Route
              exact
              path="/signup"
              render={() => <Signup getUser={this.getTheUser} />}
            />
            <Route
              exact
              path="/login"
              render={() => <Login getUser={this.getTheUser} />}
            /> */}
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/users/:username"
              component={props => (
                <UserProfile
                  userInSession={this.state.loggedInUser}
                  {...props}
                />
              )}
            />
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
            <Route
              exact
              path="/items/edit/:id"
              component={props => (
                <EditItem userInSession={this.state.loggedInUser} {...props} />
              )}
            />
            <Route
              exact
              path="/addEntry"
              component={props => (
                <AddItem userInSession={this.state.loggedInUser} />
              )}
            />
            <Route
              exact
              path="/changephoto"
              component={props => (
                <ChangePhoto userInSession={this.state.loggedInUser} />
              )}
            />
          </Switch>
        </div>
      );
    } else {
      return (
        <div className="App">
          <NavBar userInSession={this.state.loggedInUser} />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/signup"
              render={() => <Signup getUser={this.getTheUser} />}
            />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/login"
              render={() => <Login getUser={this.getTheUser} />}
            />
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/users/:username"
              component={props => <UserProfile {...props} />}
            />
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
            <Route
              exact
              path="/items/edit/:id"
              render={() => <Login getUser={this.getTheUser} />}
            />
            <Route
              exact
              path="/addEntry"
              render={() => <Login getUser={this.getTheUser} />}
            />
            <Route
              exact
              path="/changephoto"
              render={() => <Login getUser={this.getTheUser} />}
            />
          </Switch>
        </div>
      );
    }
  }
}

export default App;
