import React from 'react';

const watch = String.fromCodePoint(0x231A);

const Log = ({ history, onRemoveHistory }) => (
  <>
    {history.length !== 0 &&
      <section className="log">
        <h3>{watch} History</h3>
        <ul>
          {history.map((item, index) => (
            <li key={index}>
              {item.time}
              {' - '}
              {item.type}
              {' ('}
              {Math.floor(item.length / 60)}
              {' minutes) '}

              <span
                className="remove"
                onClick={() => onRemoveHistory(index)}
              >
                delete
              </span>
            </li>
          ))}
        </ul>
      </section>
    }
  </>
);

export default Log;