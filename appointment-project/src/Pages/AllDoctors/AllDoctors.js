import React from 'react';
import AllDoctorsCard from '../../Components/AllDoctors/AllDoctorsCard';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { Container } from '@mui/material';
import SubHeader from '../Shared/SubHeader';

const AllDoctors = () => {
    return (
        <>
            <Navbar></Navbar>
            <SubHeader></SubHeader>
            <Container maxWidth="lg" sx={{ py: 6 }}>
                <AllDoctorsCard></AllDoctorsCard>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default AllDoctors;