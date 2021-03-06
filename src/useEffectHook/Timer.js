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

        // if (count)(
        //   restartTimer()
        // )
    }, [count]);

    // let restartTimer = () => {
    //   if (count === 0) {
    //       setCount(100)
    //       setTimeout(() => {
    //         setCount(( ) => count - 5);
    //       }, 1000);
    //   }
    // }

  return (
    <div>
        <h1>Countdown Timer</h1>
        LET'S COUNTDOWN FROM 100 BY 5!
        <h2>{count}</h2>
        {/* <button onClick={restartTimer}>RESTART TIMER</button><br /><br /> */}
        <a id="github" href="https://github.com/IfeAkiWad/learning_hooks/blob/master/src/useEffectHook/Timer.js" rel="noreferrer" target="_blank">Code</a>
        <Footer />
    </div>
  )
};
export default Timer
