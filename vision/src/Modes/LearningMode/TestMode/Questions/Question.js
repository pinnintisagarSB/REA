import React, { useState } from "react";
import "./Questions.css";
export const Question = (d) => {
  let [po, setPo] = useState(0);
  let [nxt, setnxt] = useState(0);
  let [ch, setCh] = useState(5);
  const check = (val) => {
    if (nxt < 14 && d.a === val) {
      setCh(val);
      setPo(++po);
      setnxt(++nxt);
      d.onChange([po, nxt, 2]);
    } else if (nxt < 14) {
      setnxt(++nxt);
      d.onChange([po, nxt, 2]);
    } else {
      d.onChange([po, nxt, 3]);
    }
    setTimeout(() => {
      setCh(5);
    }, 2000);
  };
  return (
    <div className="que">
      <h1>{d.q}</h1>
      <div className="options">
        <button
          className={ch === 1 ? "correct" : "option"}
          onClick={() => {
            check(1);
          }}
        >
          {d.p1}
        </button>
        <button
          className={ch === 2 ? "correct" : "option"}
          onClick={() => {
            check(2);
          }}
        >
          {d.p2}
        </button>
        <button
          className={ch === 3 ? "correct" : "option"}
          onClick={() => {
            check(3);
          }}
        >
          {d.p3}
        </button>
        <button
          className={ch === 4 ? "correct" : "option"}
          onClick={() => {
            check(4);
          }}
        >
          {d.p4}
        </button>
      </div>
    </div>
  );
};
