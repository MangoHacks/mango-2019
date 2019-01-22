import React from "react";

const Interview = props => {
  const companies = [
    {
      name: "Express Scripts",
      logo: require("../assets/sponsors/express-scripts.png"),
      link: "/interview-express",
      about:
        "Express Scripts offers you a paid opportunity to bring your problem-solving abilities and creativity to bear on behalf of the 100 million patients we serve."
    },
    {
      name: "GE Digital",
      logo: require("../assets/sponsors/ge.png"),
      link: "/interview-ge",
      about:
        "An internship at GE is an opportunity to learn while doing. Collaborating on exciting projects, not only with talented peers, but with top leaders in your field."
    },
    {
      name: "Carnival",
      logo: require("../assets/sponsors-white/carnival.png"),
      link: "/interview-carnival",
      about:
        "As part of the internship program, you'll be developing teamwork, communication, problem-solving and leadership skills."
    }
  ];

  return (
    <div className="interview">
      <div className="interview-bg">
        <div
          className="interview-bg-grad"
          style={{
            backgroundImage: `linear-gradient(0deg, ${props.fromGrad ||
              "#ff5367"} 0%, ${props.toGrad || "#fa5e3e"} 100%)`
          }}
        />
      </div>
      <div className="interview-content container">
        <h1>
          Interview at <br />
          Mango!
        </h1>
        <p>
          Snag an onsite interview with some of the most innovative <br />
          companies in tech at Florida's Sweetest Hackathon!
        </p>
        <div className="sponsors-container">
          {companies.map((sponsor, index) => (
            <div className="company">
              {/* <div className="logo-wrap" key={index}>
                <a href={sponsor.link} title={sponsor.name}>
                  <img src={sponsor.logo} />
                </a>
              </div> */}
              <h3>{sponsor.name}</h3>
              <p>{sponsor.about}</p>
              <a href={sponsor.link}>Sign me up!</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Interview;
