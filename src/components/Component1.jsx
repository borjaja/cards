import React, {useEffect} from "react";

let renderCount = 1;

const Component1 = (props) => {
    useEffect(() => {
        renderCount++;
    });
    return (
        <div>
            <h3>
                ComponentA : render {renderCount} times || Counter {props.count}
            </h3>
        </div>
    );
};

export default Component1;
