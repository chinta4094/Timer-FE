import { useReducer, useEffect, useState } from "react";
import "./styles.css";

export default Clock = () => {
  const fetchHourFormate = () => {
    const hour = new Date().getHours() % 12;
    if (!hour) {
      return 12;
    } else {
      return hour;
    }
  };
  const initialClockState = {
    hour: fetchHourFormate(),
    minute: new Date().getMinutes(),
    second: new Date().getSeconds(),
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "UpdateTime":
        return {
          hour: fetchHourFormate(),
          minute: new Date().getMinutes(),
          second: new Date().getSeconds(),
        };
    }
  };

  const [clock, dispatch] = useReducer(reducer, initialClockState);

  const [startTime, setStartTime] = useState(null);
  const [stopTime, setStopTime] = useState(null);

  const takeSnapshot = () => {
    setStopTime(null);
    setStartTime(`${clock.hour} : ${clock.minute} : ${clock.second}`);
  };

  const stopSnapshot = () => {
    if (startTime) {
      setStopTime(`${clock.hour} : ${clock.minute} : ${clock.second}`);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "UpdateTime" });
    }, 1 * 1000);
    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  return (
    <div>
      <div>
        {clock.hour} : {clock.minute} : {clock.second}
      </div>
      <div>
        <button onClick={() => takeSnapshot()}>CLICK</button>
        {/* {state.count} */}
        <button onClick={() => stopSnapshot()}>STOP</button>
      </div>
      {startTime && <label>{startTime}</label>}
      <br></br>
      {stopTime && <label>{stopTime}</label>}
    </div>
  );
};
