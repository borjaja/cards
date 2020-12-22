import React, {Component} from "react";
import "./App.css";

class Card extends Component {
    render() {
        console.log("Card js render");
        return (
            <div className="card">
                <img src={this.props.avatar} alt="Avatar" style={{width: "100%"}} />
                <div className="container">
                    <h4>
                        <b>{this.props.name}</b>
                    </h4>
                    <p>{this.props.title}</p>
                    <input type="text" onChange={this.props.onChange} value={this.props.name} />
                    <button className="button button-red" onClick={this.props.deleteCardHandler}>
                        Delete
                    </button>
                    <div>{this.props.children}</div>
                </div>
            </div>
        );
    }
}

export default Card;
