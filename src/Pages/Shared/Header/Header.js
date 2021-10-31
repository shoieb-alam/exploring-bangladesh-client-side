import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
// import logo from '../../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <div>

            {/* responsive navbar */}
            <Navbar collapseOnSelect expand="lg" variant="dark" className="header" fixed="top">

                <Container>
                    <Navbar.Brand as={Link} to="/">

                        <div className="d-flex text-start">
                            <div>
                                <img
                                    src="https://i.ibb.co/smrxtD7/Tour-Today-BD.png"
                                    width="60"
                                    height="60"
                                    className="d-inline-block align-top me-2"
                                    alt="logo"
                                />
                            </div>
                            <div>
                                <span className="brand text-warning"> X-PLORING </span> <p> <small className="text-info"> BANGLADESH </small> </p>
                            </div>
                        </div>

                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="ms-auto fw-bold">
                            <Nav.Link as={HashLink} to="/home#banner">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#packages">Tour Packages</Nav.Link>
                            <Nav.Link as={Link} to="/gallary">Gallary</Nav.Link>

                            {/* showing username in the navbar if the user logged in  */}
                            {user?.email ?
                                <>
                                    <Nav.Link as={Link} to="/myPackages">My Package</Nav.Link>
                                    <Nav.Link as={Link} to="/addPackage">Add Package</Nav.Link>
                                    <Nav.Link as={Link} to="/managePackages">Manage Packages</Nav.Link>
                                    <>
                                        <Button onClick={logOut} variant="secondary" className="btn-outline-info rounded-pill px-3 ms-2">Logout {user?.displayName}</Button>
                                    </>
                                </>

                                :
                                <Nav.Link as={Link} to="/login" className="btn-warning btn-outline-info text-dark rounded-pill px-3">Login</Nav.Link>
                            }
                        </Nav>

                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>
    );
};

export default Header;