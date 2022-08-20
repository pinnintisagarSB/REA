import React, { useState } from "react";
import "./Questions.css";
export const Question = (d) => {
  const [po, setPo] = useState(1);
  const [nxt, setnxt] = useState(1);
  const check = (val) => {
    if (val === d.a && nxt < 15) {
      setPo(po + 1);
      d.onChange([po, nxt, 2]);
      setnxt(nxt + 1);
    } else if (nxt < 15) {
      d.onChange([po, nxt, 2]);
      setnxt(nxt + 1);
    } else {
      setnxt(nxt - 1);
      d.onChange([po, nxt, 3]);
    }
  };
  return (
    <div className="que">
      <h1>{d.q}</h1>
      <div className="options">
        <button className="option" onClick={() => check(1)}>
          {d.p1}
        </button>
        <button className="option" onClick={() => check(2)}>
          {d.p2}
        </button>
        <button className="option" onClick={() => check(3)}>
          {d.p3}
        </button>
        <button className="option" onClick={() => check(4)}>
          {d.p4}
        </button>
      </div>
    </div>
  );
};
