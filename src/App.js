import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./components/Landing";

import Hacker from "./components/Applications/Hacker";
import Mentor from "./components/Applications/Mentor";
import Workshop from "./components/Applications/Workshop";
import Volunteer from "./components/Applications/Volunteer";

import HackerResponse from "./components/Responses/HackerResponse";
import VolunteerResponse from "./components/Responses/VolunteerResponse";
import MentorResponse from "./components/Responses/MentorResponse";
import WorkshopResponse from "./components/Responses/WorkshopResponse";

import HTTP404 from "./components/HTTP404";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          {/* Applications */}
          <Route exact path="/hacker" component={Hacker} />
          <Route exact path="/volunteer" component={Volunteer} />
          <Route exact path="/workshop" component={Workshop} />
          <Route exact path="/mentor" component={Mentor} />
          {/* Responses */}
          <Route exact path="/hackerresponse" component={HackerResponse} />
          <Route exact path="/mentorresponse" component={MentorResponse} />
          <Route exact path="/workshopresponse" component={WorkshopResponse} />
          <Route exact path="/mentorresponse" component={MentorResponse} />
          <Route
            exact
            path="/volunteerresponse"
            component={VolunteerResponse}
          />

          <Route component={HTTP404} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
