import React, {useRef} from "react";
import "./App.css";

function App() {
    const inputRef = useRef();
    return (
        <div className="App">
            <input ref={inputRef} type="text" />
            <input type="text" />
            <input type="text" />
            <button onClick={() => inputRef.current.focus()}>Focus</button>
        </div>
    );
}

export default App;
