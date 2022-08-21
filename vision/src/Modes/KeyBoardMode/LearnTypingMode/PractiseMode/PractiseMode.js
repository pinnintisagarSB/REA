import React, { useState, useEffect } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import "./PractiseMode.css";
export const PractiseMode = () => {
  const [value, setValue] = useState("");
  const [Key, setKey] = useState("");
  let [data, setData] = useState("");
  let val = "";
  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  }, []);
  const { speak } = useSpeechSynthesis();
  function detectKeyDown(e) {
    setKey(e.Key);
    var s = new SpeechSynthesisUtterance();
    s.lang = "en-US";
    s.volume = 1;
    s.rate = 1;
    s.pitch = 1;
    if (Key === " ") {
      s.text = data;
      speak({ text: val });
      setData("");
      val = "";
    } else {
      val.concat(e.Key);
      setData(val);
    }
  }
  return (
    <div className="speech">
      <div className="group">
        <textarea
          rows="10"
          value={value}
          onChange={(e) => {
            e.keyCode === " "
              ? speak({ text: value })
              : setValue(e.target.value);
          }}
        ></textarea>
      </div>
      <div className="group">
        <button onClick={() => speak({ text: value })}>Speech</button>
      </div>
    </div>
  );
};
