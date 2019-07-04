import React, { useState, useEffect } from 'react';
import Controls from './Controls';
import Timer from './Timer';

const tomato = String.fromCodePoint(0x1F345);

const durations = {
  POMO: 1500,
  SHORT: 300,
  LONG: 900
};

const App = () => {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(durations.POMO);

  useEffect(() => {
    const interval = setInterval(() => {
      if (time === 0) {
        setRunning(false);
        setTime(durations.POMO);
        return false;
      }
      if (running) setTime(time => time - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [running, setRunning, time]);
  
  return (
    <div>
      <div className="wrapper">
        <h2>{tomato} Pomodoro Timer</h2>

        <Timer time={time} />

        <Controls
          running={running}
          onStart={() => setRunning(true)}
          onClear={() => {
            setRunning(false);
            setTime(durations.POMO);
          }}
         />
      </div>
    </div>
  );
};

export default App;
