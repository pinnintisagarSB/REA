import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { yellow } from "@mui/material/colors";
import "./LearnTypingMode.css";
export const LearnTypingMode = () => {
  const [Key, setKey] = useState("");
  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  }, []);
  const detectKeyDown = (e) => {
    setKey(e.key);
    var s = new SpeechSynthesisUtterance();
    s.lang = "en-US";
    s.volume = 9;
    s.rate = 1;
    s.pitch = 1;
    if (e.key === " ") {
      setKey("Space");
      s.text = "Space";
      window.speechSynthesis.speak(s);
    } else if (e.key === "tab") {
      setKey("Tab");
    } else if (e.key === "Meta") {
      setKey("Windows Key");
      s.text = "Window Key";
      window.speechSynthesis.speak(s);
    } else {
      s.text = e.key;
      window.speechSynthesis.speak(s);
    }
    s.onend = () => {};
  };
  function endSpeak() {
    window.speechSynthesis.cancel();
  }
  return (
    <div className="LearnTyping">
      <div className="back" onClick={endSpeak}>
        <Link to="/KeyBoardMode">
          <ArrowBackIcon sx={{ fontSize: "4rem", color: yellow[500] }} />
        </Link>
      </div>
      <div className="main">
        <h1>You Typed </h1>
        <h2>{Key}</h2>
      </div>
    </div>
  );
};
