import { Grid } from '@mui/material';
import React, { useState } from 'react';
import DoctorCardItem from './DoctorCardItem';

const AllDoctorsCard = () => {

    const [doctors, setDoctors] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
    return (
        <Grid container spacing={2}>
            {
                doctors.map((doctor, index) => <DoctorCardItem key={index}></DoctorCardItem>)
            }
        </Grid>
    );
};

export default AllDoctorsCard;