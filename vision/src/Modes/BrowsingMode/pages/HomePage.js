import React, { useState } from "react";
import { Search } from "./Search";
import "./HomePage.css";
import { Link } from "react-router-dom";
export const HomePage = () => {
  const [day, setDay] = useState("");
  const [t, setT] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  let user = "SB";
  setInterval(() => {
    let currentDate = new Date();
    let cDay = currentDate.getDate();
    let cMonth = currentDate.getMonth() + 1;
    let cYear = currentDate.getFullYear();
    let d = cDay + "/" + cMonth + "/" + cYear;
    setDate(d);
    let ti =
      currentDate.getHours() +
      ":" +
      currentDate.getMinutes() +
      ":" +
      currentDate.getSeconds();
    setTime(ti);
    if (currentDate.getHours() >= 0 && currentDate.getHours() < 12) {
      setDay("Good Morning!");
      setT("AM");
    } else if (currentDate.getHours() >= 12 && currentDate.getHours() < 17) {
      setDay("Good Afternoon!");
      setT("PM");
    } else {
      setDay("Good Evening!");
      setT("PM");
    }
  }, 1000);
  return (
    <div className="homepage">
      <div className="home__header">
        <div className="home__headerLeft">
          <h1>
            {date}, {time} {t}
          </h1>
        </div>
        <div className="home__headerRight">
          <h1>{day}</h1>
          <br />
          <h1>{user}</h1>
        </div>
      </div>

      <div className="home__body">
        <h1>Vision</h1>
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
      <div className="back">
        <Link to="/" className="b">
          <button className="sp">Back</button>
        </Link>
      </div>
    </div>
  );
};
