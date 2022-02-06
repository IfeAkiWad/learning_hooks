import { useState, useEffect } from "react"

const useTimer = (date = new Date()) => {
    const [state, setState] = useState(date)

    useEffect (() => {
        let timer = setInterval(() => setState(date),1000);

        return () => clearInterval(timer)
    })

    return state
}
export default useTimer