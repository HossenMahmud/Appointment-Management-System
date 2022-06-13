import { Box, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import HomeDoctor from '../../Components/Home/HomeDoctor';
import axios from 'axios'
const Doctor = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/allDoctors').then((res) => {
            setDoctors(res.data);
        });
    }, []);
    return (
        <Box sx={{ backgroundColor: '#f9f8ff', }}>
            <Container maxWidth="lg">
                <HomeDoctor doctors={doctors}></HomeDoctor>
            </Container>
        </Box>
    );
};

export default Doctor;