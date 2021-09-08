import React from 'react';
import Navigation from '../Navigation';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <header className="bg-dark fixed-top">
            <section className="d-flex justify-content-space-around border-top">
                <Link to="/"><h1> Sonika Poudyal </h1></Link>
                <Navigation />
            </section>
        </header>
    )
}

export default Header;