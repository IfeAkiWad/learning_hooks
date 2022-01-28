import React, { Component } from 'react';
import UseStateHook from './UseStateHook';
// import UseEffectHook from './UseEffectHook';
import "./App.css";
import AgeCalculator from './AgeCalculator';

class App extends Component {
    render() { 
        return (
            <div className='App'>
                <UseStateHook />
                <br />
                <AgeCalculator />
                {/* <UseEffectHook /> */}
            </div>
        )
    }
};

export default App;
