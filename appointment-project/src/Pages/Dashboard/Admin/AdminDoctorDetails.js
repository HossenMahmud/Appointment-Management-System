import styled from '@emotion/styled';
import { Box, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DoctorClinic from '../../../Components/Dashboard/doctor/DoctorClinic';
import DoctorEducation from '../../../Components/Dashboard/doctor/DoctorEducation';
import { AddButton, LayoutContiner } from '../../../styles/MetarialStyles';
const DoctorBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px dotted #f1f1f1',
    padding: '5px 0px',
}));
const TextLevel = styled(Typography)(({ theme }) => ({
    color: '#20C0F3',
    fontWeight: 'bold',
    fontSize: '14px',
}));

const AdminDoctorDetails = () => {
    const { id } = useParams()
    const [doctor, setDoctor] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:5000/singleDoctor/${id}`)
            .then(res => res.json())
            .then(data => setDoctor(data[0]));
    }, [id]);


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
        <LayoutContiner>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={10} sx={{ mx: 'auto' }}>
                        <Paper elevation={16} sx={{ p: 2 }}>
                            <Grid container spacing={4}>
                                <Grid item xs={12} sm={4}>
                                    <Box sx={{ textAlign: 'left', }}>
                                        {
                                            doctor?.image ? <img src={doctor?.image} alt="" style={{ width: "100%", borderLeft: '6px solid #20C0F3', borderRadius: '10px' }} /> : <Box>Image Not Provided</Box>
                                        }
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <Box>
                                        <DoctorBox sx={{ borderTop: '1px solid #f1f1f1' }}>
                                            <TextLevel variant='body' >First Name</TextLevel>
                                            <Typography sx={{ color: '#757575', ml: 2, fontSize: '14px', }}>
                                                {doctor ? doctor.firstName : "Not Provided"}
                                            </Typography>
                                        </DoctorBox>

                                        <DoctorBox>
                                            <TextLevel variant='body' >Last Name</TextLevel>
                                            <Typography sx={{ color: '#757575', ml: 2, fontSize: '14px', }}>
                                                {doctor ? doctor.lastName : "Not Provided"}
                                            </Typography>
                                        </DoctorBox>

                                        {/* <doctor>
                                            <TextLevel variant='body' >Email</TextLevel>
                                            <Typography sx={{ color: '#757575', ml: 2, fontSize: '14px', }}> {user?.email}</Typography>
                                        </doctor> */}

                                        <DoctorBox>
                                            <TextLevel variant='body' >Phone Number</TextLevel>
                                            <Typography sx={{ color: '#757575', ml: 2, fontSize: '14px', }}>
                                                {doctor ? doctor.phone : "Not Provided"}
                                            </Typography>
                                        </DoctorBox>

                                        <DoctorBox>
                                            <TextLevel variant='body'>Gender</TextLevel>
                                            <Typography sx={{ color: '#757575', ml: 2, fontSize: '14px', }}>
                                                {doctor ? doctor.gender : "Not Provided"}
                                            </Typography>
                                        </DoctorBox>

                                        <DoctorBox>
                                            <TextLevel variant='body'>Date Of Birth</TextLevel>
                                            <Typography sx={{ color: '#757575', ml: 2, fontSize: '14px', }}>
                                                {doctor ? doctor.birth : "Not Provided"}
                                            </Typography>
                                        </DoctorBox>

                                        <DoctorBox>
                                            <TextLevel variant='body' >Blood Group</TextLevel>
                                            <Typography sx={{ color: '#757575', ml: 2, fontSize: '14px', }}>
                                                {doctor ? doctor.blood : "Not Provided"}
                                            </Typography>
                                        </DoctorBox>

                                        <DoctorBox>
                                            <TextLevel variant='body'>City</TextLevel>
                                            <Typography sx={{ color: '#757575', ml: 2, fontSize: '14px', }}>
                                                {doctor ? doctor.city : "Not Provided"}
                                            </Typography>
                                        </DoctorBox>

                                        <DoctorBox>
                                            <TextLevel variant='body'>Address</TextLevel>
                                            <Typography sx={{ color: '#757575', ml: 2, fontSize: '14px', }}>
                                                {doctor ? doctor.address : "Not Provided"}
                                            </Typography>
                                        </DoctorBox>

                                        <DoctorBox>
                                            <TextLevel variant='body'>Specialized</TextLevel>
                                            <Typography sx={{ color: '#757575', ml: 2, fontSize: '14px', }}>
                                                {doctor ? doctor.specialist : "Not Provided"}
                                            </Typography>
                                        </DoctorBox>

                                        <DoctorBox>
                                            <TextLevel variant='body'>Status</TextLevel>
                                            <AddButton sx={{ color: 'yellow' }}>  {doctor ? doctor.status : "Pending"}</AddButton>
                                        </DoctorBox>

                                    </Box>
                                </Grid>
                            </Grid>
                        </Paper>

                        <Paper elevation={16} sx={{ p: 2, my: 3 }}>
                            <Typography variant='h6' sx={{ color: '#757575', fontSize: '16px', mb: 2, fontWeight: 'bold' }}>About Me</Typography>
                            <Box>
                                <Typography sx={{ color: '#757575', ml: 2, fontSize: '14px', }}>
                                    {doctor ? doctor.biography : "Not Provided"}
                                </Typography>
                            </Box>
                        </Paper>

                        <Paper elevation={16} sx={{ p: 2, }}>
                            <Typography variant='h6' sx={{ color: '#757575', fontSize: '16px', mb: 2, fontWeight: 'bold' }}>Education</Typography>
                            <Box>
                                {
                                    edu ? <Box>
                                        {
                                            edu?.map((education, index) => <DoctorEducation
                                                key={index}
                                                education={education}
                                            >
                                            </DoctorEducation>)
                                        }
                                    </Box> : <Box>No Data Provide</Box>
                                }
                            </Box>
                        </Paper>

                        <Paper elevation={16} sx={{ p: 2, my: 3 }}>
                            <Typography variant='h6' sx={{ color: '#757575', fontSize: '16px', mb: 2, fontWeight: 'bold' }}>Clinic Info</Typography>
                            <Box>

                                {
                                    clinic ? <Box>
                                        {
                                            clinic?.map((clinic, index) => <DoctorClinic
                                                key={index}
                                                clinic={clinic}
                                            >
                                            </DoctorClinic>)
                                        }
                                    </Box> : <Box>No Data Provided</Box>
                                }

                            </Box>
                        </Paper>

                    </Grid>
                </Grid>
            </Box>
        </LayoutContiner>
    );
};

export default AdminDoctorDetails;