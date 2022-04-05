import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';
const Header = () => {
    return (
        <div>
            <Navbar bg="" expand="lg" className="p-3">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto mx-auto">
                            <CustomLink to="/home" className="links">Home</CustomLink>
                            <CustomLink to="/reviews" className="links">Reviews</CustomLink>
                            <CustomLink to="/dashboard" className="links">Dashboard</CustomLink>
                            <CustomLink to="/blogs" className="links">Blogs</CustomLink>
                            <CustomLink to="/about" className="links">About</CustomLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;