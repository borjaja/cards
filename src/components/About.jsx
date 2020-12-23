import React from "react";
import faker from "faker";
import ColorFul from "../hoc/ColorFul";
const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>{`${faker.lorem.paragraph()}`}</p>
        </div>
    );
};

export default ColorFul(About);
