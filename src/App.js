import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import UseStateHook from './UseStateHook';
import "./App.css";
import AgeCalculator from './AgeCalculator';
import Timer from './Timer';
import Clock from './Clock';

class App extends Component {
    render() { 
        return (
            <div className='App'>
                {/* <UseStateHook />
                <br />
                <AgeCalculator />
                <Timer />
                <Clock /> */}
                <Router>
                <NavBar />
                    <Routes>
                    {/* <Route path="/" element={<Home />} />  */}
                    <Route path="/clickers" element={<UseStateHook />}/>
                    <Route path="/age-calculator" element={<AgeCalculator />}/>
                    <Route path="/timer" element={<Timer />}/>
                    <Route path="/clock" element={<Clock />}/>
                    </Routes>
                </Router>
            </div>
        )
    }
};

export default App;
