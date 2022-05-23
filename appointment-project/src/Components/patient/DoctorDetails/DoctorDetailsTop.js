import styled from '@emotion/styled';
import { Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import doctorImage from '../../../assets/images/dorctorImg.jpg';
import GradeIcon from '@mui/icons-material/Grade';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from '@mui/material/Link';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ButtonMake } from '../../../styles/MetarialStyles';


const DoctorDetailsTop = () => {

    const HeadBox = styled(Box)(({ theme }) => ({
        backgroundColor: "#ADE7F7",
        borderRadius: '4px',
        padding: '20px',
        boxShadow: ' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    }));
    return (
        <HeadBox>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Box>
                        <img src={doctorImage} width="100%" alt="" />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '18px' }}>Dr. Darren Elder</Typography>
                        <Typography sx={{ fontSize: '14px', color: '#757575', my: 1 }}>BDS, MDS - Oral & Maxillofacial Surgery</Typography>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>Dentist</Typography>

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
                                    <GradeIcon sx={{ fontSize: '20px', color: '#fff' }} />
                                </Box>
                                <Typography sx={{ fontSize: '14px' }}>(66)</Typography>
                            </Stack>
                        </Box>

                        <Box sx={{ mt: 1 }}>
                            <Stack direction="row" justifyContent="left" alignItems="center" spacing={1} >
                                <LocationOnIcon sx={{ fontSize: '14px' }} />
                                <Typography variant='body' sx={{ fontSize: '14px' }}>Dhaka,Bangladesh</Typography>
                            </Stack>

                            <Stack direction="row" justifyContent="left" alignItems="center" spacing={1} >
                                <EmailIcon variant='body' sx={{ fontSize: '14px' }} />
                                <Typography variant='body' sx={{ fontSize: '14px' }}>doctor@gmail.com</Typography>
                            </Stack>

                            <Stack direction="row" justifyContent="left" alignItems="center" spacing={1} >
                                <PhoneIcon sx={{ fontSize: '14px' }} />
                                <Typography variant='body' sx={{ fontSize: '14px' }}>+8801786502485</Typography>
                            </Stack>
                        </Box>

                        <Box sx={{ mt: 2 }}>
                            <Link href="#">
                                <FacebookIcon fontSize="large" sx={{ color: "#0779E9" }} />
                            </Link>
                            <Link href="#">
                                <TwitterIcon fontSize="large" sx={{ color: "#1DA1F2" }} />
                            </Link>
                            <Link href="#">
                                <InstagramIcon fontSize="large" sx={{ color: "#E94C58" }} />
                            </Link>
                            <Link href="#">
                                <LinkedInIcon fontSize="large" sx={{ color: "#0A66C2" }} />
                            </Link>
                        </Box>

                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box sx={{ textAlign: 'end' }}>
                        <ButtonMake >Book Now</ButtonMake>
                    </Box>
                </Grid>
            </Grid>

        </HeadBox>
    );
};

export default DoctorDetailsTop;