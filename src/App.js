import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./components/Landing";
import Register from "./components/Register";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
