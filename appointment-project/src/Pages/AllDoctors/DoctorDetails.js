import React, { useEffect, useState } from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { Container } from '@mui/material';
import DoctorDetailsInfo from '../../Components/AllDoctors/DoctorDetails/DoctorDetailsInfo'
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import useAuth from '../../Hooks/useAuth';

const DoctorDetails = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [doctor, setDoctor] = useState([]);
    useEffect(() => {
        Axios.get(`http://localhost:5000/singleDoctor/${id}`).then((res) => {
            setDoctor(res.data[0]);
        });
    }, [id]);

    return (
        <>
            <Navbar></Navbar>
            <Container maxWidth="lg" sx={{ py: 6 }}>
                {
                    (doctor.length !== 0) && <DoctorDetailsInfo doctor={doctor} doc={user}></DoctorDetailsInfo>
                }

            </Container>
            <Footer></Footer>
        </>
    );
};

export default DoctorDetails;