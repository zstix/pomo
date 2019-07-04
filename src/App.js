import React from 'react';

const tomato = String.fromCodePoint(0x1F345);

const App = () => (
  <div>
    <div className="wrapper">
      <h2>{tomato} Pomodoro Timer</h2>

      <section className="timer">
        <h1>24:59</h1>
      </section>

      <section className="controls">
        <button className="green start">start</button>
        <button className="gray clear">clear</button>
        <button className="red break">break</button>
        <button className="red break-long">long break</button>
      </section>
    </div>
  </div>
);

export default App;
