import React from 'react';
import { useState, useEffect } from 'react';
import ClockWithCustomHook from '../custom hooks/ClockWithCustomHook';

const Clock = () => {
    const [clock, setClock] = useState(new Date())

    useEffect (() => {
        let timer = setInterval(() => setClock(new Date()),1000);

        return () => clearInterval(timer)
    })

  return (
      <div>
          <h1>What Time Is It?</h1>
          <h2>The time is {clock.toLocaleTimeString()}.</h2>
          <ClockWithCustomHook />
      </div>
  );
};

export default Clock
