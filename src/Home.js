import React from 'react';
import Footer from './Footer';
import ReactIcon from './assets/ReactIcon.png'

export default function Home() {
  return (
    <div>
        <h1>Welcome To Learning Hooks!</h1>
        <h2>Decided to build as I learned React hooks.</h2><br />
        <img className="home-react-icon" src={ReactIcon} alt="React Icon" />
        React Hooks Snippets by Al Duncanson
        <Footer />
    </div>
  )
}
