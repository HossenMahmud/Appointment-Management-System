import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookNowCard from '../../Components/BookNow/BookNowCard';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import SubHeader from '../Shared/SubHeader';
import DoctorInfo from './DoctorInfo';

const BookNow = () => {
    const { id } = useParams();
    const [schedules, setSchedules] = useState(null);
    const [doctor, setDoctor] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/doctorSchedule/${id}`)
            .then(res => res.json())
            .then(data => setSchedules(data))
    }, [id]);

    useEffect(() => {
        fetch(`http://localhost:5000/singleDoctor/${id}`)
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
                    (schedules !== null) && <BookNowCard schedules={schedules}></BookNowCard>
                }
            </Container>
            <Footer></Footer>
        </>
    );
};

export default BookNow;