import React, { useState } from "react";
import styled from "styled-components";
import Expand from "./Expand";
import { Spring, animated } from "react-spring";
import { interpolate } from "flubber";
import { useMedia } from "the-platform";

import gradients from "../assets/data/gradients";

import h2rgb from "hex-rgb";

import { Facebook, Twitter, Instagram, Slack } from "./Icons";
import Mango from "./shared/Mango";
import AnimatedMango from "./AnimatedMango";

const SCREEN_SIZES = {
  small: 769
};

function randFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randBetween(from, to) {
  return from + Math.floor(Math.random() * to);
}

function FilterDefs(props) {
  return (
    <svg>
      <defs>
        <linearGradient id="blobgrad" x1="50%" y1="100%" x2="50%" y2="0%">
          <stop stopColor={`${props.fromGrad || "#FF5367"}`} offset="0%" />
          <stop stopColor={`${props.toGrad || "#FA5E3E"}`} offset="100%" />
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

const bgs = [
  require("../assets/mangohacks-people-1.jpg"),
  require("../assets/mangohacks-people-2.jpg"),
  require("../assets/mangohacks-people-3.jpg"),
  require("../assets/mangohacks-people-4.jpg"),
  require("../assets/mangohacks-people-5.jpg")
];
const bg = randFrom(bgs);

function HeroBg(props) {
  let fromGrad = h2rgb(props.fromGrad);

  fromGrad = `rgba(${fromGrad.red}, ${fromGrad.green}, ${fromGrad.blue}, 0.39)`;

  return (
    <HeroImage bg={bg}>
      <div className="herobg-image" />
      <div
        className="herobg-grad"
        style={{
          backgroundImage: `linear-gradient(
            0deg, 
            #ffffff 0%,
            rgba(255, 255, 255, 0) 60%,
              ${fromGrad} 100%, 
            ${props.toGrad || "#fa5e3e"} 100%)`
        }}
      />
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
    // box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.22);
    border-radius: 100px;
    padding: 12px 100px;
  }

  :hover {
    color: white !important;
    text-decoration: none;
  }
`;

function getTop(frac) {
  return `${window.innerHeight * frac}px`;
}

function getLeft(frac) {
  return `${window.innerWidth * frac}px`;
}

const blobPaths = [
  [
    "M52.3 48.2c-96.4 79.3-70 268.3 167.6 292.3 237.5 24 249.6-50.5 349.5 86.6 100 137.1 257.7 156.4 309 97.5 51.2-59 170.7-259 115.3-362.9C956.7 92.6 828.5 45.4 609 20.2c-307-34.3-492.5-25-556.7 28z",
    "M62.5 53c-96.4 79.3-58.5 251 163 312.5s257.1-7.5 374 81c116.9 88.5 243.3 124 294.5 65 51.2-59 137.4-247.2 82-351-37-69.2-159.3-116-367-140.3C308.9-10.8 126.7.2 62.5 53z",
    "M56 56c-95.7 79.2-73.7 260.5 163.9 284.5 237.5 24 252.6-56.5 352.5 80.6 100 137.1 257.7 156.4 309 97.5C932.6 459.6 1055 285 983 170 935 93.3 814 41.7 620 15 307.8-10.4 119.8 3.2 56 56z"
  ],
  [
    "M607.5 412c-156.8 131.4-251.5 114.2-353 80.2C145.4 455.7 42.2 402 5 274.9-32.4 147.7 196-127.4 249 69.5 301.7 266.4 357.7 265.6 445 289c63.7 17 169.3 24.3 180.4 56.2 4.1 11.7 24.4 31.4-17.9 66.8z",
    "M605.5 417C448.7 548.4 355.6 542.5 254 508.5c-109-36.4-225.5-68-251-228.6C-22.5 119.2 194-122.4 247 74.5c52.8 196.9 116.8 182 204 205.4 63.7 17 161.3 38.4 172.4 70.3 4.1 11.7 24.4 31.4-17.9 66.8z",
    "M605.5 406c-135.5 145.4-272.4 133-374 99-109-36.4-203-75.5-228.5-236.1C-22.5 108.2 188-109 247 63.5 305.7 236 363.7 245.5 451 269c63.7 17 150.9 18.7 162 50.6 4.1 11.8 27 49.5-7.5 86.5z"
  ],
  [
    "M95.2 2c69.6 6.8 305 63.3 306.7 188.9 1.6 125.5-74.2 190-209.1 169.6C57.8 340.1-12.6 203.7 2 109.7 16.8 15.7 25.5-4.7 95.1 2z",
    "M114.9 4.6c62.7 0 289 74.3 272.7 203-16.2 128.8-91.2 170-225 141.3C29 320.2 6.3 145.5 13.8 96.2 21.2 46.8 52.1 4.7 115 4.6z",
    "M101 6.4c71.6 0 299.9 73.2 299.8 182 0 108.6-91.2 183.2-228.3 172.9C35.3 351 4.3 175.6 4.3 117S29.5 6.5 101.1 6.4z"
  ]
];

const blobParams = [
  {
    viewBox: "0 0 1073 620",
    interpolators: makeInterpolators(blobPaths[0], 35)
  },
  {
    viewBox: "0 0 632 535",
    interpolators: makeInterpolators(blobPaths[1], 10)
  },
  {
    viewBox: "0 0 402 365",
    interpolators: makeInterpolators(blobPaths[2], 30)
  }
];

function makeInterpolators(paths, segments = 40) {
  const interpols = [];
  for (let i = 0; i < paths.length; i++) {
    interpols.push(
      interpolate(paths[i], paths[i + 1] || paths[0], {
        maxSegmentLength: segments
      })
    );
  }
  return interpols;
}

function Blob(props) {
  const { width, height, kind = 0, delay = 0 } = props;
  const [index, setIndex] = useState(randBetween(0, 2));
  const { viewBox, interpolators } = blobParams[kind];

  function goNext() {
    setIndex(index + 1 >= interpolators.length ? 0 : index + 1);
  }

  const interpolator = interpolators[index];

  return (
    <div>
      <svg
        width={`${width}px`}
        height={`${height}px`}
        overflow="visible"
        viewBox={viewBox}
      >
        <g fill="url(#blobgrad)" fillRule="evenodd">
          <Spring
            reset
            config={{ tension: 280, friction: 240, delay }}
            native
            from={{ t: 0 }}
            to={{ t: 1 }}
            onRest={goNext}
          >
            {({ t }) => <animated.path d={t.interpolate(interpolator)} />}
          </Spring>
        </g>
      </svg>
    </div>
  );
}

function Hero(props) {
  const isSmall = useMedia({ maxWidth: SCREEN_SIZES.small });

  return (
    <React.Fragment>
      <HeroContainer>
        <FilterDefs fromGrad={props.fromGrad} toGrad={props.toGrad} />

        <HeroBg fromGrad={props.fromGrad} toGrad={props.toGrad} />
        {isSmall ? (
          <React.Fragment>
            {/* <BlobWrap top={getTop(-1 / 24)} left={getLeft(-9 / 18)}>
              <Blob kind={2} width={500} height={300} />
            </BlobWrap> */}
          </React.Fragment>
        ) : (
          <React.Fragment>
            <BlobWrap top={getTop(3 / 24)} left={getLeft(-1 / 18)}>
              <Blob kind={2} width={500} height={300} />
            </BlobWrap>
            <BlobWrap top={getTop(-1 / 30)} left={getLeft(7 / 10)}>
              <Blob width={700} height={400} delay={400} />
            </BlobWrap>
          </React.Fragment>
        )}

        <HeroContent>
          <div className="mangowrap">
            <AnimatedMango width={"100%"} height={"135px"} />
          </div>
          <Spring
            from={{ opacity: 0, transform: "translateY(10px)" }}
            to={{ opacity: 1, transform: "translateY(0)" }}
            delay={2100}
          >
            {animatedStyles => (
              <div style={{ ...animatedStyles, textAlign: "center" }}>
                <div className="tagline">It just got sweeter</div>
                <h1 className="title">MangoHacks</h1>
                <div className="info" style={animatedStyles}>
                  Feb 1st - 3rd | Florida International University
                </div>
              </div>
            )}
          </Spring>
          <Spring
            from={{ opacity: 0, transform: "translateY(10px)" }}
            to={{ opacity: 1, transform: "translateY(0)" }}
            delay={2300}
          >
            {animatedStyles => (
              <div style={animatedStyles}>
                <RegisterButton
                  href="/hacker"
                  style={{
                    backgroundImage: `linear-gradient(0deg, ${props.fromGrad ||
                      "#ff5367"} 0%, ${props.toGrad || "#fa5e3e"} 100%)`
                  }}
                >
                  Register
                </RegisterButton>
              </div>
            )}
          </Spring>
        </HeroContent>
      </HeroContainer>
      {isSmall ? (
        <React.Fragment>
          {/* <BlobWrap deg={30} top={getTop(7 / 10)} left={getLeft(6.2 / 10)}>
            <Blob kind={1} width={500} height={400} delay={600} />
          </BlobWrap> */}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <BlobWrap top={getTop(3.1 / 5)} left={getLeft(4 / 24)}>
            <Blob kind={1} width={600} height={400} delay={800} />
          </BlobWrap>
          <BlobWrap deg={30} top={getTop(7 / 10)} left={getLeft(8.5 / 10)}>
            <Blob kind={1} width={500} height={400} delay={600} />
          </BlobWrap>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

const bgs_about = [
  require("../assets/mangohacks-about-1.jpg"),
  require("../assets/mangohacks-about-2.jpg")
];

const bg_about_rand = randFrom(bgs_about);

function About(props) {
  return (
    <div className="about">
      <div className="about-bg">
        <div
          className="about-bg-img"
          style={{ backgroundImage: `url("${bg_about_rand}"` }}
        />
        <div
          className="about-bg-grad"
          style={{
            backgroundImage: `linear-gradient(0deg, ${props.fromGrad ||
              "#ff5367"} 0%, ${props.toGrad || "#fa5e3e"} 100%)`
          }}
        />
      </div>
      <div className="about-content container">
        <h2>
          What is <br /> MangoHacks?
        </h2>
        <p>
          MangoHacks is a chance to meet new people, learn cool things, build
          something new, dream big, and have fun.
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
    transform: translate(10px);


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
    box-shadow: 0px 1px 11px -2px rgba(0, 0, 0, 0.2);
    translate(10px);
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

function Faqs() {
  const isSmall = useMedia({ maxWidth: SCREEN_SIZES.small });
  const faqs = [
    {
      question: "When and where?",
      answer: (
        <React.Fragment>
          <p>
            MangoHacks 2019 will take place at Florida International
            University’s PG6 Tech Station from February 1st - 3rd.
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
            food, to swag, and snacks. You only need to worry about what you’ll
            learn and build throughout the weekend.
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
            Hacking will start at 10pm on Friday the 1st and will go until 8am
            on Sunday the 3rd. Closing ceremony will be done by 1pm on Sunday.
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
            eye out for details on gas reimbursements and bus routes!
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
            you were a student we'd still love to have you as a mentor for the
            hackers.
          </p>
        </React.Fragment>
      )
    },
    {
      question: "What do I need to bring?",
      answer: (
        <React.Fragment>
          <p>
            You’ll need an ID, laptop, chargers, phone, you know, the basics.
            You’ll probably also want to bring some basic hygiene products.
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
            team or an idea. MangoHacks has always believed that{" "}
            <b>anyone can hack</b>, which is why we’ll have great mentors and
            tools to help you with your projects.
          </p>
        </React.Fragment>
      )
    },
    {
      question: "What’s the deal with teams?",
      answer: (
        <React.Fragment>
          <p>
            Don't worry! You can hack solo, but the more the merrier. You don’t
            need to have a team ready before the event - there will be amazing
            people who you can join at the event. If you have some friends in
            mind though, you’re more than welcome to stay together, but make
            sure it's 4 people to a team.
          </p>
        </React.Fragment>
      )
    },
    {
      question: "Can I ...?",
      answer: (
        <React.Fragment>
          <p>
            <b>Mentor: </b> We love our mentors! <a href="/mentor">Signup</a> to
            mentor at MangoHacks!🚀
          </p>
          <p>
            <b>Teach a workshop: </b> <a href="/workshop">Teach with us</a> and
            show others your unique skills at MangoHacks 🙅🏻‍♂️!
          </p>
          <p>
            <b>Volunteer: </b>
            <a href="/volunteer">Join us</a> and be part of Florida's Sweetest
            organizing team! 🎉🥭
          </p>
        </React.Fragment>
      )
    },
    {
      question: "Wait! What about...?",
      answer: (
        <React.Fragment>
          <p>
            If you have any other questions, hit us up{" "}
            <a href="mailto:team@mangohacks.com">team@mangohacks.com</a>
          </p>
        </React.Fragment>
      )
    }
  ];

  return (
    <div className="faqs">
      {isSmall ? (
        <React.Fragment>
          {/* <BlobWrap top={getTop(-1 / 12)} left={getLeft(-2.5 / 9)}>
            <Blob width={300} height={400} kind={2} />
          </BlobWrap>
          <BlobWrap deg={40} top={getTop(2.9 / 5)} left={getLeft(4 / 5)}>
            <Blob width={350} height={300} kind={1} />
          </BlobWrap> */}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <BlobWrap top={getTop(-1 / 12)} left={getLeft(-1 / 9)}>
            <Blob width={400} height={500} kind={2} />
          </BlobWrap>
          <BlobWrap deg={90} top={getTop(1.5 / 5)} left={getLeft(4.2 / 5)}>
            <Blob width={450} height={370} kind={0} />
          </BlobWrap>
        </React.Fragment>
      )}

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
    <section
      className="schedule"
      style={{
        backgroundImage: `linear-gradient(0deg, ${props.fromGrad ||
          "#ff5367"} 0%, ${props.toGrad || "#fa5e3e"} 100%)`
      }}
    >
      <div className="container">
        <h2 className="heading global-secondary-color generalReveal">
          Schedule
        </h2>
        <div className="days">
          <div className="day generalReveal">
            <h3>
              <b>Friday</b>
            </h3>
            <ul className="times">
              <li>
                <span className="time global-accent-color">5:00pm</span>
                Check-In
              </li>
              <li>
                <span className="time global-accent-color">6:00pm</span> Dinner
              </li>
              <li>
                <span className="time global-accent-color">7:00pm</span> Opening
                Ceremony
              </li>
              <li>
                <span className="time global-accent-color">9:00pm</span> Hacking
                Begins
              </li>
              <li>
                <span className="time global-accent-color">10:00pm</span> Team
                Building
              </li>
            </ul>
          </div>
          <div className="day generalReveal">
            <h3>
              <b>Saturday</b>
            </h3>
            <ul className="times">
              <li>
                <span className="time global-accent-color">12:00am</span>{" "}
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
            <h3>
              <b>Sunday</b>
            </h3>
            <ul className="times">
              <li>
                <span className="time global-accent-color">12:00am</span>{" "}
                Midnight Snack
              </li>
              <li>
                <span className="time global-accent-color">7:00am</span> Devpost
                Submissions Due
              </li>
              <li>
                <span className="time global-accent-color">8:15am</span>{" "}
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
                <span className="time global-accent-color">1:00pm</span>{" "}
                MangoHacks Ends
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sponsors() {
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
    },
    {
      name: "Citrix",
      link: "https://www.citrix.com/",
      logo: require("../assets/sponsors/citrix.png")
    },
    {
      name: "8Base",
      link: "https://www.8base.com/",
      logo: require("../assets/sponsors/8base.png")
    }
  ];

  const tier12 = [
    {
      name: "Ultimate Software",
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
        <h5 className="text-muted" style={{ marginBottom: "50px" }}>
          MangoHacks is possible thanks to these amazing people.
        </h5>
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

class Landing extends React.Component {
  render() {
    const gradient = randFrom(gradients);

    return (
      <AppContainer>
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {props => (
            <div style={props}>
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

              <Hero fromGrad={gradient.from} toGrad={gradient.to} />
              <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={1500}>
                {animatedStyles => (
                  <div className="container intro" style={animatedStyles}>
                    <h2>A place for discovery</h2>
                    <p>
                      Mangohacks is a 36 hour hackathon that encourages
                      learning, collaboration, growth, innovation, and fun. We
                      will welcome 500+ students from Florida and across the
                      country, amazing mentors, and wonderful sponsors to create
                      amazing things. MangoHacks is organized by students for
                      students, with the strong belief that anyone can hack.
                    </p>
                  </div>
                )}
              </Spring>
              <About fromGrad={gradient.from} toGrad={gradient.to} />
              <Faqs />
              <Schedule fromGrad={gradient.from} toGrad={gradient.to} />
              <Sponsors />
              <div
                className="footer"
                style={{
                  backgroundImage: `linear-gradient(0deg, ${gradient.from ||
                    "#ff5367"} 0%, ${gradient.to || "#fa5e3e"} 100%)`
                }}
              >
                <div className="container">
                  <div className="social-media">
                    <div style={{ marginBottom: "10px" }}>
                      <a
                        href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                        target="_blank"
                        className="mlh-link"
                      >
                        MLH Code of Conduct
                      </a>
                    </div>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/MangoHacks"
                    >
                      <Facebook fill="#ffffff" />
                    </a>
                    <a target="_blank" href="https://twitter.com/fiumangohacks">
                      <Twitter fill="#ffffff" />
                    </a>
                    <a
                      target="_blank"
                      href="https://instagram.com/fiumangohacks"
                    >
                      <Instagram fill="#ffffff" />
                    </a>
                    <a target="_blank" href="https://mangohacks.slack.com/">
                      <Slack fill="#ffffff" />
                    </a>
                  </div>
                  <div>© mangohacks.com</div>
                </div>
              </div>
            </div>
          )}
        </Spring>
      </AppContainer>
    );
  }
}

export default Landing;
