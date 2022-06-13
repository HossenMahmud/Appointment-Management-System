import styled from '@emotion/styled';
import { Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './DoctorCartItem.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GradeIcon from '@mui/icons-material/Grade';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import WatchLaterIcon from '@mui/icons-material/WatchLater';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Link } from "react-router-dom";
import { ButtonMake } from '../../styles/MetarialStyles';

const DoctorCardItem = ({ doctor }) => {
    const CardLayout = styled(Box)(({ theme }) => ({
        backgroundColor: "#fff",
        border: '1px solid #f0f0f0',
        borderRadius: '4px',
        padding: '15px',
    }));

    const DoctorName = styled(Typography)(({ theme }) => ({
        color: '#555',
        fontWeight: 'bold',
        fontSize: '16px',
        transition: ' all 0.3s',
        '&:hover': {
            color: '#09dca4',
        }
    }));

    return (
        <Grid item xs={12} sm={6} md={3} >
            <CardLayout>
                {/* Doctor Image */}
                <Box className="img-container">
                    <img style={{ display: 'block', transition: ' transform .4s', overflow: 'hidden', }} src={doctor.image} alt="" width="100%" />
                </Box>

                {/* Doctor Info */}
                <Box sx={{ my: 2 }}>

                    <Stack
                        direction="row"
                        justifyContent="left"
                        alignItems="center"
                        spacing={2}
                    >
                        <DoctorName>{doctor.firstName}{doctor.lastName}</DoctorName>
                        <CheckCircleIcon sx={{ fontSize: '18px', color: '#20C0F3' }} />
                    </Stack>

                    <Typography sx={{ fontSize: '12px', color: '#757575' }}>
                        {doctor.specialist}
                    </Typography>

                    <Box sx={{ mt: 1 }}>
                        <Stack
                            direction="row"
                            justifyContent="left"
                            alignItems="center"
                        >
                            <Box>
                                <GradeIcon sx={{ fontSize: '20px', color: '#f4c150' }} />
                                <GradeIcon sx={{ fontSize: '20px', color: '#f4c150' }} />
                                <GradeIcon sx={{ fontSize: '20px', color: '#f4c150' }} />
                                <GradeIcon sx={{ fontSize: '20px', color: '#f4c150' }} />
                                <GradeIcon sx={{ fontSize: '20px', color: '#dedfe0' }} />
                            </Box>
                            <Typography sx={{ fontSize: '14px', color: '#757575' }}>(66)</Typography>
                        </Stack>
                    </Box>

                    <Box sx={{ my: 1 }}>
                        <Stack direction="row" justifyContent="left" alignItems="center" spacing={1} >
                            <LocationOnIcon sx={{ fontSize: '12px', color: '#757575' }} />
                            <Typography sx={{ fontSize: '12px', color: '#757575' }}>{doctor.address}</Typography>
                        </Stack>

                        {/* <Stack direction="row" justifyContent="left" alignItems="center" spacing={1} >
                            <WatchLaterIcon sx={{ fontSize: '12px', color: '#757575' }} />
                            <Typography sx={{ fontSize: '12px', color: '#757575' }}>Available on Fri 24 May</Typography>
                        </Stack> */}

                        <Stack direction="row" justifyContent="left" alignItems="center" spacing={1} >
                            <MonetizationOnIcon sx={{ fontSize: '12px', color: '#757575' }} />
                            <Typography sx={{ fontSize: '12px', color: '#757575' }}>$300 - $500</Typography>
                        </Stack>
                    </Box>

                    <Box>
                        <Link to='/doctordetails' style={{ textDecoration: 'none' }}>
                            <ButtonMake sx={{ mr: 1 }}>View Profile</ButtonMake>
                        </Link>
                        <ButtonMake >Book Now</ButtonMake>
                    </Box>

                </Box>
            </CardLayout>
        </Grid >
    );
};

export default DoctorCardItem;