import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TodayPatientList from './TodayPatientList';

const TodayPatient = ({ doctor }) => {
    const doctorId = doctor?.id;
    const [apptData, setApptData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/doctorTodayPatient/${doctorId}`).then((res) => {
            setApptData(res.data);
        });
    }, [doctorId]);
    return (
        <Paper elevation={8} sx={{ mt: 5, p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Today Patients</Typography>
            {
                (apptData?.length !== 0) ? <TodayPatientList apptData={apptData}></TodayPatientList> : <Box sx={{ textAlign: 'center' }}>
                    <Typography variant='h5' sx={{ color: 'red' }}>Today Patient Not Available !!!!</Typography>
                </Box>
            }
        </Paper>
    );
};

export default TodayPatient;