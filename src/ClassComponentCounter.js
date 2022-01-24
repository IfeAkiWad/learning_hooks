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

  render() {
    return (
        <div>
            <h1>{this.state.count}</h1>
            <button onClick = {this.incrementer}>CLICK!</button>
        </div>
    )
  }
}
 
