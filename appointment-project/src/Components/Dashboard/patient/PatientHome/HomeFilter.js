import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { FillterBox } from '../../../../styles/MetarialStyles';
import MyAppointment from './MyAppointment';
import MyPrescription from './MyPrescription';


const HomeFilter = () => {
    const [appoint, setAppoint] = useState('true');

    return (
        <Box sx={{ mt: 5 }}>
            <Grid container sx={{ mb: 3, borderBottom: '1px solid #6666', textAlign: 'center' }}>
                <Grid item xs={6}>
                    <FillterBox onClick={(e) => setAppoint(true)}>
                        Appointments
                    </FillterBox>
                </Grid>
                <Grid item xs={6}>
                    <FillterBox onClick={(e) => setAppoint(false)}>
                        Prescription
                    </FillterBox>
                </Grid>
            </Grid>

            {
                appoint ? <MyAppointment /> : <MyPrescription />
            }

        </Box >
    );
};

export default HomeFilter;