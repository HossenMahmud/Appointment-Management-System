import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { Container } from '@mui/material';
import DoctorDetailsInfor from '../../Components/AllDoctors/DoctorDetails/DoctorDetailsInfo'

const DoctorDetails = () => {
    return (
        <>
            <Navbar></Navbar>
            <Container maxWidth="lg" sx={{ py: 6 }}>
                <DoctorDetailsInfor></DoctorDetailsInfor>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default DoctorDetails;