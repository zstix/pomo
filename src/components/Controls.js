import React from 'react';

const Controls = ({ running, onStart, onClear }) => (
  <section className="controls">
    {!running && (
      <button
        className="green start"
        onClick={onStart}
       >
        start
      </button>
    )}

    {running && (
      <button
        className="gray clear"
        onClick={onClear}
      >
        clear
      </button>
    )}

    {!running && (
      <>
        <button className="red break">break</button>
        <button className="red break-long">long break</button>
      </>
    )}
  </section>
);

export default Controls;