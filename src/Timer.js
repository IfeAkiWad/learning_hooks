import React, { useState, useEffect } from 'react';
import TimerButton from './TimerButton';

export const Timer = () => {
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
        <TimerButton count={count}/>
        {/* <button onClick={() => setCount(count)}>Start Timer</button> */}
    </div>
  )
};
export default Timer
