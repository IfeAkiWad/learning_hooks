import React from 'react';
import { useState } from 'react'

const TimerButton = (props) => {
    const [setState] = useState(100)
 
    const ticker = () => {
        setTimeout(() => {
          setState(() => props.count - 5);
        }, 1000);
    };

    

  return (
      <div>
          <button onClick={ticker}>Restart Timer</button>
      </div>
  )
};

export default TimerButton
