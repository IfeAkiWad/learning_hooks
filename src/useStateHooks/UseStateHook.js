import React, { useState } from "react"
import ClassComponentCounter from "./ClassComponentCounter";


function UseStateHook() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Learning Hooks</h1>
      <h2>Clicker</h2>
        this is a counter that was built using useState hook.
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 5)}>CLICK!</button>
      <br /><br />
        this is a counter built using a class Component
        <ClassComponentCounter /><br />
        <a id="github" href="https://github.com/IfeAkiWad/learning_hooks/blob/master/src/useStateHooks/UseStateHook.js" rel="noreferrer" target="_blank">Code</a>

    </div>
  );
}

export default UseStateHook;
