import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import DoctorAppointmentCard from './DoctorAppointmentCard';

const DoctorAppointmentList = () => {
    const [appointments, setAppointments] = useState([1, 2, 3])
    return (
        <Box>
            <Grid container spacing={2}>
                {
                    appointments.map((appointment, index) => <DoctorAppointmentCard key={index}></DoctorAppointmentCard>)
                }
            </Grid>
        </Box>
    );
};

export default DoctorAppointmentList;