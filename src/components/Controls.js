import React from 'react';

const Controls = ({
  running,
  onStart,
  onShortBreak,
  onLongBreak,
  onClear,
  onTest
 }) => (
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
        <button
          className="red break"
          onClick={onShortBreak}
        >
          break
        </button>
        <button
          className="red break-long"
          onClick={onLongBreak}
        >
          long break
        </button>
      </>
    )}

    {!running && (
      <button
        className="yellow test"
        onClick={onTest}
      >
        test
      </button>
    )}
  </section>
);

export default Controls;