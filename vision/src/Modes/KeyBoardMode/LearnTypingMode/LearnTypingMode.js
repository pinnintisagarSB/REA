import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { yellow } from "@mui/material/colors";
import "./LearnTypingMode.css";
export const LearnTypingMode = () => {
  return (
    <div className="learnTypingMode">
      <div className="back">
        <Link to="/">
          <ArrowBackIcon sx={{ fontSize: "4rem", color: yellow[500] }} />
        </Link>
      </div>
      <div className="opt">
        <Link className="box" to="/PractiseMode">
          <div className="mode">Practise Mode</div>
        </Link>
        <Link className="box" to="/KeyMode">
          <div className="mode">Key Mode</div>
        </Link>
      </div>
    </div>
  );
};
