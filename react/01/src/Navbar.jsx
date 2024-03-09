import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router

export const Navbar = () => {
    return (
        <nav>
             <Link to="/">Logo</Link>
            <ul>
               
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
