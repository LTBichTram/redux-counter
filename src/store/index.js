import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialStore = {counter: 0, showCounter: true}

const counterSlice = createSlice({
    name: 'counter',
    initialStore,
    reducers: {
        increment(store, action) {
            store.counter = store.counter + 1
        },
        increase(store, action) {
            store.counter = store.counter + action.payload
        },
        decrement(store, action) {
            store.counter = store.counter - 1
        },
        toggle(store, action) {
            store.showCounter = !store.showCounter
        }
    }
})

const store = configureStore({
    reducer: counterSlice.reducer
})

export const counterActions = counterSlice.actions

export default store