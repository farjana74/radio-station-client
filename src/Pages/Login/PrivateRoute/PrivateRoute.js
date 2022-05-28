import React from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, Redirect, Route, useLocation } from "react-router";
import useAuth from './../../../hooks/useAuth';


const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useAuth();

    const location = useLocation();
    if (isLoading) {
        return <Spinner animation="grow" variant="danger" />;
    }


    if (!user.email) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;

};

export default PrivateRoute;
