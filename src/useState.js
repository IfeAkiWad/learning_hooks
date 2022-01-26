import React, { useState } from "react"
import ClassComponentCounter from "./ClassComponentCounter";


function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
        this is a counter that was built using useState hook.
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 5)}>CLICK!</button>
      <br /><br />
        this is a counter built using a class Component
        <ClassComponentCounter />
    </div>
  );
}