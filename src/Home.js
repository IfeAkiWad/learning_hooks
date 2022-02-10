import React from 'react';
import Footer from './Footer';
import ReactIcon from './assets/ReactIcon.png'

export default function Home() {
  return (
    <div>
        <h1>Welcome To Learning Hooks!</h1>
        <h2>Decided to build as I learned React hooks.</h2><br />
        <img className="home-react-icon" src={ReactIcon} alt="React Icon" />
        React Hooks Snippets by Al Duncanson<br /><br />
        <a id="github-link" href="https://github.com/IfeAkiWad" rel="noreferrer" target="_blank">GITHUB</a>&nbsp;&nbsp;
        <a id="linkedin" href="https://www.linkedin.com/in/ifeoluwa-akinremi-wade/" rel="noreferrer" target="_blank">LINKEDIN</a>&nbsp;&nbsp;
        <a id="email" href= "mailto:ifeoluwa.akinremi.wade@gmail.com" rel="noopener noreferrer" target="_blank">
            EMAIL
        </a>

        <Footer />
    </div>
  )
}
