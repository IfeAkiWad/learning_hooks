import React from 'react';
import useTimer from '../custom hooks/useTimer';

const ClockWithCustomHook = () => {
    const [clock] = useTimer(new Date())

  return (
      <div>
          <h1>This clock was built using a custom hook</h1>
          <h1>What Time Is It?</h1>
          <h2>The time is {clock.toLocaleTimeString()}.</h2>
      </div>
  );
};

export default ClockWithCustomHook