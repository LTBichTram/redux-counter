import React from 'react'
import { counterActions } from '../store/index'
import { useDispatch, useSelector } from 'react-redux'
import classes from './Counter.module.css'

const Counter = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const { counter, showCounter } = state

    const incrementHandler = () => {
        dispatch(counterActions.increment())
    }
    const increaseHandler = () => {
        dispatch(counterActions.increase(10))
    }
    const decrementHandler = () => {
        dispatch(counterActions.decrement())
    }
    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter())
    }

  return (
    <div className={classes.counter}>
        <h1>Redux Counter</h1>
        {showCounter && <div className={classes.value}>{counter}</div>}
        <div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={increaseHandler}>Increase by 10</button>
            <button onClick={decrementHandler}>Decrement</button>
        </div>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </div>
  )
}

export default Counter