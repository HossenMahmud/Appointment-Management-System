import { Paper, Typography } from '@mui/material';
import React from 'react';
import TodayPatientList from './TodayPatientList';

const TodayPatient = () => {
    return (
        <Paper elevation={8} sx={{ mt: 5, p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Today Patients</Typography>
            <TodayPatientList></TodayPatientList>
        </Paper>
    );
};

export default TodayPatient;