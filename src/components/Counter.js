import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../store/index'
import classes from './Counter.module.css'

const Counter = () => {
    const dispatch = useDispatch()
    const counter = useSelector(store => store.counter)
    const showCounter = useSelector(store => store.showCounter)
    const incrementHandler = () => {
        dispatch(counterActions.increment())
    }
    const increaseHandler = () => {
        dispatch(counterActions.increase(10))
    }
    const decrementHandler = () => {
        dispatch(counterActions.decrement())
    }
    const toggleHandler = () => {
        dispatch(counterActions.toggle())
    }

  return (
    <main className={classes.counter}>
        <h1>Redux Counter</h1>
        {showCounter && <div className={classes.value}>{counter}</div>}
        <div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={increaseHandler}>Increase by 10</button>
            <button onClick={decrementHandler}>Decrement</button>
        </div>
        <button onClick={toggleHandler}>Toggle Counter</button>
    </main>
  )
}

export default Counter