import React, {useEffect} from "react";

let renderCount = 1;

const Component2 = (props) => {
    useEffect(() => {
        renderCount++;
    });
    return (
        <div>
            <h3>
                ComponentB : render {renderCount} times || Counter {props.count}
            </h3>
        </div>
    );
};

export default Component2;
