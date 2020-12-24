import React from "react";
import {NavLink, withRouter} from "react-router-dom";
import auth from "../auth";
const Navbar = (props) => {
    //useEffect(() => {
    //    props.history.push('/about')
    //}, [])
    const authHandler = () => {
        const cb = () => props.history.push(auth.isAuthenticated() ? "/about" : "/");
        auth.isAuthenticated() ? auth.logout(cb) : auth.login(cb);
    };
    const btnText = auth.isAuthenticated() ? "logout" : "login";
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="nav nav-tab mr-auto">
                    <li>
                        <NavLink className="nav-link" to="/">
                            Home <span className="sr-only">(current)</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/about">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/contact">
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <button className="btn btn-success navbar-btn" onClick={authHandler}>
                    {btnText}
                </button>
            </div>
        </nav>
    );
};

export default withRouter(Navbar);
