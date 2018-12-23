import React, { useState, useEffect, useRef } from "react";
import { Spring, animated } from "react-spring";

function MangoBody() {
  const path = useRef(null);
  const [offset, setOffset] = useState(10);

  useEffect(() => {
    setOffset(path.current.getTotalLength());
  }, []);

  return (
    <Spring
      native
      reset
      from={{ dash: offset, opacity: 0 }}
      to={{ dash: 0, opacity: 1 }}
      config={{ duration: 1000 }}
    >
      {props => (
        <animated.path
          ref={path}
          stroke="#000000"
          opacity={props.opacity}
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray={offset}
          strokeDashoffset={props.dash}
          d="M239.4 111.2c-4 26-20.1 51.4-47.8 72.5-72.6 55.3-149.8 31-177-3.2a34 34 0 0 1-6.2-16c-1.4-9.7.6-21.2 9.4-30 54-54 45.6-96 100-119.8a89 89 0 0 1 102.2 26 91.4 91.4 0 0 1 19.4 70.5z"
        />
      )}
    </Spring>
  );
}

function MangoStem() {
  const path = useRef(null);
  const [offset, setOffset] = useState(100);

  useEffect(() => {
    setOffset(path.current.getTotalLength());
  }, []);

  return (
    <Spring
      native
      reset
      from={{ dash: offset, opacity: 0 }}
      to={{ dash: 0, opacity: 1 }}
      config={{ duration: 1000 }}
    >
      {props => (
        <animated.path
          ref={path}
          stroke="#000000"
          strokeWidth="14"
          opacity={props.opacity}
          strokeLinecap="round"
          strokeDasharray={offset}
          strokeDashoffset={props.dash}
          d="M208.4 29s14.8-9.3 19.1-15.3c0 0 6.2 4.1 10.7 14.5l-15 16.6S214 33.5 208.4 29z"
        />
      )}
    </Spring>
  );
}

function MangoLeaf() {
  const path = useRef(null);
  const [offset, setOffset] = useState(100);

  useEffect(() => {
    setOffset(path.current.getTotalLength());
  }, []);

  return (
    <Spring
      native
      reset
      from={{ dash: offset }}
      to={{ dash: 0 }}
      delay={800}
      config={{ duration: 1000 }}
    >
      {props => (
        <animated.path
          ref={path}
          stroke="#000000"
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray={offset}
          strokeDashoffset={props.dash}
          d="M256.4 195.8a71 71 0 0 1-26.4-22 42.8 42.8 0 0 1-6.3-15.8 47.5 47.5 0 0 1-.7-6.1 4.3 4.3 0 0 1 0-1.1c.1-.4.7-1 1-1.3q2.7-3.5 5.1-7.3a79.5 79.5 0 0 0 12.2-33.5 84 84 0 0 0-4.1-36 100.6 100.6 0 0 0-8.2-18 106 106 0 0 0-2.5-4.2l-1.4-2c0-.2-.6-.8-.6-1s.3-.2.3-.3c1.3-1.8 4.4-1.8 6.3-2.1 19.2-3.6 41.2 16.9 44.5 50.5 2.4 24.4-13.6 65.5-19.2 100.2z"
        />
      )}
    </Spring>
  );
}

function MangoShine() {
  const path = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setOffset(path.current.getTotalLength());
  }, []);

  return (
    <Spring
      native
      reset
      delay={1000}
      from={{ dash: offset }}
      to={{ dash: 0 }}
      config={{ duration: 700 }}
    >
      {props => (
        <animated.path
          ref={path}
          stroke="#000000"
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray={offset}
          strokeDashoffset={props.dash}
          d="M99.6 188.4s70.7-7.3 97-54.1"
        />
      )}
    </Spring>
  );
}

function MangoShineDot() {
  return (
    <Spring
      native
      reset
      delay={1700}
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ duration: 800 }}
    >
      {props => (
        <animated.circle
          cx="207.2"
          cy="111.6"
          r="5.8"
          style={props}
          fill="#000000"
        />
      )}
    </Spring>
  );
}

function MangoSplat() {
  const path = useRef(null);
  const [offset, setOffset] = useState(50);

  useEffect(() => {
    setOffset(path.current.getTotalLength());
  }, []);

  return (
    <g id="splatLineGroup" filter="url(#mangoo)">
      <Spring
        native
        delay={1700}
        reset
        from={{ dash: offset }}
        to={{ dash: -55 }}
        config={{ duration: 550 }}
      >
        {props => (
          <animated.g>
            <animated.line
              strokeDasharray={offset}
              strokeDashoffset={props.dash}
              ref={path}
              stroke="#000000"
              strokeWidth="8"
              x1="207.2"
              y1="111.6"
              x2="207.2"
              y2="60.7"
            />
            <animated.line
              strokeDasharray={offset}
              strokeDashoffset={props.dash}
              stroke="#000000"
              strokeWidth="8"
              x1="207.2"
              y1="111.6"
              x2="258.1"
              y2="111.6"
            />
            <animated.line
              strokeDasharray={offset}
              strokeDashoffset={props.dash}
              stroke="#000000"
              strokeWidth="8"
              x1="207.2"
              y1="111.6"
              x2="242.9"
              y2="75.9"
            />
            <animated.line
              strokeDasharray={offset}
              strokeDashoffset={props.dash}
              stroke="#000000"
              strokeWidth="8"
              x1="207.2"
              y1="111.6"
              x2="243.4"
              y2="147.8"
            />
            <animated.line
              strokeDasharray={offset}
              strokeDashoffset={props.dash}
              stroke="#000000"
              strokeWidth="8"
              x1="207.2"
              y1="111.6"
              x2="207.2"
              y2="162.7"
            />
            <animated.line
              strokeDasharray={offset}
              strokeDashoffset={props.dash}
              stroke="#000000"
              strokeWidth="8"
              x1="207.2"
              y1="111.6"
              x2="171.5"
              y2="147.4"
            />
            <animated.line
              strokeDasharray={offset}
              strokeDashoffset={props.dash}
              stroke="#000000"
              strokeWidth="8"
              x1="207.2"
              y1="111.6"
              x2="157.8"
              y2="111.6"
            />
            <animated.line
              strokeDasharray={offset}
              strokeDashoffset={props.dash}
              stroke="#000000"
              strokeWidth="8"
              x1="207.2"
              y1="111.6"
              x2="170.9"
              y2="75.3"
            />
          </animated.g>
        )}
      </Spring>
    </g>
  );
}

export default function AnimatedMango(props) {
  const { width = 500, height = "auto" } = props;

  return (
    <svg width={width} height={height} viewBox="0 0 282.8 224.4">
      <defs>
        <filter id="mangoo" height="300%" y="-100%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 17 -7"
          />
        </filter>
      </defs>
      <g fill="transparent">
        <MangoLeaf />
        <MangoBody />
        <MangoStem />
        <MangoShine />
        <MangoSplat />
        <MangoShineDot />
      </g>
    </svg>
  );
}
