import React from 'react';
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';
import styled from '@emotion/styled';
import DoctorCard from './DoctorCard';
const HomeDoctor = ({ doctors }) => {
    const DoctorLayout = styled(Box)(({ theme }) => ({
        paddingTop: '50px',
        paddingBottom: '80px',
    }));
    return (
        <DoctorLayout>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box sx={{ textAlign: 'center', pb: 3 }}>
                        <Typography variant='h4' sx={{ color: "#3820C9", fontWeight: 'bold' }}>Meet With Doctors</Typography>
                    </Box>
                </Grid>
            </Grid>
            <DoctorCard doctors={doctors}></DoctorCard>
        </DoctorLayout>

    );
};

export default HomeDoctor;