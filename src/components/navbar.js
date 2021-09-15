import React from 'react'

const Navbar = (props) => {
    return (
        <div className="navbar">
            <div className="header">
                <h1>{props.title} Components</h1>
            </div>
            <ul className="menu-list">
                <li><a href="#">Home Page</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    );
}

export const SubNavbar = () => {
    return(
        <div className="subNavbar"></div>
    );
}
export default Navbar;