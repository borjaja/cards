import React, {Component} from "react";
import "./App.css";

class Card extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log("Card js getDerivedStateFromProps");
        return state;
    }
    shouldComponentUpdate(nextProps, nextState) {
        // Comparing this.state and this.props with arguments
        console.log("Card js shouldComponentUpdate");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        // is invoked right before the most recently rendered output is committed to e.g. the DOM
        // enables your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed
        const snapshot = {message: "some snapshot"};
        console.log("Card js getSnapShotBeforeUpdate. Send: ", snapshot);

        return snapshot;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        // is invoked immediately after updating occurs. This method is not called for the initial render.
        console.log("Card js componentDidUpdate. Receive: ", snapshot);
    }
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
