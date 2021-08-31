import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
                <ul>
                    <li> <Link to="/">About Me</Link></li>
                    <li> Portfolio </li>
                    <li> <Link to="/contact">Contact Me </Link></li>
                    <li> Resume </li>
                </ul>
        </nav>
    )
}

export default Navigation;