import React, { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import "./NavBar.css";
import { lightBlue } from "@mui/material/colors";
import { Link, useLocation } from "react-router-dom";
export const NavBar = () => {
  const l = useLocation();
  var s = new SpeechSynthesisUtterance();
  s.lang = "en-US";
  s.volume = 1;
  s.rate = 1;
  s.pitch = 1;
  useEffect(() => {
    if (l.pathname === "/") {
      s.text = "You are in Home screen!";
    } else if (l.pathname === "/learningMode") {
      s.text = "You are in Learning Mode!";
    } else if (l.pathname === "/BrowsingMode") {
      s.text = "You are in Browsing Mode!";
    } else if (l.pathname === "/HelpMode") {
      s.text = "You are in Help Mode!";
    } else if (l.pathname === "/KeyBoardMode") {
      s.text = "You are in Keyboard Mode!";
    } else if (l.pathname === "/TestTypingMode") {
      s.text = "You are in Test Typing Mode!";
    } else if (l.pathname === "/LearnTypingMode") {
      s.text = "You are in Learn Keyboard Mode!";
    } else if (l.pathname === "/LearnMode") {
      s.text = "You are in Learn Mode!";
    } else if (l.pathname === "/TestMode") {
      s.text = "You are in Test Mode!";
    }
    window.speechSynthesis.speak(s);
  });
  return (
    <div className="navbar">
      <div className="logo">
        <Link className="l" to="/">
          VISION
        </Link>
      </div>
      <button className="user">
        <Avatar
          sx={{ bgcolor: lightBlue[500], width: "3.5rem", height: "3.5rem" }}
          alt=""
          src="/broken-image.jpg"
        />
        <div className="usr">
          Hello!
          <br />
          User
        </div>
      </button>
    </div>
  );
};
