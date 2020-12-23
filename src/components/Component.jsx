import React, {useState, useEffect, useRef} from "react";

const Component = (props) => {
    const [count, setCount] = useState(0);
    const componentRef = useRef(true);
    useEffect(() => {
        return () => {
            componentRef.current = false;
        };
    });
    const fakefetch = () =>
        setTimeout(() => {
            if (componentRef.current) setCount(count + 1);
        }, 2000);
    return (
        <>
            <h3>Component counter {count}</h3>
            <button onClick={fakefetch}>Button</button>
        </>
    );
};

export default Component;
