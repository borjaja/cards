import React from "react";

const ColorFul = (WrappedComponnet) => {
    const colors = ["text - primary", "text-secondary", "text-success", "text-danger", "text-warning", "text-info", "text-light", "text-dark", "text-muted", "text-white"];
    const color = colors[Math.floor(Math.random() * 5)];
    return (props) => {
        return (
            <div className={color}>
                <WrappedComponnet {...props} />
            </div>
        );
    };
};

ColorFul.propTypes = {};

export default ColorFul;
