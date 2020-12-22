import React, { useState, useMemo } from "react";
import "./App.css";
import Component1 from "./components/Component1";

function App() {
    const [countA, setCountA] = useState(0);
    const incremetAddingOne = () => setCountA(countA + 1)
    const memoComponentA = useMemo(() => <Component1 />, [])
    return (
        <div className="App">
            App js count A: {countA}
            <p>
                <button onClick={incremetAddingOne}>Increment A
                </button>
            </p>
            {memoComponentA}
        </div>
    );
}

export default App;
