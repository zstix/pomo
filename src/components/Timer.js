import React from 'react';

// ensure numbers are always two digits
const pad = num => {
  const str = num + "";
  return str.length === 2 ? str : "0" + str;
};

const Timer = ({ time }) => {
  const minutes = pad(Math.floor(time / 60));
  const seconds = pad(time % 60);

  return (
    <section className="timer">
      <h1>{minutes}:{seconds}</h1>
    </section>
  );
};

export default Timer;