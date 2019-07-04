import React from 'react';
import { timeToString } from '../utils';

const Timer = ({ time }) => (
  <section className="timer">
    <h1>{timeToString(time)}</h1>
  </section>
);

export default Timer;