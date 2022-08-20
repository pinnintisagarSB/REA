import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { yellow } from "@mui/material/colors";
import "./LearningMode.css";
export const LearningMode = () => {
  return (
    <div className="learning">
      <div className="back">
        <Link to="/">
          <ArrowBackIcon sx={{ fontSize: "4rem", color: yellow[500] }} />
        </Link>
      </div>
      <div className="opt">
        <Link className="box" to="/LearnMode">
          <div className="mode">Learn Mode</div>
        </Link>
        <Link className="box" to="/TestMode">
          <div className="mode">Test Mode</div>
        </Link>
      </div>
    </div>
  );
};
