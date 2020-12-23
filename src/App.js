import React, {useRef, useState} from "react";
import "./App.css";
import Component from "./components/Component";
function App() {
    const inputRef = useRef();
    const [show, setShow] = useState(true);
    return (
        <div className="App">
            <h1></h1>
            <input ref={inputRef} type="text" />
            <input type="text" />
            <input type="text" />
            <button onClick={() => inputRef.current.focus()}>Focus</button>
            <p></p>
            <button onClick={() => setShow(!show)}>toggle</button>
            <h3>Unmount Component</h3>
            {show && <Component />}
        </div>
    );
}

export default App;
