import React from 'react';
import useTimer from './useTimer';

const ClockWithCustomHook = () => {
    const [clock] = useTimer(new Date())

    return (
      <div>
          <h3>This clock was built using a custom hook</h3>
          <h1>What Time Is It?</h1>
          <h2>The time is {clock.toLocaleTimeString()}.</h2>
      </div>
  );
};

export default ClockWithCustomHook