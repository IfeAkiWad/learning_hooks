import React, { useState, createContext, useContext } from "react"

const JamesContext = createContext()

function VacationUseContext () {
    const [james, setJames] = useState('James')
    return (
        <JamesContext.Provider value={james}>
            <h1> This trip was made using useContext</h1>
            <p>This hook allows for global state storage and provides state access to any component. Therefore, "prop drilling" would not be utilized. Now James doesn't have to make connection flights to get to his destination.</p>
            <h2>{`${james}`} is in Monrovia, Liberia. He's headed to Lagos, Nigeria.</h2>
            <h1>🛩</h1>
            <Abidjan james={james} />  
        </JamesContext.Provider>
    )
}

function Abidjan() {
    return (
        <div>
            <p>Abidjan, Ivory Coast</p>
            <Accra />
        </div>
    )
}

function Accra() {
    return (
        <div>
            <p>Accra, Ghana</p>
            <Lome />
        </div>
    )
}

function Lome() {
    return (
        <div>
            <p>
                Lome, Togo
            </p>
            <PortoNovo />
        </div>
    )
}

function PortoNovo() {
    return(
        <div>
            <p>
                Porto Novo, Benin
            </p>
            <Lagos />
        </div>
    )
}

function Lagos() {
    const james = useContext(JamesContext);
    return (
        <div>
            <h2> {`${james}`} has arrived in Lagos, Nigeria</h2>
        </div>
    )
}
export default VacationUseContext