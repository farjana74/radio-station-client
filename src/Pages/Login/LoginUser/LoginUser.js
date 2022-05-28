
import { Col, Container, Form, Row } from "react-bootstrap";
import React, { useState } from 'react';
import loginImage from "../../../images/iPhone-11-mock-1.png";
import { Link } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import "./LoginUser.css";
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router';

const LoginUser = () => {
    const { signInUsingGoogle, processLogin, setIsLoading, handleUserInfo, } = useAuth()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [logInError, setLogInError] = useState("");

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.pathname || "/";

    // google login system-------------------

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then((result) => {
                const user = result.user;
                handleUserInfo(user.email, 'PUT')
                navigate(from);
            })
            .finally(() => setIsLoading(false));
    };

    // email and password login--------------------

    const handleEmailLogIn = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordLogIn = (e) => {
        setPassword(e.target.value);
    };


    const handleLogIn = (e) => {
        e.preventDefault();
        processLogin(email, password)
            .then((result) => {
                const user = result.user
                handleUserInfo(user.email, 'PUT')
                navigate(from);
                setLogInError("");
            })
            .catch((error) => {
                setLogInError(error.message);
            });
    };
    return (
        <>
            <Navigation></Navigation>
            <Container className="py-4">
                <Row>
                    <Col xs={12} md={6} className="mb-5">
                        {/* <h1 className="text-center fw-bold">Rotors</h1> */}
                        <img
                            className="logo"
                            src={loginImage}
                            alt=""
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <h1 className="text-center fw-bold">SIGN IN</h1>
                        <Form
                            className="mx-auto pt-4 pb-5 w-75"
                            onSubmit={handleLogIn}
                        >
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label>EMAIL</Form.Label>
                                <Form.Control
                                    type="email"
                                    onBlur={handleEmailLogIn}
                                    placeholder="Email Address"
                                    required
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="BasicPassword"
                            >
                                <Form.Label>PASSWORD</Form.Label>
                                <Form.Control
                                    type="password"
                                    onBlur={handlePasswordLogIn}
                                    placeholder="..........."
                                    required
                                />
                            </Form.Group>


                            <div className="d-grid gap-2 my-4">
                                <button className="google-button py-2" type="submit">Submit</button>
                            </div>
                            <span>{logInError}</span>

                            <button className="google-button" onClick={handleGoogleSignIn}>Google sign</button>

                            <div>
                                <span>Don't have an account?</span>
                                <Link to="/register"> Sign Up</Link>
                            </div>
                        </Form>

                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default LoginUser;