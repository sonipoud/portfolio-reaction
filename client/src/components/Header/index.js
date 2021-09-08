import React from 'react';
import Navigation from '../Navigation';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <header className="text-center text-lg-start bg-dark fixed-top">
            <section className="d-flex justify-content-center p-2 border-top">
                <Link to="/"><h1> Sonika Poudyal </h1></Link>
                <Navigation />
            </section>
        </header>
    )
}

export default Header;