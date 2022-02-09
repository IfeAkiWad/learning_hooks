import React from 'react';
import { useState, useEffect } from 'react';
import ClockWithCustomHook from '../customhooks/ClockWithCustomHook';
import Footer from '../Footer';

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
          <a id="github" href="https://github.com/IfeAkiWad/learning_hooks/blob/master/src/useEffectHook/Clock.js" rel="noreferrer" target="_blank">Code</a>
          <hr className="dashed"></hr>
          <ClockWithCustomHook /><br />
          <a id="github" href="https://github.com/IfeAkiWad/learning_hooks/blob/master/src/customhooks/ClockWithCustomHook.js" rel="noreferrer" target="_blank">Code</a><br />
          <a id="github" href="https://github.com/IfeAkiWad/learning_hooks/blob/master/src/customhooks/useTimer.js" rel="noreferrer" target="_blank">Timer custom hook code</a>

          <Footer />
      </div>
  );
};

export default Clock
