import React, { useState, useEffect } from 'react';

const TimesThree = (props) => {
    const [calculator, setCalculator] = useState(0)

    useEffect(() => {
        setCalculator(() => props.age * 3)
    }, [props.age])
  
    return (
    <div>
        <h3>multiplied by three</h3>
        result: <b>{calculator}</b><br /><br />
    </div>
  )
};
export default TimesThree
