import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
export const Home = () => {
  return (
    <div className="home">
      <div className="Modes">
        <div className="c1">
          <Link to="/learningMode" className="l">
            <button className="Mode">
              <h1>
                LEARNING
                <br />
                MODE
              </h1>
            </button>
          </Link>
          <Link to="/BrowsingMode" className="l">
            <button className="Mode">
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
            <button className="Mode">
              <h1>
                KEYBOARD
                <br />
                MODE
              </h1>
            </button>
          </Link>
          <Link to="/HelpMode" className="l">
            <button className="Mode">
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
