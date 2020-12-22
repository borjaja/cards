import React, { useReducer } from 'react'
import { Button, ButtonGroup } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment': return state + 1
        case 'decrement': return state - 1
        case 'reset': return initialState
        default: break;
    }
}

const Counter = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <ButtonGroup>
                <Button onClick={() => { dispatch('increment') }} color="dark">increment</Button>
                <Button onClick={() => { dispatch('decrement') }} color="dark">decrement</Button>
                <Button onClick={() => { dispatch('reset') }} color="danger">reset</Button>
            </ButtonGroup>
            <div>Counter: {count}</div>
        </div>
    )
}

export default Counter
