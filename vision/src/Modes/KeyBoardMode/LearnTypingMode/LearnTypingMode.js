import React from "react";
import { Link } from "react-router-dom";
import "./LearnTypingMode.css";
export const LearnTypingMode = () => {
  return (
    <div className="learnTypingMode">
      <div className="opt">
        <Link className="box" to="/PractiseMode">
          <div className="mode">Practise Mode</div>
        </Link>
        <Link className="box" to="/KeyMode">
          <div className="mode">Key Mode</div>
        </Link>
      </div>
      <div className="back">
        <Link to="/KeyBoardMode" className="b">
          <button className="sp">Back</button>
        </Link>
      </div>
    </div>
  );
};
