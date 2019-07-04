import React, { useState } from 'react';
import Controls from './Controls';
import Timer from './Timer';

const durations = {
  POMO: 1500,
  SHORT: 300,
  LONG: 900
};

const App = () => {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(durations.POMO);
  
  const tomato = String.fromCodePoint(0x1F345);

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
