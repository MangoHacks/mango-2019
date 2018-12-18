import React from "react";

const RegistrationResponse = props => {
  const { history } = props;
//   const applicant = props.location.statea.applicant;

  //   if (!res.applicant || res.applicant == null || res.applicant === "undefined")
  //     history.push("/");

  return (
    <div className="response">
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

        <a href="https://mangohacks.com">
          <b>mangohacks.com</b>
        </a>
        <hr />

        <div className="social-media">
          <a href="https://www.facebook.com/mangohacks">
            <img src="https://i.imgur.com/CZOS2up.png" />
          </a>
          <a href="https://www.twitter.com/fiumangohacks">
            <img src="https://i.imgur.com/4G7Yajp.png" />
          </a>
          <a href="https://www.instagram.com/fiumangohacks">
            <img src="https://i.imgur.com/3SvBpxh.png" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegistrationResponse;
