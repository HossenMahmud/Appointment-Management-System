import { Grid, Paper, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import GradeIcon from '@mui/icons-material/Grade';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { ButtonMake } from '../../../styles/MetarialStyles';
import DoctorEducation from '../../Dashboard/doctor/DoctorEducation';
import DoctorClinic from '../../Dashboard/doctor/DoctorClinic';
import { Link } from "react-router-dom";



const DoctorDetailsInfo = ({ doctor }) => {
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
            <Paper elevation={16} sx={{ p: 2, my: 2, border: '5px solid #ADE7F7' }}>
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
                                    <PhoneIcon sx={{ fontSize: '14px' }} />
                                    <Typography variant='body' sx={{ fontSize: '14px' }}>{doctor.phone}</Typography>
                                </Stack>
                            </Box>

                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{ textAlign: 'end' }}>
                            <Link to={`/bookNow/${doctor.id}`} style={{ textDecoration: 'none' }}>
                                <ButtonMake >Book Now</ButtonMake>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
            <Paper elevation={16} sx={{ mt: 6, px: 2, py: 4, border: '5px solid #ADE7F7' }}>
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
                                                edu?.map((education, index) => <DoctorEducation
                                                    key={index}
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
                                                clinic?.map((clinic, index) => <DoctorClinic
                                                    key={index}
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

            {/* <Paper elevation={16} sx={{ mt: 6, px: 2, py: 4, border: '5px solid #ADE7F7' }}>
            </Paper> */}
        </>
    );
};

export default DoctorDetailsInfo;