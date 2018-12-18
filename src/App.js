import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./components/Landing";
import Register from "./components/Register";
import RegistrationResponse from "./components/RegistrationResponse";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/response" component={RegistrationResponse} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
