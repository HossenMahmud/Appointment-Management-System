import styled from '@emotion/styled';
import { Container, Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import subHeaderImg from '../../assets/images/DoctorBanner.jpg';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from "react-router-dom";

const SubHeader = () => {
    const SubHeaderBg = styled(Box)(({ theme }) => ({
        backgroundImage: ` url(${subHeaderImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '80px',
        backgroundColor: 'rgba(10, 24, 81, 0.75)',

        '&::before': {
            content: '""',
            position: 'absolute',
            height: '100 %',
            width: '100 %',
            left: '0',
            top: '0',
            background: '#fff',
        }
    }));

    return (
        <SubHeaderBg>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant='h4' sx={{ color: '#fff', mb: 3 }}>Our Doctors</Typography>
                            <Stack
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                spacing={2}
                            >
                                <Link to='/' style={{ textDecoration: 'none' }}>
                                    <Typography sx={{ color: '#f1f1f1' }}>Home</Typography>
                                </Link>
                                <ArrowRightAltIcon sx={{ color: '#f1f1f1' }} />
                                <Typography sx={{ color: '#f1f1f1' }}>Doctors</Typography>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </SubHeaderBg>
    );
};

export default SubHeader;