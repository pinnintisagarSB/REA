import React from "react";
import { Link } from "react-router-dom";
import learn from "./learnmode.jpeg";
import keyboard from "./keyboard.jpg";
import help from "./helpmode.jpg";
import brows from "./browser.jpg";
import "./Home.css";

export const Home = () => {
  var s = new SpeechSynthesisUtterance();
  s.lang = "en-US";
  s.volume = 1;
  s.rate = 1;
  s.pitch = 1;
  function speakMode(md) {
    s.text = `you are hovering on ${md}`;
    window.speechSynthesis.speak(s);
  }
  return (
    <div className="home">
      <div className="Modes">
        <div className="c1">
          <Link to="/learningMode" className="l">
            <button
              onMouseOver={() => speakMode("Learning mode")}
              onMouseOut={() => {}}
              className="Mode"
              style={{
                backgroundImage: `url(${learn})`,
                backgroundSize: "cover",
              }}
            >
              <h1>
                LEARNING
                <br />
                MODE
              </h1>
            </button>
          </Link>
          <Link to="/BrowsingMode" className="l">
            <button
              onMouseOver={() => speakMode("Browsing mode")}
              onMouseOut={() => {}}
              className="Mode"
              style={{
                backgroundImage: `url(${brows})`,
                backgroundSize: "cover",
              }}
            >
              <h1>
                BROWSING
                <br />
                MODE
              </h1>
            </button>
          </Link>
        </div>
        <div className="c2">
          <Link to="/KeyBoardMode" className="l">
            <button
              onMouseOver={() => speakMode("Keyboard mode")}
              onMouseOut={() => {}}
              className="Mode"
              style={{
                backgroundImage: `url(${keyboard})`,
                backgroundSize: "cover",
              }}
            >
              <h1>
                KEYBOARD
                <br />
                MODE
              </h1>
            </button>
          </Link>
          <Link to="/HelpMode" className="l">
            <button
              onMouseOver={() => speakMode("Help mode")}
              onMouseOut={() => {}}
              className="Mode"
              style={{
                backgroundImage: `url(${help})`,
                backgroundSize: "cover",
              }}
            >
              <h1>
                HELP
                <br />
                MODE
              </h1>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
