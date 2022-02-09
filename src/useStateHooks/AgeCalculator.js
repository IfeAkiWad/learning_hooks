import React, { useState, useEffect } from "react"
import Footer from "../Footer";
import TimesThree from "./TimesThree";

 const AgeCalculator = () => {
    const [age, setAge] = useState("")
    const [calculator, setCalculator] = useState(0)
    
    const handleOnChange = (event) => {
        setAge(event.target.value)
    }

    useEffect(() => {
      setCalculator(()=> age * 2)
    }, [age])

    const resetAge = () => {
      setAge("")
    }

  return (
    <div>
      <h2>Age Calculator</h2>
      I'm learning how to use the useEffect hook<br /><br />
      Enter age: <input type="text" value={age} onChange={handleOnChange} />&nbsp;<button onClick={resetAge}>Reset</button><br /><br />
      <h3>multiplied by two</h3>
      {/* <button onClick={setCalculator}>Age Calculator</button><br /><br /> */}
      result: <b>{calculator}</b><br /><br />
      <TimesThree age={age}/>
      <a id="github" href="https://github.com/IfeAkiWad/learning_hooks/blob/master/src/useStateHooks/AgeCalculator.js" rel="noreferrer" target="_blank">Code</a>
    <Footer />
    </div>
  )
};
 export default AgeCalculator
