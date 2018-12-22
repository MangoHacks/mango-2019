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

const VolunteerResponse = props => {
  return (
    <div className="response">
      <Mango className="response-mango" color="white" />
      <ResBlobTop
        className="res-blob-top"
        topColor="#FFF212"
        bottomColor="#FFAB22"
      />
      <ResBlobBottom
        className="res-blob-bottom"
        topColor="#FFAB22"
        bottomColor="#FFF212"
      />

      <div className="card">
        <h1>You've applied to be a Volunteer at MangoHacks! 🎉</h1>
        <hr />
        <h5>🍦 Sweet!</h5>
        <p>We're super excited to have you volunteer at MangoHacks.</p>
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
          <a target="_blank" href="https://mangohacks.slack.com/">
            <Slack fill="#000" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default VolunteerResponse;
