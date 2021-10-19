import React from 'react';
import './Navigation.css'
import { Link } from 'react-router-dom';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';
import Button from 'react-bootstrap/Button';

const Navigation = () => {
    const { user,logOut } = useAuth()
    console.log(user);

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/blog">Blogs</Nav.Link>

                        <Nav.Link as={Link} to="/login">LogIn/Register</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            {user.displayName ? 
                            <div>
                                <Button variant="danger" onClick={logOut}>Log Out</Button> {user.displayName}<Image roundedCircle src={user.photoURL} alt="user"/>
                            </div>:
                            <Nav.Link as={Link} to="/login">LogIn/Register</Nav.Link>

                        }
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;