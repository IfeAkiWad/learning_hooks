import React, { useState } from "react"
import Footer from "../Footer";
import ClassComponentCounter from "./ClassComponentCounter";


function UseStateHook() {
  const [count, setCount] = useState(0)

  const resetCount = () => {
    if (count > 0) {
       setCount(0)
    }
  }

  return (
    <div>
      <h1>Clicker</h1>
        This is a counter built using useState hook.<br /><br />
        <h1>{count}</h1>
        <button onClick={resetCount}>RESET</button>&nbsp;&nbsp;
        <button onClick={() => setCount(count + 5)}>CLICK!</button><br /><br />
        <a id="github" href="https://github.com/IfeAkiWad/learning_hooks/blob/master/src/useStateHooks/UseStateHook.js" rel="noreferrer" target="_blank">Code</a>
      <br /><br />
        This is a counter built using a class Component
        <ClassComponentCounter /><br />
        <a id="github" href="https://github.com/IfeAkiWad/learning_hooks/blob/master/src/useStateHooks/ClassComponentCounter.js" rel="noreferrer" target="_blank">Code</a>
        <Footer />
    </div>
  );
}

export default UseStateHook;
