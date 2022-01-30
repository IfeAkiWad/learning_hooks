import React from 'react';
import { useState, useEffect } from 'react';

const Clock = () => {
    const [clock, setClock] = useState(new Date())

    useEffect (() => {
        let timer = setInterval(() => setClock(new Date()),1000);

        return () => clearInterval(timer)
    })

  return (
      <div>
          <h2>The time is {clock.toLocaleTimeString()}.</h2>
      </div>
  );
};

export default Clock
