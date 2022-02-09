import React, { useState } from "react"

function Vacation () {
    const [jamesFlight, setJamesFlight] = useState('Flight 262')

    return (
        <div>
            <h1> This is an example of "prop drilling"</h1>
            <p>James' flight making all of these connection flights represents what passing state from the highest parent component to the bottom component through nested components would look like. James' "flight" is passed down as a prop through all of those cities until he reaches Lagos, Nigeria.</p>
            <h2>James is on {`${jamesFlight}`} in Monrovia, Liberia. He's headed to Lagos, Nigeria.</h2>
            <h1>🛩</h1>
            <Abidjan jamesFlight={jamesFlight} />
            
        </div>
    )
}

function Abidjan({ jamesFlight }) {
    return (
        <div>
            <p>Abidjan, Ivory Coast</p>
            <h1>🛩</h1>
            <Accra jamesFlight={jamesFlight} />
            
        </div>
    )
}

function Accra({ jamesFlight }) {
    return (
        <div>
            <p>Accra, Ghana</p>
            <h1>🛩</h1>
            <Lome jamesFlight={jamesFlight} />
            
        </div>
    )
}

function Lome({ jamesFlight }) {
    return (
        <div>
            <p>
                Lome, Togo
            </p>
            <h1>🛩</h1>
            <PortoNovo jamesFlight={jamesFlight} />
            
        </div>
    )
}

function PortoNovo({ jamesFlight }) {
    return(
        <div>
            <p>
                Porto Novo, Benin
            </p>
            <h1>🛩</h1>
            <Lagos jamesFlight={jamesFlight} />
            
        </div>
    )
}

function Lagos({ jamesFlight }) {
    return (
        <div>
            <h2> James' flight, {`${jamesFlight}`}, has arrived in Lagos, Nigeria</h2>
        </div>
    )
}
export default Vacation