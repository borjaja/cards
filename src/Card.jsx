import React from "react";
import "./App.css";

const Card = (props) => {
    return (
        <div className="card">
            <div className="container">
                <h4>
                    <b>{props.name}</b>
                </h4>
                <p>{props.phone}</p>
                <input type="text" onChange={props.onChange} value={props.name} />
                <button className="button button-red" onClick={props.deleteCardHandler}>
                    Delete
                </button>
                <div>{props.children}</div>
            </div>
        </div>
    );
};

export default Card;
