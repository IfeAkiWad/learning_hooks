import React, { useState } from "react"
import VacationUseContext from "./VacationUseContext"
import Footer from '../Footer'

function Vacation () {
    const [james, setJames] = useState('James')

    return (
        <div className="vacation">
            <h1> This is an example of "prop drilling"</h1>
            <p>James making all of these connection flights represents what passing state from the highest parent component to the bottom component through nested components would look like. James is passed down as a prop through all of those cities until he reaches Lagos, Nigeria.</p>
            <h2>{`${james}`} is in Monrovia, Liberia. He's headed to Lagos, Nigeria.</h2>
            <h1>🛩</h1>
            <Abidjan james={james} />
            
        </div>
    )
}

function Abidjan({ james }) {
    return (
        <div>
            <p>Abidjan, Ivory Coast</p>
            <h1>🛩</h1>
            <Accra james={james} />
            
        </div>
    )
}

function Accra({ james }) {
    return (
        <div>
            <p>Accra, Ghana</p>
            <h1>🛩</h1>
            <Lome james={james} />
            
        </div>
    )
}

function Lome({ james }) {
    return (
        <div>
            <p>
                Lome, Togo
            </p>
            <h1>🛩</h1>
            <PortoNovo james={james} />
            
        </div>
    )
}

function PortoNovo({ james }) {
    return(
        <div>
            <p>
                Porto Novo, Benin
            </p>
            <h1>🛩</h1>
            <Lagos james={james} />
            
        </div>
    )
}

function Lagos({ james }) {
    return (
        <div>
            <h2> {`${james}`} has arrived in Lagos, Nigeria</h2>
            <a id="github" href="https://github.com/IfeAkiWad/learning_hooks/blob/master/src/useContext/Vacation.js" rel="noreferrer" target="_blank">Code</a>
            <hr className="dashed"></hr>
            <VacationUseContext />
            <div><Footer /></div>
        </div>
    )
}

export default Vacation