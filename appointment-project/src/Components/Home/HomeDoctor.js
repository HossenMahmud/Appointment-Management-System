import React from 'react';
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';
import styled from '@emotion/styled';
import DoctorCard from './DoctorCard';
import doctorImg from '../../assets/images/d1.jpg';
import doctorImg2 from '../../assets/images/d2.jpg';
const HomeDoctor = () => {
    const DoctorLayout = styled(Box)(({ theme }) => ({
        paddingTop: '50px',
        paddingBottom: '80px',
    }));

    const Doctors = [
        {
            id: 101,
            "name": "Dr. Linda Tobin",
            "spaciality": "MBBS, MD - Ophthalmology, DNB - Ophthalmology",
            "address": "Dhaka,Bangladesh",
            "time": "Available on Fri 24 May",
            "rate": "$300 - $500",
            "img": `${doctorImg}`,
        },
        {
            id: 102,
            "name": "Dr. Linda Tobin",
            "spaciality": "MBBS, MD - Ophthalmology, DNB - Ophthalmology",
            "address": "Dhaka,Bangladesh",
            "time": "Available on Fri 24 May",
            "rate": "$300 - $500",
            "img": `${doctorImg2}`
        },
        {
            id: 103,
            "name": "Dr. Linda Tobin",
            "spaciality": "MBBS, MD - Ophthalmology, DNB - Ophthalmology",
            "address": "Dhaka,Bangladesh",
            "time": "Available on Fri 24 May",
            "rate": "$300 - $500",
            "img": `${doctorImg}`,
        },
        {
            id: 104,
            "name": "Dr. Linda Tobin",
            "spaciality": "MBBS, MD - Ophthalmology, DNB - Ophthalmology",
            "address": "Dhaka,Bangladesh",
            "time": "Available on Fri 24 May",
            "rate": "$300 - $500",
            "img": `${doctorImg2}`
        },
        {
            id: 105,
            "name": "Dr. Linda Tobin",
            "spaciality": "MBBS, MD - Ophthalmology, DNB - Ophthalmology",
            "address": "Dhaka,Bangladesh",
            "time": "Available on Fri 24 May",
            "rate": "$300 - $500",
            "img": `${doctorImg2}`
        },
        {
            id: 106,
            "name": "Dr. Linda Tobin",
            "spaciality": "MBBS, MD - Ophthalmology, DNB - Ophthalmology",
            "address": "Dhaka,Bangladesh",
            "time": "Available on Fri 24 May",
            "rate": "$300 - $500",
            "img": `${doctorImg2}`
        },
    ]


    return (
        <DoctorLayout>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box sx={{ textAlign: 'center', pb: 3 }}>
                        <Typography variant='h4' sx={{ color: "#3820C9", fontWeight: 'bold' }}>Meet With Doctors</Typography>
                    </Box>
                </Grid>
            </Grid>
            <DoctorCard doctors={Doctors}></DoctorCard>
        </DoctorLayout>

    );
};

export default HomeDoctor;