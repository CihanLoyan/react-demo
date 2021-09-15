import React from 'react'

const Navbar = (props) => {
    return (
        <div className="navbar">
            <div className="header">
                <h1>{props.title} Components</h1>
            </div>
            <ul className="menu-list">
                {props.menuList.map((item) => {return <li><a href="#">{item.name}</a></li>})}
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