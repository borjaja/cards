import React, { useEffect } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = (props) => {
    useEffect(() => {
        props.history.push('/about')
    }, [])
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="nav nav-tab">
                    <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                    <NavLink className="nav-link" to="/about">About</NavLink>
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default withRouter(Navbar);
