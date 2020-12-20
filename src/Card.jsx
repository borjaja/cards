import React from 'react'
import './App.css'

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.avatar} alt="Avatar" style={{ width: '100%' }} />
            <div className="container">
                <h4><b>{props.name}</b></h4>
                <p>{props.title}</p>
                <button className="button button-red">Delete</button>
                <div>{props.children}</div>
            </div>
        </div>
    )
}

export default Card