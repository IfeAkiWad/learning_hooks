import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav id="nav">
        <div>    
                <Link id="link" to="/vacation"> VACATION</Link> 
                <Link id="link" to="/clickers"> CLICKERS</Link> 
                <Link id="link" to="/age-calculator"> AGE CALCULATOR</Link> 
                <Link id="link" to='/timer'> TIMER</Link> 
                <Link id="link" to='/'> CLOCK</Link> 
        </div>
    </nav>
    )
}

export default NavBar