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

const HackerResponse = props => {
  return (
    <div className="response">
      <Mango className="response-mango" color="white" />
      <ResBlobTop className="res-blob-top" />
      <ResBlobBottom className="res-blob-bottom" />

      <div className="card">
        <h1>You've applied to Florida's sweetest hackathon! 🎉</h1>
        <hr />
        <h5>🥭 Sweet!</h5>
        <p>
          We're super excited to have you join us at Florida International
          University <b>February 1st - 3rd 🗓</b>
        </p>
        <p>
          We'll be rolling out <b>acceptances</b> in the upcoming weeks. In the
          meantime, follow us on our <b>social media</b> platforms for future
          announcements.
        </p>
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

export default HackerResponse;
