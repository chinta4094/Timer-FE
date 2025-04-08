import { useReducer, useEffect, useState } from "react";
import Clock from "./Clock";
import Timer from "./Timer";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Clock />
      <Timer />
    </div>
  );
}
