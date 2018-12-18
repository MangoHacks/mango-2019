import React, { Component, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Expand from "./Expand";

import { Facebook, Twitter, Instagram } from "./Icons";

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

function randFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randBetween(to, from) {
  return from + Math.floor(Math.random() * to);
}

function Blob(props) {
  const {
    width,
    height,
    particles = 3,
    radius = width / 4,
    dimsVar = width / 20,
    radVar = radius / 20,
    mirrorVariance = randFrom([true, false]),
    ...rest
  } = props;
  const initialWidth = width / 2;
  const initialHeight = height / 2;
  const initialRadius = radius;
  const durationMin = 20;
  const durationMax = 25;

  const animDuration = durationMin + Math.floor(Math.random() * durationMax);
  const animDurVar = (animDuration / particles) * 2;
  const animDelayVar = 0.1 + Math.random() * 0.5;

  let balls = [];
  for (let i = 0; i < particles; i++) {
    balls.push({
      x: initialWidth + dimsVar * i,
      y: initialHeight + dimsVar * i,
      radius: initialRadius + radVar * i
    });
  }
  balls = shuffle(balls);

  let animationDirs = ["normal", "reverse"];

  return (
    <React.Fragment>
      <div className="gooball" {...rest}>
        <svg
          width={`${width}px`}
          height={`${height}px`}
          overflow="visible"
          viewBox={`0 0 ${width}px ${height}px`}
        >
          <g
            style={{
              filter: 'url("#goo")',
              transformOrigin: `${width / 2}px ${height / 2}px`
            }}
          >
            {balls.map((ball, index) => {
              const origin = 5 * index + width / 2;
              let animDir = randFrom(animationDirs);
              let style = {
                transformOrigin: `${origin}px ${origin}px`,
                animationName: "blob-spin",
                animationDuration: `${animDuration + index * animDurVar}s`,
                animationDelay: `${index *
                  randBetween(-20, -1) *
                  animDelayVar}s`,
                animationTimingFunction: "linear",
                animationDirection: `${animDir}`
              };

              return (
                <circle
                  className="goo-particle"
                  key={index}
                  fill="url(#blobgrad)"
                  cx={`${ball.x}px`}
                  cy={`${ball.y}px`}
                  r={`${ball.radius}px`}
                  style={style}
                />
              );
            })}
            {/* TODO: Change this back to mirror variance */}
            {true &&
              balls.map((ball, index) => {
                const origin = 5 * index + width / 2;
                let animDir = randFrom(animationDirs);
                let style = {
                  transformOrigin: `${origin}px ${origin}px`,
                  animationName: "blob-spin-1",
                  animationDuration: `${animDuration + index * animDurVar}s`,
                  animationDelay: `${index *
                    randBetween(-20, -1) *
                    animDelayVar}s`,
                  animationTimingFunction: "linear",
                  animationDirection: `${animDir}`
                };

                return (
                  <circle
                    className="goo-particle"
                    key={index}
                    fill="url(#blobgrad)"
                    cx={`${ball.x}px`}
                    cy={`${ball.y}px`}
                    r={`${ball.radius}px`}
                    style={style}
                  />
                );
              })}
          </g>
        </svg>
      </div>
    </React.Fragment>
  );
}

function FilterDefs() {
  return (
    <svg>
      <defs>
        <linearGradient id="blobgrad" x1="50%" y1="100%" x2="50%" y2="0%">
          <stop stopColor="#FF5367" offset="0%" />
          <stop stopColor="#FA5E3E" offset="100%" />
        </linearGradient>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
  );
}

function Mango(props) {
  let { fill = "#000", ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="368"
      height="286"
      viewBox="0 0 368 286"
      {...rest}
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M314.4 169.4a110.7 110.7 0 0 0-.4 1l-.5 1.1a139 139 0 0 1-14 24.4l-.1-1.3-.3.3v.6a28.6 28.6 0 0 0 .7 4.2 44.7 44.7 0 0 0 6.8 17 68.9 68.9 0 0 0 20.1 18.7c2.8-13.5 6.4-27.4 10-40.9 7.3-27.9 14.2-54.3 12.4-71.9-2.1-21.5-11.5-40.4-25-50.3-5.2-4-10.9-6.3-16.3-6.7 8.8 15.7 14 32 15.5 48.7a127.3 127.3 0 0 0-17-48.7h-.4a130.3 130.3 0 0 1 16.7 49.3 116.3 116.3 0 0 1-8.2 54.5zm8.9-55.1c.8 9.3.4 18.7-1.1 28-1.5 9.2-4.1 18.1-7.7 26.8a101.7 101.7 0 0 0 8.8-54.8zm0 0c.8 9.3.4 18.7-1.1 28-1.5 9.2-4.1 18.1-7.7 26.8a101.7 101.7 0 0 0 8.8-54.8zm0 0c.8 9.3.4 18.7-1.1 28-1.5 9.2-4.1 18.1-7.7 26.8a101.7 101.7 0 0 0 8.8-54.8zm0 0a102.4 102.4 0 0 1-8.8 54.8 120.4 120.4 0 0 0 8.8-54.8zM242.8 226c33-24.7 53.2-54.4 58.2-86 .8-5 1.2-10.1 1.2-15.2 0-23.1-8.3-46-24.5-66.8a101.8 101.8 0 0 0-53.3-33.9 110 110 0 0 0-28.7-3.9 97.2 97.2 0 0 0-38.3 7.7c-36.8 15.8-49.1 37.7-66.2 68a332.1 332.1 0 0 1-60.5 82.6 34.2 34.2 0 0 0-9.3 29.8c1 7.2 3.7 12.7 6 15.4 17.4 21.5 50.3 37.2 85.7 41 31.1 3.3 78.9-.8 129.7-38.7zM296 28.4c-3.1 2.7-6.7 5.5-10 7.8a99 99 0 0 1 6.3 7l8-8.6c-1.5-2.6-3-4.6-4.3-6.2zm71.2 92.4c2.1 20.8-5.2 48.7-12.9 78.2-4.6 17.4-9.3 35.5-12 52l-2 12.5-11.3-6a101 101 0 0 1-37.6-31 62.6 62.6 0 0 1-6-11.4 206.5 206.5 0 0 1-30 27.2A208 208 0 0 1 130.3 286c-52 0-96.5-21.6-119.3-49.5A53 53 0 0 1 .8 211.2c-2.5-18 3-35 15.2-47 29.3-28.8 44-55 57-78 17.6-31.3 32.8-58.4 76-77a129 129 0 0 1 125 16.6c6.2-4.3 13-9.5 15.5-12.7a7.9 7.9 0 0 1 10.6-2c1 .7 10.2 7 16.7 21.8 1.1 2.7.6 6-1.4 8.2L309 48c9 .6 17.9 4 26.1 10.1 17.7 13 29.4 36 32.1 62.7zm-103 55.6c-15 26.5-43.1 47.7-81 61.3a245 245 0 0 1-53.8 12.7c-5.3 0-9.8-4-10.3-9.1a10.2 10.2 0 0 1 9.2-11.2c.3 0 22.4-2.4 48.1-11.7 23-8.3 53.8-24 69.8-51.9 2.8-4.9 9.1-6.6 14-3.9 5.1 2.7 6.9 9 4 13.8zm13.3-34.4a7.4 7.4 0 1 1-14.9 0 7.4 7.4 0 0 1 14.9 0z"
      />
    </svg>
  );
}

const HeroImage = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  .herobg-image {
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: ${props => "url(" + props.bg + ")"};
    background-size: cover;
    background-position: center;
    opacity: 0.2;
  }
  .herobg-grad {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      0deg,
      #ffffff 0%,
      rgba(255, 255, 255, 0) 60%,
      rgba(255, 88, 59, 0.39) 100%,
      #fa5e3e 100%
    );
  }
