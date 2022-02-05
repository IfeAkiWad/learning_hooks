import React from 'react';
import useTimer from '../custom hooks/useTimer';
// import { useState, useEffect } from 'react';

const Clock = () => {
    // const [clock, setClock] = useState(new Date())

    // useEffect (() => {
    //     let timer = setInterval(() => setClock(new Date()),1000);

    //     return () => clearInterval(timer)
    // })
    const [clock] = useTimer(new Date())

  return (
      <div>
          <h1>What Time Is It?</h1>
          <h2>The time is {clock.toLocaleTimeString()}.</h2>
      </div>
  );
};

export default Clock
