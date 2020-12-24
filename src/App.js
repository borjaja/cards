import React from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Route exact path="/" component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/about" component={About} />
                <Route path="/:post_id" component={Post} />
            </div>
        </Router>
    );
}

export default App;
