import React, { useEffect, useState } from "react";
import "./TestTypingMode.css";
import { Link } from "react-router-dom";
export const TestTypingMode = () => {
  const [Key, setKey] = useState("");
  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  }, []);
  const detectKeyDown = (e) => {
    e.preventDefault();
    setKey(e.key);
    var s = new SpeechSynthesisUtterance();
    s.lang = "en-US";
    s.volume = 1;
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
    <div className="TestTyping">
      <h1>Test Typing Mode</h1>
      <div className="main">
        <h1>You Typed </h1>
        <h2>{Key}</h2>
      </div>
      <div className="back" onClick={endSpeak}>
        <Link to="/KeyBoardMode" className="b">
          <button className="sp">Back</button>
        </Link>
      </div>
    </div>
  );
};
