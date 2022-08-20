import React from "react";
import "./TestMode.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { yellow } from "@mui/material/colors";
export const TestMode = () => {
  return (
    <div className="TestMode">
      <div className="back">
        <Link to="/">
          <ArrowBackIcon sx={{ fontSize: "4rem", color: yellow[500] }} />
        </Link>
      </div>
      <div className="opt">
        <Link className="box" to="/ComputerQuiz">
          <div className="mode">Computer Quiz</div>
        </Link>
        <Link className="box" to="/EnglishQuiz">
          <div className="mode">English Quiz</div>
        </Link>
      </div>
    </div>
  );
};
