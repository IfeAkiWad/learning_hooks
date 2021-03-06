import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import UseStateHook from './useStateHooks/UseStateHook';
import "./App.css";
import AgeCalculator from './useStateHooks/AgeCalculator';
import Timer from './useEffectHook/Timer';
import Clock from './useEffectHook/Clock';
import Vacation from './useContext/Vacation';
import Home from './Home';
import Mood from './useReducer/Mood';

class App extends Component {
    render() { 
        return (
            <div className='App'>
                <Router>
                <NavBar />
                    <Routes>
                    <Route path="/learning_hooks/" element={<Home />} /> 
                    <Route path="/mood" element={<Mood />}/>
                    <Route path="/clickers" element={<UseStateHook />}/>
                    <Route path="/age-calculator" element={<AgeCalculator />}/>
                    <Route path="/timer" element={<Timer />}/>
                    <Route path="/clock" element={<Clock />}/>
                    <Route path="/vacation" element={<Vacation />}/>
                    </Routes>
                </Router>
            </div>
        )
    }
};

export default App;
