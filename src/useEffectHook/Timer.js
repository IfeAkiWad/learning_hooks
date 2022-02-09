import React, { useState, useEffect } from 'react';
import Footer from '../Footer';

const Timer = () => {
    const [count, setCount] = useState(100)

    useEffect(() => {
        setTimeout(() => {
          setCount((count) => count - 5);
        }, 1000);

        if(count <= 0){
            setCount(0)
        }
    }, [count]);

  return (
    <div>
        <h1>Countdown Timer</h1>
        LET'S COUNTDOWN FROM 100 BY 5!
        <h2>{count}</h2>
        <a id="github" href="https://github.com/IfeAkiWad/learning_hooks/blob/master/src/useEffectHook/Timer.js" rel="noreferrer" target="_blank">Code</a>
        <Footer />
    </div>
  )
};
export default Timer
