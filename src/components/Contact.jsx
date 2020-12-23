import React, { useEffect } from "react";
import faker from "faker";
const Contact = (props) => {
    useEffect(() => {
        props.history.push('/about')
    }, [])

    return (
        <div className="container">
            <h4 className="center">Container</h4>
            <p>{`${faker.lorem.paragraph()}`}</p>
        </div>
    );
};

export default Contact;