`;

function HeroBg() {
  const bgs = [
    require("../assets/mangohacks-people-1.jpg"),
    require("../assets/mangohacks-people-2.jpg")
  ];
  const bg = randFrom(bgs);

  return (
    <HeroImage bg={bg}>
      <div className="herobg-image" />
      <div className="herobg-grad" />
    </HeroImage>
  );
}

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const HeroContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  top: 0;
  @media (max-width: 490px) {
    font-size: 14px;
  }
  .mangowrap {
    max-width: 300px;
    @media (max-width: 490px) {
      max-width: 200px;
    }
  }
  .tagline {
    font-weight: 300;
    font-size: 1.3em;
    margin: 0px;
    margin-top: 28px;
    font-style: italic;
  }
  .title {
    font-size: 3.6em;
    line-height: 1em;
    margin: 10px 0;
    font-weight: 800;
  }
  .info {
    padding: 0 20px;

    font-size: 1.4em;
    text-align: center;
    font-weight: 600;
    text-shadow: 0px 1px 1px rgba(255, 255, 255, 0.8);
    margin-bottom: 20px;
  }
`;

const AppContainer = styled.div`
  position: relative;
  overflow-x: hidden;
`;

const BlobWrap = styled.div`
  position: absolute;
  top: ${props => props.top || "50%"};
  left: ${props => props.left || "50%"};
  transform: ${props => "rotate(" + props.deg + "deg)"};
`;

