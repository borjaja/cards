import React, {useState, useMemo} from "react";
import "./App.css";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";

function App() {
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);
    const incremetAAddingOne = () => setCountA(countA + 1);
    const incremetBAddingOne = () => setCountB(countB + 1);
    const memoComponentA = useMemo(() => <Component1 count={countA} />, [countA]);
    return (
        <div className="App">
            App js count A: {countA}
            <p>
                <button onClick={incremetAAddingOne}>Increment A</button>
            </p>
            <p>
                <button onClick={incremetBAddingOne}>Increment B</button>
            </p>
            {memoComponentA}
            <p></p>
            <Component2 count={countB} />
        </div>
    );
}

export default App;
