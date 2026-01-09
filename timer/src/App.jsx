import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((PrevTime) => PrevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Stopwatch</h2>
      <h1>{time} sec</h1>

      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>
      <button onClick={() => setTime(0)}>Reset</button>
    </div>
  );
}

export default App;
