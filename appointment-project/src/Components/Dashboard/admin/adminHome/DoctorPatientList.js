import { Grid } from '@mui/material';
import React from 'react';
import DoctorList from './DoctorList';
import PatientList from './PatientList';

const DoctorPatientList = ({ doctors, patients }) => {
    return (
        <Grid container spacing={2} sx={{ mt: 5 }}>
            <Grid item xs={12} sm={6}>
                <DoctorList doctors={doctors}></DoctorList>
            </Grid>
            <Grid item xs={12} sm={6}>
                <PatientList patients={patients}></PatientList>
            </Grid>
        </Grid>
    );
};

export default DoctorPatientList;