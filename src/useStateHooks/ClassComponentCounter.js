import React, { Component } from 'react';

export default class ClassComponentCounter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    incrementer = () => {
        this.setState({count: this.state.count + 5})
    }

    resetCount = () => {
        if (this.state.count > 0) {
            this.setState({count: 0})
        }
    }

  render() {
    return (
        <div>
            <br />
            <h1>{this.state.count}</h1>
            <button onClick={this.resetCount}>RESET</button>&nbsp;&nbsp;
            <button onClick = {this.incrementer}>CLICK!</button>
        </div>
    )
  }
}
 
