import React from "react";

import Mango from "../shared/Mango";

import {
  ResBlobTop,
  ResBlobBottom,
  Facebook,
  Twitter,
  Instagram,
  Slack
} from "../Icons";

const MentorResponse = props => {
  return (
    <div className="response">
      <Mango className="response-mango" color="white" />
      <ResBlobTop
        className="res-blob-top"
        topColor="#17E0E9"
        bottomColor="#36EC6B"
      />
      <ResBlobBottom
        className="res-blob-bottom"
        topColor="#36EC6B"
        bottomColor="#17E0E9"
      />

      <div className="card">
        <h1>You've applied to be a mentor at MangoHacks! 🧁</h1>
        <hr />
        <h5>🙌🏻 Ayyyyyy!</h5>
        <p>We're super excited to have you mentor at MangoHacks.</p>

        <p>We'll be reaching out very soon so keep an 👀 out on your emails.</p>
        <p>
          <b>
            Join our{" "}
            <a href="https://mangohacks.slack.com/">
              {" "}
              <u>slack</u>
            </a>{" "}
            to stay up to date with all things mangohacks.
          </b>
        </p>
        <a href="https://mangohacks.com">
          <b>mangohacks.com</b>
        </a>
        <hr />

        <div className="social-media">
          <a target="_blank" href="https://www.facebook.com/MangoHacks">
            <Facebook fill="#000" />
          </a>
          <a target="_blank" href="https://twitter.com/fiumangohacks">
            <Twitter fill="#000" />
          </a>
          <a target="_blank" href="https://instagram.com/fiumangohacks">
            <Instagram fill="#000" />
          </a>
          <a target="_blank" href="http://go.fiu.edu/mangohacks-slack">
            <Slack fill="#000" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MentorResponse;
