import React, { useState, useEffect } from 'react';

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
        <h2>{count}</h2>
    </div>
  )
};
export default Timer
