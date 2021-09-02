import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './style.css';

function Navigation() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                    <Nav className="me-auto text-center flex-row">
                        <Nav.Link href="/"> About Me </Nav.Link>
                        <Nav.Link href="/portfolio"> Portfolio </Nav.Link>
                        <Nav.Link href="/contact"> Contact Me </Nav.Link>
                        <Nav.Link href="/resume"> Resume </Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    ) 
}

export default Navigation;
