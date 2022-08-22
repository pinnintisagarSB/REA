import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./PractiseMode.css";
export const PractiseMode = () => {
  const [value, setValue] = useState("");
  let val = "";
  var s = new SpeechSynthesisUtterance();
  s.lang = "en-US";
  s.volume = 1;
  s.rate = 1;
  s.pitch = 1;
  useEffect(() => {
    document.addEventListener("keydown", detectDown, true);
  }, []);
  const detectDown = (e) => {
    if (e.key === " ") {
      s.text = val;
      window.speechSynthesis.speak(s);
      val = "";
    } else {
      val += e.key;
    }
  };
  return (
    <div className="speech">
      <h1>Practise Mode</h1>
      <div className="group">
        <textarea
          placeholder="Type Something..."
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        ></textarea>
      </div>
      <div className="group2">
        <button
          className="sp"
          onClick={() => {
            s.text = value;
            window.speechSynthesis.speak(s);
          }}
        >
          Speech
        </button>
        <Link to="/LearnTypingMode" className="b">
          <button className="sp">Back</button>
        </Link>
      </div>
    </div>
  );
};
