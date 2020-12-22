import React, { useReducer } from 'react'
import { Button, ButtonGroup, Badge } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = { counter: 0 }
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment': return { ...state, counter: state.counter + 1 }
        case 'decrement': return { ...state, counter: state.counter - 1 }
        case 'reset': return initialState
        default: break;
    }
}

const Counter = () => {
    const [state1, dispatch1] = useReducer(reducer, initialState)
    const [state2, dispatch2] = useReducer(reducer, initialState)
    return (
        <div>
            <ButtonGroup>
                <Button color="primary" outline>
                    Counter1 <Badge color="secondary">{state1.counter}</Badge>
                </Button>
                <Button color="primary" outline>
                    Counter2 <Badge color="secondary">{state2.counter}</Badge>
                </Button>
            </ButtonGroup>
            <br /><br />
            <ButtonGroup>
                <Button onClick={() => { dispatch1({ type: 'increment' }) }} color="dark">increment</Button>
                <Button onClick={() => { dispatch1({ type: 'decrement' }) }} color="dark">decrement</Button>
                <Button onClick={() => { dispatch1({ type: 'reset' }) }} color="danger">reset</Button>
            </ButtonGroup>
            <br /><br />
            <ButtonGroup>
                <Button onClick={() => { dispatch2({ type: 'increment' }) }} color="dark">increment</Button>
                <Button onClick={() => { dispatch2({ type: 'decrement' }) }} color="dark">decrement</Button>
                <Button onClick={() => { dispatch2({ type: 'reset' }) }} color="danger">reset</Button>
            </ButtonGroup>

        </div>
    )
}

export default Counter
