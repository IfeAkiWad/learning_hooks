import React, { useState, useEffect } from "react"

 const AgeCalculator = () => {
    const [age, setAge] = useState("")
    const [calculator, setCalculator] = useState(0)
    
    const handleOnChange = (event) => {
        setAge(event.target.value)
    }

    useEffect(() => {
      setCalculator(()=> age * 2)
    }, [age])

  return (
    <div>
      <h1>Age Calculator</h1>
      type age: <input type="text" value={age} onChange={handleOnChange} /><br /><br />
        <h3>Click button to multiply by two</h3>
        <button onClick={AgeCalculator}>Age Calculator</button><br /><br />
        result: <b>{calculator}</b>
        {/* <button onClick={setAge(age / 4)}></button> */}
    </div>
  )
};
 export default AgeCalculator
