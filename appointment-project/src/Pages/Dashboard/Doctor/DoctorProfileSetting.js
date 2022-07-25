import React, { useEffect, useState } from 'react';
import { AddButton, ButtonMake, LayoutContiner } from '../../../styles/MetarialStyles';
import useAuth from '../../../Hooks/useAuth';
import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import DoctorEducation from '../../../Components/Dashboard/doctor/DoctorEducation';
import DoctorClinic from '../../../Components/Dashboard/doctor/DoctorClinic';


const UserInfo = styled(Box)(({ theme }) => ({
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

const DoctorProfileSetting = () => {

    const { user } = useAuth()
    const userId = user?.id;
    const [doctorInfo, setDoctorInfo] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:5000/doctor/${userId}`)
            .then(res => res.json())
            .then(data => setDoctorInfo(data[0]));
    }, [userId]);


    let edu = [];
    let clinic = [];
    if (doctorInfo == null) {
        edu = [];
        clinic = [];
    } else {
        edu = JSON.parse(doctorInfo?.education);
        clinic = JSON.parse(doctorInfo?.clinic);
    }

    return (
        <LayoutContiner>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} sx={{ my: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: "space-between", borderBottom: "2px solid blue", pb: 1 }}>
                            <Typography variant='h5' sx={{ textTransform: 'capitalize' }}>{user?.userName}</Typography>
                            <Box>
                                {
                                    doctorInfo ? <Link to={`updateDoctorInfo/${doctorInfo?.id}`} style={{ textDecoration: 'none' }}><ButtonMake>Update Info</ButtonMake></Link> : <Link to={`addDoctorInfo/${userId}`} style={{ textDecoration: 'none' }}><ButtonMake>Add Info</ButtonMake></Link>
                                }
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={10} sx={{ mx: 'auto' }}>
                        <Paper elevation={16} sx={{ p: 2 }}>
                            <Grid container spacing={4}>
                                <Grid item xs={12} sm={4}>
                                    <Box sx={{ textAlign: 'left', }}>
                                        {
                                            doctorInfo?.image ? <img src={doctorInfo?.image} alt="" style={{ width: "100%", borderLeft: '6px solid #20C0F3', borderRadius: '10px' }} /> : <Box>Image Not Provided</Box>
                                        }
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <Box>
                                        <UserInfo sx={{ borderTop: '1px solid #f1f1f1' }}>
                                            <TextLevel variant='body' >First Name</TextLevel>
                                            <Typography sx={{ color: '#757575', ml: 2, fontSize: '14px', }}>
                                                {doctorInfo ? doctorInfo.firstName : "Not Provided"}
                                            </Typography>
                                        </UserInfo>

                                        <UserInfo>
                                            <TextLevel variant='body' >Last Name</TextLevel>
                                            <Typography sx={{ color: '#757575', ml: 2, fontSize: '14px', }}>
                                                {doctorInfo ? doctorInfo.lastName : "Not Provided"}
                                            </Typography>
                                        </UserInfo>

                                        <UserInfo>
                                            <TextLevel variant='body' >Email</TextLevel>
                                            <Typography sx={{ color: '#757575', ml: 2, fontSize: '14px', }}> {user?.email}</Typography>
                                        </UserInfo>

                                        <UserInfo>
                                            <TextLevel variant='body' >Phone Number</TextLevel>
                                            <Typography sx={{ color: '#757575', ml: 2, fontSize: '14px', }}>
                                                {doctorInfo ? doctorInfo.phone : "Not Provided"}
                                            </Typography>
                                        </UserInfo>

                                        <UserInfo>
                                            <TextLevel variant='body' >Email</TextLevel>
                                            <Typography sx={{ color: '#757575', ml: 2, fontSize: '14px', }}>
                                                {doctorInfo ? doctorInfo.email : "Not Provided"}
                                            </Typography>
                                        </UserInfo>

                                        <UserInfo>
                                            <TextLevel variant='body'>Gender</TextLevel>
                                            <Typography sx={{ color: '#757575', ml: 2, fontSize: '14px', }}>
                                                {doctorInfo ? doctorInfo.gender : "Not Provided"}
                                            </Typography>
                                        </UserInfo>

                                        <UserInfo>
                                            <TextLevel variant='body'>Date Of Birth</TextLevel>
                                            <Typography sx={{ color: '#757575', ml: 2, fontSize: '14px', }}>
                                                {doctorInfo ? doctorInfo.birth : "Not Provided"}
                                            </Typography>
                                        </UserInfo>

                                        <UserInfo>
                                            <TextLevel variant='body' >Blood Group</TextLevel>
                                            <Typography sx={{ color: '#757575', ml: 2, fontSize: '14px', }}>
                                                {doctorInfo ? doctorInfo.blood : "Not Provided"}
                                            </Typography>
                                        </UserInfo>

                                        <UserInfo>
                                            <TextLevel variant='body'>City</TextLevel>
                                            <Typography sx={{ color: '#757575', ml: 2, fontSize: '14px', }}>
                                                {doctorInfo ? doctorInfo.city : "Not Provided"}
                                            </Typography>
                                        </UserInfo>

                                        <UserInfo>
                                            <TextLevel variant='body'>Address</TextLevel>
                                            <Typography sx={{ color: '#757575', ml: 2, fontSize: '14px', }}>
                                                {doctorInfo ? doctorInfo.address : "Not Provided"}
                                            </Typography>
                                        </UserInfo>

                                        <UserInfo>
                                            <TextLevel variant='body'>Specialized</TextLevel>
                                            <Typography sx={{ color: '#757575', ml: 2, fontSize: '14px', }}>
                                                {doctorInfo ? doctorInfo.specialist : "Not Provided"}
                                            </Typography>
                                        </UserInfo>

                                        <UserInfo>
                                            <TextLevel variant='body'>Status</TextLevel>
                                            <AddButton sx={{ color: 'yellow' }}>  {doctorInfo ? doctorInfo.status : "Pending"}</AddButton>
                                        </UserInfo>

                                    </Box>
                                </Grid>
                            </Grid>
                        </Paper>

                        <Paper elevation={16} sx={{ p: 2, my: 3 }}>
                            <Typography variant='h6' sx={{ color: '#757575', fontSize: '16px', mb: 2, fontWeight: 'bold' }}>About Me</Typography>
                            <Box>
                                <Typography sx={{ color: '#757575', ml: 2, fontSize: '14px', }}>
                                    {doctorInfo ? doctorInfo.biography : "Not Provided"}
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
        </LayoutContiner >
    );
};

export default DoctorProfileSetting;