import { Grid } from '@mui/material';
import React, { useState } from 'react';
import PatientsCard from './PatientsCard';

const MyPatientsCard = () => {
    const [patients, setPatients] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
    return (
        <Grid container spacing={2}>
            {
                patients.map(patient => <PatientsCard></PatientsCard>)
            }

        </Grid>
    );
};

export default MyPatientsCard;