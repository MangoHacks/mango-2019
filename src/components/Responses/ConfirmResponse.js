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

const ConfirmResponse = props => {
  return (
    <div className="response">
      <Mango className="response-mango" color="white" />
      <ResBlobTop className="res-blob-top" />
      <ResBlobBottom className="res-blob-bottom" />

      <div className="card" style={{ top: "50px" }}>
        <h1>
          You've confirmed your spot to <br />
          Mango! 🚀
        </h1>
        <hr />
        <h5>🥭 Sweet!</h5>
        <p>
          We're super excited to have you join us at Florida International
          University <b>February 1st - 3rd 🗓</b>
        </p>
        <hr />
        <p style={{ textAlign: "left" }}>
          We know what you're thinking, should I bring some mangos? The answer
          is no, we've got plenty 😅
          <br />
          <br />
          Here are some <b>#HackathonEssentials</b> you wanna make sure you have
          for the big day 👨🏻💻📩
          <br />
        </p>
        <ul style={{ listStyle: "none", textAlign: "left" }}>
          <li>👤 ID</li>
          <li>💻 Laptop </li>
          <li>📱 Phone</li>
          <li>🔌 Chargers</li>
          <li>💦 Toothbrush & Toothpaste</li>
          <li>👕👞 Change of Clothes</li>
          <li>😴 Sleeping bags (if you’re planning on sleeping)</li>
          <li>⚡️ ️️Anything else to keep you fresh</li>
        </ul>
        <hr />

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

export default ConfirmResponse;
