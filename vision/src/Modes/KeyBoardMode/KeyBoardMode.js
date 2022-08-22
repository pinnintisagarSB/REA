import React from "react";
import "./KeyBoardMode.css";
import { Link } from "react-router-dom";

export const KeyBoardMode = () => {
  return (
    <div className="keyboard">
      <div className="opt">
        <Link className="box" to="/LearnTypingMode">
          <div className="mode">Learn Typing</div>
        </Link>
        <Link className="box" to="/TestTypingMode">
          <div className="mode">Test Mode</div>
        </Link>
      </div>
      <div className="back">
        <Link to="/" className="b">
          <button className="sp">Back</button>
        </Link>
      </div>
    </div>
  );
};
