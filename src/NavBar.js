import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="dropdown-nav">
            <button class="dropbtn">Menu</button>
            <div className="dropdown-content">  
                <Link id="link" to='/learning_hooks/'> HOME</Link> 
                <Link id="link" to="/mood"> MOOD</Link> 
                <Link id="link" to="/vacation"> VACATION</Link> 
                <Link id="link" to="/clickers"> CLICKERS</Link> 
                <Link id="link" to="/age-calculator"> AGE CALCULATOR</Link> 
                <Link id="link" to='/timer'> TIMER</Link> 
                <Link id="link" to='/clock'> CLOCK</Link>
            </div>
    </nav>
    )
}

export default NavBar