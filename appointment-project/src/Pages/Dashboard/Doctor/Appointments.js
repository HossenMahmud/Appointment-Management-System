import React, { useEffect, useState } from 'react';
import DoctorAppointmentList from '../../../Components/Dashboard/doctor/DoctorAppointmentList';
import { LayoutContiner } from '../../../styles/MetarialStyles';
import useAuth from '../../../Hooks/useAuth';
import axios from 'axios';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const Appointments = () => {
    const { user } = useAuth();
    const userId = user?.id
    const [doctor, setDoctor] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/doctor/${userId}`).then((res) => {
            setDoctor(res.data[0]);
        });
    }, [userId]);

    return (
        <LayoutContiner>
            {
                (doctor.length !== 0) ? <DoctorAppointmentList doctor={doctor}></DoctorAppointmentList> : <Box sx={{ textAlign: 'center' }}>
                    <Typography variant='h5' sx={{ color: 'red' }}>Appointment Not Available !!!!</Typography>
                </Box>
            }

        </LayoutContiner>
    );
};

export default Appointments;