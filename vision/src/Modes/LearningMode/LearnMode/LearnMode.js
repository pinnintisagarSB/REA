import React from "react";
import { Link } from "react-router-dom";
import "./LearnMode.css";
export const LearnMode = () => {
  return (
    <div className="learnMode">
      <div className="opt">
        <Link className="box" to="/ComputerNotes">
          <div className="mode">Computer Notes</div>
        </Link>
        <Link className="box" to="/EnglishNotes">
          <div className="mode">English Notes</div>
        </Link>
      </div>
      <div className="back">
        <Link to="/LearningMode" className="b">
          <button className="sp">Back</button>
        </Link>
      </div>
    </div>
  );
};
