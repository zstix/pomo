import React, { useState, useEffect } from 'react';
import Controls from './Controls';
import Timer from './Timer';
import Log from './Log';

const tomato = String.fromCodePoint(0x1F345);

const durations = {
  POMO: { length: 1500, type: 'pomo' },
  SHORT: { length: 300, type: 'break' },
  LONG: { length: 900, type: 'break' },
};

const App = () => {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(durations.POMO.length);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (time === 0) {
        setRunning(false);
        setTime(durations.POMO.length);
        return false;
      }
      if (running) setTime(time => time - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [running, setRunning, time]);

  const startTimer = duration => {
    const time  =new Date().toLocaleTimeString('en-US', {
      hour12: true,
      hour: 'numeric',
      minute: 'numeric'
    });
    setTime(duration.length);
    setRunning(true);
    setHistory([
      ...history,
      { ...duration, time }
    ]);
  };

  const removeHistory = index => {
    setHistory(history.filter((_, i) => i !== index));
  };
  
  return (
    <div>
      <div className="wrapper">
        <h2>{tomato} Pomodoro Timer</h2>

        <Timer time={time} />

        <Controls
          running={running}
          onStart={() => startTimer(durations.POMO)}
          onShortBreak={() => startTimer(durations.SHORT)}
          onLongBreak={() => startTimer(durations.LONG)}
          onClear={() => {
            setRunning(false);
            setTime(durations.POMO.length);
          }}
         />

         <Log
          history={history}
          onRemoveHistory={removeHistory}
        />
      </div>
    </div>
  );
};

export default App;
