import React, { Component } from 'react';
import UseStateHook from './UseStateHook';
// import UseEffectHook from './UseEffectHook';
import "./App.css";
import AgeCalculator from './AgeCalculator';
import Timer from './Timer';
import Clock from './Clock';

class App extends Component {
    render() { 
        return (
            <div className='App'>
                <UseStateHook />
                <br />
                <AgeCalculator />
                <Timer />
                <Clock />
            </div>
        )
    }
};

export default App;
