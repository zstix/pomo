import React, { useState } from 'react';
import Controls from './Controls';
import Timer from './Timer';

const durations = {
  POMO: 1500,
  SHORT: 300,
  LONG: 900
};

const App = () => {
  const [running] = useState(false);
  const [time] = useState(durations.POMO);
  
  const tomato = String.fromCodePoint(0x1F345);

  return (
    <div>
      <div className="wrapper">
        <h2>{tomato} Pomodoro Timer</h2>
        <Timer time={time} />
        <Controls running={running} />
      </div>
    </div>
  );
};

export default App;
