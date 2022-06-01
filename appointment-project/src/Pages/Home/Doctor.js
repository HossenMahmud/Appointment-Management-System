import { Box, Container } from '@mui/material';
import React from 'react';
import HomeDoctor from '../../Components/Home/HomeDoctor';

const Doctor = () => {
    return (
        <Box sx={{ backgroundColor: '#f9f8ff', }}>
            <Container maxWidth="lg">
                <HomeDoctor></HomeDoctor>
            </Container>
        </Box>
    );
};

export default Doctor;