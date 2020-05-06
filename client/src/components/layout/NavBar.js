import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const NavBar = ({ title, icon }) => {
    return (
        <div className="navbar bg-primary">
            <h1>
                <i className={icon} /> {title}
            </h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </div>
    );
};

NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
};

NavBar.defaultProps = {
    title: "Contact Keeper",
    icon: "fas fa-id-card-alt",
};
