import React from 'react';
import Navigation from '../Navigation';
import { Link } from 'react-router-dom';



function Header() {
    return (
        <div>
            <Link to="/"><h1> Sonika Poudyal </h1></Link>
            <Navigation />
        </div>
    )
}

export default Header;