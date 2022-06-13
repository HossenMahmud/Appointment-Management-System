import { Grid, Paper, Stack, Typography } from '@mui/material';
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
import DoctorInfoItem from './DoctorInfoItem';


const DoctorDetailsTop = () => {
    const educations = [
        {
            id: 1,
            label2: 'American Dental Medical University',
            label3: 'BDS',
            label1: '1998 - 2003',
        },
        {
            id: 2,
            label2: 'American Dental Medical University',
            label3: 'MDS',
            label1: '2003 - 2005',
        }
    ]

    const experiences = [
        {
            id: 1,
            label2: 'Glowing Smiles Family Dental Clinic',
            label1: 'Dhaka',
            label3: '2010 - Present (5 Years)',
        },
        {
            id: 1,
            label2: 'Comfort Care Dental Clinic',
            label1: 'Dhaka',
            label3: '2007 - 2010 (3 Years)',
        },
    ]
    return (
        <>
            <Paper elevation={16} sx={{ p: 2, my: 2 }}>
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
            </Paper>
            <Paper elevation={16} sx={{ mt: 6, px: 2, py: 4 }}>
                <Grid container spacing={3} >
                    <Grid item xs={12}>
                        <Paper elevation={16} sx={{ mb: 3, p: 2 }}>
                            <Typography variant='h6'>About Me</Typography>
                            <Typography variant='body' sx={{ fontSize: '14px' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper elevation={16} sx={{ p: 2 }}>
                            <Grid container spacing={3} >
                                <Grid item xs={12} sm={6}>
                                    <Box>
                                        <Typography variant='h6'>Education</Typography>

                                        {
                                            educations.map(education => <DoctorInfoItem id={education.id} data={education}></DoctorInfoItem>)
                                        }

                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Box>
                                        <Typography variant='h6'>Work & Experience</Typography>
                                        {
                                            experiences.map(experience => <DoctorInfoItem id={experience.id} data={experience}></DoctorInfoItem>)
                                        }
                                    </Box>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
};

export default DoctorDetailsTop;