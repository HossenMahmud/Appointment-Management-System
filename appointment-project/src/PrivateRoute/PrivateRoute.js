import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { Oval } from 'react-loader-spinner'
import { Box } from '@mui/system';
const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <Box sx={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Oval
                    ariaLabel="loading-indicator"
                    height={60}
                    width={60}
                    strokeWidth={5}
                    color="white"
                    secondaryColor="blue"
                />
            </Box>
        )
    }

    if (user[0]?.email) {
        return children;
    }
    else {
        return <Navigate to="/login" state={{ from: location }} />;
    }

};

export default PrivateRoute;