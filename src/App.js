import React, { useEffect, useReducer } from "react";
import "./App.css";
import axios from "axios";

const initialState = {
    loading: true,
    error: false,
    todos: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_DATA': return {
            loading: false,
            error: false,
            todos: action.payload
        }
        case 'SET_ERROR': return {
            loading: false,
            error: true,
            todos: []
        }
        default: return state
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
            console.log(res.data);
            dispatch({ type: 'SET_DATA', payload: res.data })
        }).catch(err => {
            dispatch({ type: 'SET_ERROR' })
        })
    }, [])
    const listMarkup =
        <ul>
            {state.todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </ul>
    return (
        <div className="App">
            {state.loading ? 'Loading...' : state.error ? 'error' : listMarkup}

        </div>
    );
}

export default App;
