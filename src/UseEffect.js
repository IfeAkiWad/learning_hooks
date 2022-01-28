import React, { useState, useEffect } from "react"

export const UseEffect = () => {
    const [age, setAge] = useState('')

  return (
    <div>
        <button onClick={setAge(age * 2)}></button>
    </div>
  )
};
