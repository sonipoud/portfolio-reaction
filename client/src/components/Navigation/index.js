import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './style.css';

function Navigation() {
    return (
        <Navbar bg="dark" variant="dark" className="padding">
            <Container>
                    <Nav>
                        <Nav.Link href="#about"> About Me </Nav.Link>
                        <Nav.Link href="#portfolio"> Portfolio </Nav.Link>
                        <Nav.Link href="#contact"> Contact Me </Nav.Link>
                        <Nav.Link href="#resume"> Resume </Nav.Link>
                    </Nav> 
            </Container>
        </Navbar>
    )
}

export default Navigation;


