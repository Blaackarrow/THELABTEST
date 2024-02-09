import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Note from "../src/components/Note/Note.jsx";
import "./index.css";
import ScoreCard from "./components/ScoreCard/ScoreCard.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Note />
    <ScoreCard />
  </React.StrictMode>
);
