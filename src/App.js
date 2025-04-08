import { useReducer, useEffect, useState } from "react";
import Clock from "./Clock.js";
import Timer from "./Timer.js";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Clock />
      <Timer />
    </div>
  );
}
