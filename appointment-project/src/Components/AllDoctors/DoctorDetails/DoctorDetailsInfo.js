import { Grid, Paper, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
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
import DoctorEducation from '../../Dashboard/doctor/DoctorEducation';
import DoctorClinic from '../../Dashboard/doctor/DoctorClinic';


const DoctorDetailsInfo = ({ doctor, doc }) => {
    let edu = [];
    let clinic = [];
    if (doctor == null) {
        edu = [];
        clinic = [];
    } else {
        edu = JSON.parse(doctor?.education);
        clinic = JSON.parse(doctor?.clinic);
    }

    return (
        <>
            <Paper elevation={16} sx={{ p: 2, my: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                            <img src={doctor.image} width="60%" alt="" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '18px' }}>{doctor.firstName} {doctor.lastName}</Typography>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>{doctor.specialist}</Typography>

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
                                    <Typography variant='body' sx={{ fontSize: '14px' }}>{doctor.address}</Typography>
                                </Stack>

                                <Stack direction="row" justifyContent="left" alignItems="center" spacing={1} >
                                    <EmailIcon variant='body' sx={{ fontSize: '14px' }} />
                                    <Typography variant='body' sx={{ fontSize: '14px' }}>{doc.email}</Typography>
                                </Stack>

                                <Stack direction="row" justifyContent="left" alignItems="center" spacing={1} >
                                    <PhoneIcon sx={{ fontSize: '14px' }} />
                                    <Typography variant='body' sx={{ fontSize: '14px' }}>{doctor.phone}</Typography>
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
                                {doctor.biography}
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper elevation={16} sx={{ p: 2 }}>
                            <Grid container spacing={3} >
                                <Grid item xs={12} sm={6}>
                                    <Paper elevation={16} sx={{ p: 2, }}>
                                        <Typography variant='h6' sx={{ color: '#757575', fontSize: '16px', mb: 2, fontWeight: 'bold' }}>Education</Typography>
                                        <Box>
                                            {
                                                edu?.map((education) => <DoctorEducation
                                                    key={education.id}
                                                    education={education}
                                                >
                                                </DoctorEducation>)
                                            }
                                        </Box>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Paper elevation={16} sx={{ p: 2, my: 3 }}>
                                        <Typography variant='h6' sx={{ color: '#757575', fontSize: '16px', mb: 2, fontWeight: 'bold' }}>Clinic Info</Typography>
                                        <Box>
                                            {
                                                clinic?.map((clinic) => <DoctorClinic
                                                    key={clinic.id}
                                                    clinic={clinic}
                                                >
                                                </DoctorClinic>)
                                            }
                                        </Box>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
};

export default DoctorDetailsInfo;