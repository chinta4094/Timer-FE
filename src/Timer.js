import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(null);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  function handleStart() {
    setIsRunning(true);
  }

  function handleStop() {
    setIsRunning(false);
  }

  function handleRestart() {
    if (!isRunning) {
      setTime(0);
    }
  }

  return (
    <div>
      <button onClick={handleStart}>START</button>
      <label>{time} seconds</label>
      <button onClick={handleStop}>STOP</button>
      <button onClick={handleRestart}>RESTART</button>
    </div>
  );
};

export default Timer;
