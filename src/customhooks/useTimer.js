import { useState, useEffect } from "react"

const useTimer = (initialValue) => {
    const [state, setState] = useState(initialValue)

    useEffect (() => {
        let timer = setInterval(() => setState(initialValue),1000);

        return () => clearInterval(timer)
    })
       
    return [state]
}
export default useTimer