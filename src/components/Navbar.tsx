import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Simple counter</Link>
            <Link to="/userinfo">User info</Link>
            <Link to="/cart">Cart</Link>
        </nav>
    )
}

export default Navbar;