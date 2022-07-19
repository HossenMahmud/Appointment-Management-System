import styled from '@emotion/styled';
import { Container, Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import subHeaderImg from '../../assets/images/DoctorBanner.jpg';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from "react-router-dom";

const SubHeader = ({ from, fromLink, to }) => {
    const SubHeaderBg = styled(Box)(({ theme }) => ({
        backgroundImage: ` url(${subHeaderImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '30px',
        backgroundColor: 'rgba(10, 24, 81, 0.75)',
        marginTop: '1px',
        borderRadius: '10px',

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
        <Container maxWidth="lg">
            <SubHeaderBg>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Box sx={{ textAlign: 'center' }}>
                            {/* <Typography variant='h5' sx={{ color: '#fff', mb: 3 }}>{title}</Typography> */}
                            <Stack
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                spacing={2}
                            >
                                <Link to={`${fromLink}`} style={{ textDecoration: 'none' }}>
                                    <Typography sx={{ color: '#f1f1f1' }}>{from}</Typography>
                                </Link>
                                <ArrowRightAltIcon sx={{ color: '#f1f1f1' }} />
                                <Typography sx={{ color: '#f1f1f1' }}>{to}</Typography>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </SubHeaderBg>
        </Container>
    );
};

export default SubHeader;