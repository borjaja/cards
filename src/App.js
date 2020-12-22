import React, { useReducer } from "react";
import "./App.css";
import Counter from "./components/Counter";

export const StateContext = React.createContext()

const initialState = { counter: 0 }
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment': return { ...state, counter: state.counter + 1 }
        case 'decrement': return { ...state, counter: state.counter - 1 }
        case 'reset': return initialState
        default: break;
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(`APP js: ${state.counter}`)
    return (
        <StateContext.Provider value={{ state, dispatch }}>
            <div className="App">
                <Counter />
            </div>
        </StateContext.Provider>
    );
}

export default App;
