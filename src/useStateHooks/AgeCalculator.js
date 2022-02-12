import React, { useState, useEffect } from "react"
import Footer from "../Footer";
import TimesThree from "./TimesThree";

 const AgeCalculator = () => {
    const [age, setAge] = useState("")
    const [calculator, setCalculator] = useState(0)
    
    const handleOnChange = (event) => {
        setAge(event.target.value)
        if (isNaN(event.target.value)) {
          alert(`"${event.target.value}" is not a number`)
          setAge("")
        }
    }

    useEffect(() => {
      setCalculator(()=> age * 2)
    }, [age])

    const resetAge = () => {
      setAge("")
    }

  return (
    <div>
      <h1>Age Calculator</h1>
      I'm learning how to use the useEffect hook<br /><br />
      Enter age: <input type="text" value={age} onChange={handleOnChange} />&nbsp;<button onClick={resetAge}>Reset</button><br /><br />
      <h3>multiplied by two</h3>
      result: <b>{calculator}</b><br /><br />
      <a id="github" href="https://github.com/IfeAkiWad/learning_hooks/blob/master/src/useStateHooks/AgeCalculator.js" rel="noreferrer" target="_blank">Code</a>
      <TimesThree age={age}/>
      <a id="github" href="https://github.com/IfeAkiWad/learning_hooks/blob/master/src/useStateHooks/TimesThree.js" rel="noreferrer" target="_blank">Code</a>
    <Footer />
    </div>
  )
};
 export default AgeCalculator
