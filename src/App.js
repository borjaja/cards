import React, {useState, useCallback} from "react";
import "./App.css";

const functionCounter = new Set();
function App() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const incrementCount1 = useCallback(() => setCount1(count1 + 1), [count1]);
    const incrementCount2 = useCallback(() => setCount2(count2 + 1), [count2]);
    functionCounter.add(incrementCount1);
    functionCounter.add(incrementCount2);
    console.log(functionCounter);
    return (
        <>
            <h3>
                Component count1: {count1} count2: {count2}
            </h3>
            <button onClick={incrementCount1}>Button1</button>
            <button onClick={incrementCount2}>Button1</button>
        </>
    );
}

export default App;