const RegisterButton = styled.a`
  color: white;
  background-image: linear-gradient(0deg, #ff5367 0%, #fa5e3e 100%);
  border-radius: 100px;
  display: inline-block;
  font-size: 1.2em;
  padding: 12px 100px;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  position: relative;
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: transparent;
    box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.22);
    border-radius: 100px;
    padding: 12px 100px;
  }

  :hover {
    opacity: 0.9;
  }
`;

function getTop(frac) {
  return `${window.innerHeight * frac}px`;
}

function getLeft(frac) {
  return `${window.innerWidth * frac}px`;
}

function Hero() {
  return (
    <React.Fragment>
      <HeroContainer>
        <FilterDefs />

        <HeroBg />
        <BlobWrap top={getTop(1 / 24)} left={getLeft(-1 / 9)}>
          <Blob
            width={400}
            height={500}
            particles={5}
            radius={57}
            radVar={18}
          />
        </BlobWrap>
        <BlobWrap top={getTop(-2 / 7)} left={getLeft(6 / 10)}>
          <Blob
            width={800}
            height={600}
            radius={15}
            radVar={33}
            particles={6}
          />
        </BlobWrap>

        <HeroContent>
          <div className="mangowrap">
            <Mango style={{ width: "100%", height: "auto" }} />
          </div>
          <div className="tagline">It just got sweeter</div>
          <h1 className="title">MangoHacks</h1>
          <div className="info">
            Feb 1st - 3rd | Florida International University
          </div>

          <RegisterButton href="#">Register</RegisterButton>
        </HeroContent>
      </HeroContainer>
      <BlobWrap
        deg={Math.random() * 360}
        top={getTop(3.1 / 5)}
        left={getLeft(0.43 / 5)}
      >
        <Blob
          width={500}
          height={350}
          particles={4}
          radius={70}
          radVar={18}
          mirrorVariance={false}
        />
      </BlobWrap>
      <BlobWrap
        deg={Math.random() * 360}
        top={getTop(3.9 / 5)}
        left={getLeft(4 / 5)}
      >
        <Blob width={500} height={350} particles={4} radius={70} radVar={18} />
      </BlobWrap>
    </React.Fragment>
  );
}

function About(pros) {
  return (
    <div className="about">
      <div className="about-bg">
        <div
          className="about-bg-img"
          style={{
            backgroundImage: `url("${require("../assets/aboutbg.jpg")}"`
          }}
        />
        <div className="about-bg-grad" />
      </div>
      <div className="about-content container">
        <h2>
          What is <br /> MangoHacks?
        </h2>
        <p>
          MangoHacks is a chance to meet new people, learn something, make
          something, dream along, and have fun.
        </p>
        <p>
          Everyone is welcomed - from the most experienced hackers and builders
          to the thinkers and the curious who have never heard of a hackathon.
          Regardless of your experience, there is something for you at
          MangoHacks.
        </p>
        <p>
          We’d love for you to come learn something new, take the things you
          love (sports, art, traveling, dogs!) or care about (poverty, sea level
          rise, hunger) and combine them with techonology to make something
          different, something cool, or something to improve the world.
        </p>
        <p>It’ll be sweet. We promise.</p>
      </div>
    </div>
  );
}

const FaqContainer = styled.div`
  margin: 0 -16px;
  .trigger {
    border: none;
    font-size: 1em;
    font-weight: 600;
    font-family: inherit;
    margin: 0;
    padding: 8px 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: transparent;
    width: 100%;
    text-align: left;
    margin-bottom: 12px;
    position: relative;
  }
  .trigger:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    transition: all 0.2s ease-in-out;
    opacity: 0;
    box-shadow: 0px 1px 11px -2px rgba(0, 0, 0, 0.3);
  }
  .trigger:hover:before {
    opacity: 1;
  }

  .answer {
    padding: 2px 16px 36px;
  }
  span {
    display: inline-block;
  }
  .caret {
    margin-left: 8px;
  }
`;

function Caret(props) {
  const { up = false } = props;
  const deg = up ? 180 : 0;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      style={{
        transform: `rotate(${deg}deg)`
      }}
    >
      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
      <path fill="none" d="M0 0h24v24H0V0z" />
    </svg>
  );
}

function Faq(props) {
  const { question, answer } = props;
  const [open, setOpen] = useState(false);

  return (
    <FaqContainer>
      <button className="trigger" onClick={() => setOpen(!open)}>
        <span className="header">{question}</span>
        <span className="caret">
          <Caret up={open} />
        </span>
      </button>
      <Expand duration={300} open={open}>
        <div className="answer">{answer}</div>
      </Expand>
    </FaqContainer>
  );
}

