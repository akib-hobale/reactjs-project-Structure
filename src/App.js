import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import User from "./Components/users";
import Test from "./Components/test";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <main>
          <Switch>
            <Route path="/" exact component={User} />
            <Route path="/Test" exact component={Test} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
