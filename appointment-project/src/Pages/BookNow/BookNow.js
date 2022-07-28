import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookNowCard from '../../Components/BookNow/BookNowCard';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import SubHeader from '../Shared/SubHeader';
import DoctorInfo from './DoctorInfo';

const BookNow = () => {
    const { id } = useParams();
    const [schedules, setSchedules] = useState([]);
    const [doctor, setDoctor] = useState(null);

    useEffect(() => {
        fetch(`https://doctor-appointment-server.rpi.gov.bd/doctorSchedule/${id}`)
            .then(res => res.json())
            .then(data => setSchedules(data))
    }, [id]);

    useEffect(() => {
        fetch(`https://doctor-appointment-server.rpi.gov.bd/singleDoctor/${id}`)
            .then(res => res.json())
            .then(data => setDoctor(data[0]))
    }, [id]);


    return (
        <>
            <Navbar></Navbar>
            <SubHeader from='Doctor' fromLink='/alldoctors' to='Book Now'></SubHeader>
            <Container maxWidth="lg" sx={{ py: 3 }}>
                <DoctorInfo doctor={doctor}></DoctorInfo>
                {
                    (schedules.length !== 0) ? <BookNowCard schedules={schedules}></BookNowCard> : <Box sx={{ textAlign: 'center', p: 1, border: '2px dotted red', borderRadius: '5px' }} >
                        <Typography variant='h5' sx={{ color: 'red' }}> Not Fount Appointment Slot</Typography>
                    </Box>
                }
            </Container>
            <Footer></Footer>
        </>
    );
};

export default BookNow;