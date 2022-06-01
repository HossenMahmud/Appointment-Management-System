import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const user = useAuth();
    const location = useLocation();
    // console.log(location)
    if (user[0]?.email) {
        return children;
    }
    else {
        return <Navigate to="/login" state={{ from: location }} />;
    }

};

export default PrivateRoute;