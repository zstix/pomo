import React from 'react';

const Controls = ({ running }) => (
  <section className="controls">
    {!running && (
      <button className="green start">start</button>
    )}

    {running && (
      <button className="gray clear">clear</button>
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