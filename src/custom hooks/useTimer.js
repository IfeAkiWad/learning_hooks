import { useState, useEffect } from "react"

const Timer = () => {
    const [state, setState] = useState(new Date())

    useEffect (() => {
        let timer = setInterval(() => setState(new Date()),1000);

        return () => clearInterval(timer)
    })

    return state
}
export default Timer