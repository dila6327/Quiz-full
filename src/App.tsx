import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Quiz from "./components/Quiz";
import Score from "./components/Score";

const App: React.FC = () => {
  const [correct, setCorrect] = useState<number>(JSON.parse(localStorage.getItem('correct') || '0'));

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Quiz correct={correct} setCorrect={setCorrect} />}
        />
        <Route
          path="/score"
          element={<Score correct={correct} setCorrect={setCorrect} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
