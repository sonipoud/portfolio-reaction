import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './style.css';

function Navigation() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="me-auto text-center flex-row">
                        <Nav.Link href="/"> About Me </Nav.Link>
                        <Nav.Link href="/portfolio"> Portfolio </Nav.Link>
                        <Nav.Link href="/contact"> Contact Me </Nav.Link>
                        <Nav.Link href="/resume" > Resume </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;

// target='_blank'
