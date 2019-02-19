import React, { Component } from 'react';
import './Counter.css';


export default class Counter extends Component {

    state = {
        count: 0
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return(
            <div className='counter'>
                <h4>Counter</h4>
                <button className='increment' onClick = {this.increment}>+</button>
                <span className='count'>{this.state.count}</span>
                <button className='decrement' onClick = {this.decrement} >-</button>
            </div>
        );
    }
}

