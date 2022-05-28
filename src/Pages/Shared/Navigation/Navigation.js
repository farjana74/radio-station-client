import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import navbarLogo from "../../../images/megafm.png";
import "./Navigation.css";
import useAuth from './../../../hooks/useAuth';


const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="" variant="light" className='shadow-sm nav-header-link-text  sticky-top '>
            <Container>
                <Navbar.Brand to="/home">
                    <img src={navbarLogo} alt="" className='img-fluid' width={"150"} height={"50"} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto text-dark ">
                        <Nav.Link as={Link} to="/home" className="pe-sm-3 text-dark">Home</Nav.Link>


                        <Nav.Link as={Link} to="/about" className="pe-sm-3 text-dark">About Us</Nav.Link>
                        <Nav.Link as={Link} to="/moreShows" className="pe-sm-3 text-dark">All shows</Nav.Link>

                        <Nav.Link as={Link} to="/contact" className="pe-sm-3 text-dark">Contact Us</Nav.Link>


                        {user?.email ?

                            <Nav>
                                <Nav.Link className="pe-sm-3 text-dark " as={Link} to="/dashboard">Dashboard</Nav.Link>
                                <button onClick={logOut} on className="logout-button ms-5  "> Logout</button>


                            </Nav>
                            :
                            <Nav.Link as={Link} to="/login" className="login-button ms-5  ">Login</Nav.Link >
                        }





                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;