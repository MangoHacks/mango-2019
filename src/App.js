import React, { Component, useState, useEffect, useRef } from "react";
import styled from "styled-components";

import "./App.css";
import { visible } from "ansi-colors";

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
                animationIterationCount: "infinite",
                animationDuration: `${animDuration + index * animDurVar}s`,
                animationDelay: `${index * animDelayVar}s`,
                animationTimingFunction: "linear",
                animationDirection: `${animDir}`
              };

              return (
                <circle
                  key={index}
                  fill="url(#blobgrad)"
                  cx={`${ball.x}px`}
                  cy={`${ball.y}px`}
                  r={`${ball.radius}px`}
                  style={style}
                />
              );
            })}
            {mirrorVariance &&
              balls.map((ball, index) => {
                const origin = 5 * index + width / 2;
                let animDir = randFrom(animationDirs);
                let style = {
                  transformOrigin: `${origin}px ${origin}px`,
                  animationName: "blob-spin",
                  animationIterationCount: "infinite",
                  animationDuration: `${animDuration + index * animDurVar}s`,
                  animationDelay: `${index * animDelayVar}s`,
                  animationTimingFunction: "linear",
                  animationDirection: `${animDir}`
                };

                return (
                  <circle
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
    require("./assets/mangohacks-people-1.jpg"),
    require("./assets/mangohacks-people-2.jpg")
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
    font-size: 1.4em;
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
    font-size: 1.4em;
    text-align: center;
    font-weight: 600;
    text-shadow: 0px 1px 1px rgba(255, 255, 255, 0.8);
    margin-bottom: 20px;
  }
`;

const AppContainer = styled.div`
  position: relative;
`;

const BlobWrap = styled.div`
  position: absolute;
  top: ${props => props.top || "50%"};
  left: ${props => props.left || "50%"};
  transform: ${props => "rotate(" + props.deg + "deg)"};
`;

const RegisterButton = styled.a`
  color: white;
  /* background: #fd5756; */
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
        top={getTop(3.9 / 5)}
        left={getLeft(4 / 5)}
      >
        <Blob width={500} height={350} particles={4} radius={70} radVar={18} />
      </BlobWrap>
    </React.Fragment>
  );
}

class App extends Component {
  render() {
    return (
      <AppContainer>
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
        <div className="about">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1925"
            height="955"
            viewBox="0 0 1925 955"
          >
            <defs>
              <linearGradient
                id="about-fill"
                x1="50%"
                x2="50%"
                y1="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#FF5367" />
                <stop offset="100%" stopColor="#FA5E3E" />
              </linearGradient>
            </defs>
            <path
              fill="url(#about-fill)"
              id="about-path"
              d="M37.2 173.2c1014-64 1674-87 1980-69.2 459 26.8 276 112.6 275.8 331.2-.2 145.7-8.1 316.7-23.9 513-913.2 53.2-1522.8 79.9-1828.8 80-306 0-431.7-67.3-377.1-201.6l-26-653.4z"
            />
          </svg>
          <div className="container">
            <h2>
              What is <br /> MangoHacks?
            </h2>
            <p>
              MangoHacks is a chance to meet new people, learn something, make
              something, dream along, and have fun.
            </p>
            <p>
              Everyone is welcomed - from the most experienced hackers and
              builders to the thinkers and the curious who have never heard of a
              hackathon. Regardless of your experience, there is something for
              you at MangoHacks.
            </p>
            <p>
              We’d love for you to come learn something new, take the things you
              love (sports, art, traveling, dogs!) or care about (poverty, sea
              level rise, hunger) and combine them with techonology to make
              something different, something cool, or something to improve the
              world.
            </p>
            <p>It’ll be sweet. We promise.</p>
          </div>
        </div>
      </AppContainer>
    );
  }
}

export default App;
