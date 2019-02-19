import React, { Component } from 'react';
import './Counter.css';
import { connect } from 'react-redux';


class Counter extends Component {

    state = {
        count: 0
    }

    increment = () => {
       this.props.dispatch({type: 'INCREMENT'})
    }

    decrement = () => {
        this.props.dispatch({type: 'DECREMENT'})
    }

    render() {
        return(
            <div className='counter'>
                <h4>Counter</h4>
                <button className='increment' onClick = {this.increment}>+</button>
                <span className='count'>{this.props.count}</span>
                <button className='decrement' onClick = {this.decrement} >-</button>
            </div>
        );
    }
}


 function mapStateToProps(state) {
     return {
         count: state.count
     }
 } 

export default connect(mapStateToProps)(Counter);

