import React, { useState, useEffect } from 'react';
import { timeToString, playDoneSound } from '../utils';
import Controls from './Controls';
import Timer from './Timer';
import Log from './Log';

const tomato = String.fromCodePoint(0x1F345);

const durations = {
  POMO: { length: 1500, type: 'pomo' },
  SHORT: { length: 300, type: 'break' },
  LONG: { length: 900, type: 'break' },
  TEST: { length: 5, type: 'test' }
};

const App = () => {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(durations.POMO.length);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (time === 0) {
        stopTimer();
        playDoneSound();
        return false;
      }
      if (running) {
        document.title = `${timeToString(time - 1)} - Pomo`;
        setTime(time => time - 1);
      }
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

  const stopTimer = () => {
    setRunning(false);
    setTime(durations.POMO.length);
    document.title = 'zstix - Pomo';
  }

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
          onTest={() => startTimer(durations.TEST)}
          onClear={() => stopTimer()}
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
