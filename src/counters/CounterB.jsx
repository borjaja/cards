import React, { useContext } from 'react'
import { Button, ButtonGroup, Badge } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { StateContext } from "../App";
import CounterC from "./CounterC";

const CounterB = () => {
    const { state, dispatch } = useContext(StateContext)
    return (
        <div>
            <ButtonGroup>
                <Button color="primary" outline>
                    Counter1 <Badge color="secondary">{state.counter}</Badge>
                </Button>
            </ButtonGroup>
            <br /><br />
            <ButtonGroup>
                <Button onClick={() => { dispatch({ type: 'increment' }) }} color="dark">increment</Button>
                <Button onClick={() => { dispatch({ type: 'decrement' }) }} color="dark">decrement</Button>
                <Button onClick={() => { dispatch({ type: 'reset' }) }} color="danger">reset</Button>
            </ButtonGroup>
            <br /><br />
            <CounterC />
        </div>
    )
}

export default CounterB
