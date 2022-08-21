import React, { useEffect, useState } from "react";
import "./EnglishQuiz.css";
import data from "./Questions.json";
import { Question } from "../Questions/Question";
import { Link } from "react-router-dom";
export const EnglishQuiz = () => {
  const [start, setStart] = useState(1);
  const [points, setPoint] = useState(0);
  const [i, setQuestion] = useState(0);
  const name = "SB";
  const [minutes, setMin] = useState(0);
  const [seconds, setSec] = useState(0);
  const getData = (val) => {
    setPoint(val[0]);
    setTimeout(() => {
      setQuestion(val[1]);
      setStart(val[2]);
    }, 2000);
  };
  useEffect(() => {
    if (start === 2) {
      var timer = setInterval(() => {
        setSec(seconds + 1);
        if (seconds === 59) {
          setMin(minutes + 1);
          setSec(0);
        }
        if (minutes === 20) {
          setStart(3);
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  });
  if (start === 1) {
    return (
      <div className="LMode">
        <div className="dash">
          <h1>Hello {name}!</h1>
          <h2>
            This is a English Quiz,
            <br /> You will be given 15 questions and some options you have to
            select the correct option.
          </h2>
          <h1>
            For Every correct Answer, You will be awarded with{" "}
            <span className="o">1</span> point and on wrong answer{" "}
            <span className="z">0</span> points.
          </h1>
          <h2>Do you want to start, Then click the Start Button!</h2>
          <button
            className="s"
            onClick={() => {
              setStart(2);
            }}
          >
            Start Test
          </button>
        </div>
      </div>
    );
  } else if (start === 2) {
    return (
      <div className="QMode">
        <div className="quiz">
          <h1 className="qno">Question {i + 1}</h1>
          <Question
            q={data[i].Quest}
            p1={data[i].option1}
            p2={data[i].option2}
            p3={data[i].option3}
            p4={data[i].option4}
            a={data[i].answer}
            onChange={getData}
          />
        </div>
        <div className="score">
          <div className="board">
            <div className="timer">
              <h1>Time</h1>
              <h2>
                {minutes}:{seconds}
              </h2>
            </div>
            <div className="points">
              <h1>Points</h1>
              <h1>{points}</h1>
            </div>
            <button className="submit" onClick={() => setStart(3)}>
              Submit Test
            </button>
          </div>
        </div>
      </div>
    );
  } else if (start === 3) {
    return (
      <div className="EMode">
        <div className="exit">
          <h1>Thanks for Taking the quiz {name}!</h1>
          <h2>
            You got <span className="sco"> {points} </span> points.
          </h2>
          <Link className="l" to="/LearningMode">
            <button className="s">Back</button>
          </Link>
        </div>
      </div>
    );
  }
};