function Faqs(props) {
  const faqs = [
    {
      question: "When and where?",
      answer: (
        <React.Fragment>
          <p>
            MangoHacks ’18 will take place at Florida International University’s
            PG6 Tech Station from February 1St to 3rd.
          </p>
          <a
            target="_blank"
            href="https://www.google.com/maps/place/Parking+Garage+6+-+Tech+Station/@25.7629694,-80.3757678,16z/data=!4m8!1m2!2m1!1sfiu+tech+station!3m4!1s0x88d9bf2fab7bbc9b:0x1da1c4a739e4a791!8m2!3d25.7600891!4d-80.3743608"
          >
            Get Directions
          </a>
        </React.Fragment>
      )
    },
    {
      question: "How much does it cost?",
      answer: (
        <React.Fragment>
          <p>
            ZERO! FREE! Nada. Zip. $0. Everything we provide will be free, from
            food, to swag, and snack. You only need to worry about what you’ll
            achieve during the weekend.
          </p>
        </React.Fragment>
      )
    },
    {
      question: "How long is it?",
      answer: (
        <React.Fragment>
          <p>
            People will arrive between 6pm and 8pm on Friday, February 1st.
            Hacking will start at 10pm on Friday and go until 8am on Sunday.
            Closing ceremony will end by 1pm on Sunday.
          </p>
        </React.Fragment>
      )
    },
    {
      question: "How do I get there?",
      answer: (
        <React.Fragment>
          <p>
            We encourage car pooling and a good ol' road trip. However, keep an
            eye out for info on buses coming to North Florida schools. Schools
            with the most registrations are more likely to get a bus, so get
            your friends to apply too.
          </p>
        </React.Fragment>
      )
    },
    {
      question: "Who can come?",
      answer: (
        <React.Fragment>
          <p>
            Anyone who is currently a college student or who graduated in the
            past year is welcome to participate. If it has been a while since
            you were a student you can still participate as a mentor for the
            attendees.
          </p>
        </React.Fragment>
      )
    },
    {
      question: "What do I need to bring?",
      answer: (
        <React.Fragment>
          <p>
            You’ll need an ID and the stuff you’ll need throughout the weekend.
            Laptop, chargers, phone, the basics. You’ll probably also want to
            bring some basic hygiene products.
          </p>
        </React.Fragment>
      )
    },
    {
      question: "How much experience do I need?",
      answer: (
        <React.Fragment>
          <p>
            Don’t be afraid if you don’t think you have enough experience, a
            team or an idea. A hackathon is a great place for learning. We’ll
            have great mentors and tools to help you with development.
          </p>
        </React.Fragment>
      )
    },
    {
      question: "What’s the deal with teams?",
      answer: (
        <React.Fragment>
          <p>
            It’s no biggie. You can hack solo, but the more the merrier. You can
            join a team of up to four people. You don’t need to have a team
            ready before the event - there will be amazing people who you can
            join at the event. If you have some friends in mind though, you’re
            more than welcome to stay together.
          </p>
        </React.Fragment>
      )
    },
    {
      question: "Wait! What about...?",
      answer: (
        <React.Fragment>
          <p>
            If you have any other questions, hit us up.{" "}
            <a href="mailto:team@mangohacks.com">team@mangohacks.com</a>
          </p>
        </React.Fragment>
      )
    }
  ];

  return (
    <div className="faqs">
      <BlobWrap top={getTop(-1 / 12)} left={getLeft(-1 / 9)}>
        <Blob width={400} height={500} particles={5} radius={30} radVar={18} />
      </BlobWrap>
      <BlobWrap
        deg={Math.random() * 360}
        top={getTop(1.9 / 5)}
        left={getLeft(4 / 5)}
      >
        <Blob width={500} height={350} particles={4} radius={60} radVar={18} />
      </BlobWrap>
      <div className="container">
        <h2>FAQs</h2>

        {faqs.map((faq, index) => (
          <Faq key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

function Schedule(props) {
  return (
    <section className="schedule">
      <div className="container">
        <h2 className="heading global-secondary-color generalReveal">
          Schedule
        </h2>
        <div className="days">
          <div className="day generalReveal">
            <h3>Friday</h3>
            <ul className="times">
              <li>
                <span className="time global-accent-color">6:00pm</span>{" "}
                Check-In
              </li>
              <li>
                <span className="time global-accent-color">7:00pm</span> Dinner
              </li>
              <li>
                <span className="time global-accent-color">8:30pm</span> Opening
                Ceremony
              </li>
              <li>
                <span className="time global-accent-color">9:30pm</span> Team
                Building + Sponsor Fair
              </li>
              <li>
                <span className="time global-accent-color">10:00pm</span>{" "}
                Hacking Begins
              </li>
            </ul>
          </div>
          <div className="day generalReveal">
            <h3>Saturday</h3>
            <ul className="times">
              <li>
                <span className="time global-accent-color">12:30am</span>{" "}
                Midnight Snack
              </li>
              <li>
                <span className="time global-accent-color">7:30am</span>{" "}
                Breakfast
              </li>
              <li>
                <span className="time global-accent-color">12:30pm</span> Lunch
              </li>
              <li>
                <span className="time global-accent-color">7:00pm</span> Dinner
              </li>
            </ul>
          </div>
          <div className="day generalReveal">
            <h3>Sunday</h3>
            <ul className="times">
              <li>
                <span className="time global-accent-color">7:00am</span> Devpost
                Submissions Due
              </li>
              <li>
                <span className="time global-accent-color">8:00am</span>{" "}
                Breakfast
              </li>
              <li>
                <span className="time global-accent-color">9:00am</span> Hacking
                Ends
              </li>
              <li>
                <span className="time global-accent-color">10:00am</span> Expo
                Begins
              </li>
              <li>
                <span className="time global-accent-color">12:00pm</span>{" "}
                Closing Ceremony Begins
              </li>
              <li>
                <span className="time global-accent-color">1:00pm</span> End/Go
                Home
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sponsors(props) {
  const tier3 = [
    {
      name: "ExpressScripts",
      link: "https://www.express-scripts.com/",
      logo: require("../assets/sponsors/express-scripts.png")
    },
    {
      name: "Carnival",
      link: "https://www.carnival.com/",
      logo: require("../assets/sponsors/carnival.png")
    },
    {
      name: "GE",
      link: "https://www.ge.com/",
      logo: require("../assets/sponsors/ge.png")
    },
    {
      name: "Google",
      link: "https://www.google.com/",
      logo: require("../assets/sponsors/google.png")
    }
  ];

  const tier12 = [
    {
      name: "Ultiamte Software",
      link: "https://www.ultimatesoftware.com/",
      logo: require("../assets/sponsors/ultimate.png")
    },
    {
      name: "Sticker Mule",
      link: "https://www.stickermule.com/",
      logo: require("../assets/sponsors/sticker-mule.png")
    }
  ];

  return (
    <div className="sponsors">
      <div className="container">
        <h2>Sponsors</h2>
        <h4>MangoHacks is possible thanks to these amazing people.</h4>
        <div className="sponsors-container">
          <div className="tier tier-3">
            {tier3.map((sponsor, index) => (
              <div className="logo-wrap" key={index}>
                <a href={sponsor.link} title={sponsor.name}>
                  <img src={sponsor.logo} />
                </a>
              </div>
            ))}
          </div>
          <div className="tier tier-12">
            {tier12.map((sponsor, index) => (
              <div className="logo-wrap" key={index}>
                <a href={sponsor.link} title={sponsor.name}>
                  <img src={sponsor.logo} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

class Landing extends Component {
  render() {
    return (
      <AppContainer>
        <a
          className="mlh-badge"
          href="https://mlh.io/seasons/na-2019/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2019-season&utm_content=white"
          target="_blank"
        >
          <img
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg"
            alt="Major League Hacking 2019 Hackathon Season"
          />
        </a>
        <Hero />
        <div className="container intro">
          <h2>A place for discovery</h2>
          <p>
            Mangohacks is a 36 hour hackathon that encourages learning,
            collaboration, growth, innovation, and fun. We will welcome 500+
            students from Florida and across the country, amazing mentors, and
            wonderful sponsors to create amazing things. MangoHacks is organized
            by students for students.
          </p>
        </div>
        <About />
        <Faqs />
        <Schedule />
        <Sponsors />
        <div className="footer">
          <div className="container">
            <div className="social-media">
              <a target="_blank" href="https://www.facebook.com/MangoHacks">
                <Facebook fill="#ffffff" />
              </a>
              <a target="_blank" href="https://twitter.com/fiumangohacks">
                <Twitter fill="#ffffff" />
              </a>
              <a target="_blank" href="https://instagram.com/fiumangohacks">
                <Instagram fill="#ffffff" />
              </a>
            </div>
            <div>© MangoHacks.com</div>
          </div>
        </div>
      </AppContainer>
    );
  }
}

export default Landing;
