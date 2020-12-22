import React, { useReducer } from 'react'
import { Button, ButtonGroup, Badge } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = { counter1: 0, counter2: 10 }
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment': return { ...state, counter1: state.counter1 + 1 }
        case 'decrement': return { ...state, counter1: state.counter1 - 1 }
        case 'increment2': return { ...state, counter2: state.counter2 + action.payload }
        case 'decrement2': return { ...state, counter2: state.counter2 - action.payload }
        case 'reset': return initialState
        default: break;
    }
}

const Counter = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <ButtonGroup>
                <Button color="primary" outline>
                    Counter1 <Badge color="secondary">{count.counter1}</Badge>
                </Button>
                <Button color="primary" outline>
                    Counter2 <Badge color="secondary">{count.counter2}</Badge>
                </Button>
            </ButtonGroup>
            <br /><br />
            <ButtonGroup>
                <Button onClick={() => { dispatch({ type: 'increment' }) }} color="dark">increment</Button>
                <Button onClick={() => { dispatch({ type: 'decrement' }) }} color="dark">decrement</Button>
            </ButtonGroup>
            <br /><br />
            <ButtonGroup>
                <Button onClick={() => { dispatch({ type: 'increment2', payload: 1 }) }} color="dark">increment2 by 1</Button>
                <Button onClick={() => { dispatch({ type: 'decrement2', payload: 1 }) }} color="dark">decrement2 by 1</Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button onClick={() => { dispatch({ type: 'increment2', payload: 5 }) }} color="dark">increment2 by 5</Button>
                <Button onClick={() => { dispatch({ type: 'decrement2', payload: 5 }) }} color="dark">decrement2 by 5</Button>
            </ButtonGroup>
            <br /><br />
            <Button onClick={() => { dispatch({ type: 'reset' }) }} color="danger">reset</Button>
        </div>
    )
}

export default Counter
