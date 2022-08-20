import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import { Footer } from "./Footer/Footer";
import { LearningMode } from "./Modes/LearningMode/LearningMode";
import { BrowsingMode } from "./Modes/BrowsingMode/BrowsingMode";
import { KeyBoardMode } from "./Modes/KeyBoardMode/KeyBoardMode";
import { LearnTypingMode } from "./Modes/KeyBoardMode/LearnTypingMode/LearnTypingMode";
import { TestTypingMode } from "./Modes/KeyBoardMode/TestTypingMode/TestTypingMode";
import { HelpMode } from "./Modes/HelpMode/HelpMode";
import { NavBar } from "./NavBar/NavBar";
import { TestMode } from "./Modes/LearningMode/TestMode/TestMode";
import { LearnMode } from "./Modes/LearningMode/LearnMode/LearnMode";
import { ComputerQuiz } from "./Modes/LearningMode/TestMode/ComputerQuiz/ComputerQuiz";
import { EnglishQuiz } from "./Modes/LearningMode/TestMode/EnglishQuiz/EnglishQuiz";

function App() {
  return (
    <div className="App">
      <div className="side1">
        <Footer />
      </div>
      <div className="side2">
        <NavBar />
        <div className="line"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BrowsingMode" element={<BrowsingMode />} />
          <Route path="/LearningMode" element={<LearningMode />} />
          <Route path="/KeyBoardMode" element={<KeyBoardMode />} />
          <Route path="/TestTypingMode" element={<TestTypingMode />} />
          <Route path="/LearnTypingMode" element={<LearnTypingMode />} />
          <Route path="/TestMode" element={<TestMode />} />
          <Route path="/LearnMode" element={<LearnMode />} />
          <Route path="/HelpMode" element={<HelpMode />} />
          <Route path="/ComputerQuiz" element={<ComputerQuiz />} />
          <Route path="/EnglishQuiz" element={<EnglishQuiz />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
