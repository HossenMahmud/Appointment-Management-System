import React, { useEffect, useState } from 'react';
import AllDoctorsCard from '../../Components/AllDoctors/AllDoctorsCard';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { Container } from '@mui/material';
import SubHeader from '../Shared/SubHeader';
import axios from 'axios';

const AllDoctors = () => {
    const [doctors, setDoctors] = useState(null);
    useEffect(() => {
        axios.get('https://doctor-appointment-server.rpi.gov.bd/allDoctors').then((res) => {
            setDoctors(res.data);
        });
    }, []);



    return (
        <>
            <Navbar></Navbar>
            <SubHeader from='Home' fromLink='/' to='doctors'></SubHeader>
            <Container maxWidth="lg" sx={{ py: 6 }}>
                {
                    (doctors !== null) && <AllDoctorsCard doctors={doctors}></AllDoctorsCard>
                }
            </Container>
            <Footer></Footer>
        </>
    );
};

export default AllDoctors;