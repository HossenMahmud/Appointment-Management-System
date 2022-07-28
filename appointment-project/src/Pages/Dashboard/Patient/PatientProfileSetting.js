import React, { useEffect, useState } from 'react';
import { ButtonMake, LayoutContiner } from '../../../styles/MetarialStyles';
import useAuth from '../../../Hooks/useAuth';
import { Box } from '@mui/system';
import { Grid, Paper, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import SubNav from '../../../Components/layout/SubNav';

const PatientProfileSetting = () => {
    const { user } = useAuth()
    const userId = user?.id;

    const [patientInfo, setPatientInfo] = useState([]);
    useEffect(() => {
        fetch(`https://doctor-appointment-server.rpi.gov.bd/patient/${userId}`)
            .then(res => res.json())
            .then(data => setPatientInfo(data[0]))
    }, [userId]);


    const UserInfo = styled(Box)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px dotted #f1f1f1',
        padding: '5px 0px'
    }));
    const TextLevel = styled(Typography)(({ theme }) => ({
        color: '#20C0F3',
        fontSize: '16px',
        fontWeight: 'bold'
    }));


    return (
        <>
            <SubNav from='Dashboard' to='Profile' fromLink='/Dashboard' ></SubNav>
            <LayoutContiner>
                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} sx={{ my: 2 }}>
                            <Box sx={{ display: 'flex', justifyContent: "space-between", borderBottom: "2px solid blue", pb: 1 }}>
                                <Typography variant='h5' sx={{ textTransform: 'capitalize' }}>{user?.userName}</Typography>
                                <Box>
                                    {
                                        patientInfo ? <Link to={`updatePatientInfo/${patientInfo?.id}`} style={{ textDecoration: 'none' }}><ButtonMake>Update Info</ButtonMake></Link> : <Link to={`addPatientInfo/${userId}`} style={{ textDecoration: 'none' }}><ButtonMake>Add Info</ButtonMake></Link>
                                    }
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} sx={{ mx: 'auto' }}>
                            <Paper elevation={16} sx={{ p: 2, textAlign: 'center' }}>
                                {
                                    patientInfo?.image ? <img src={patientInfo?.image} alt="" style={{ width: "200px", borderRadius: '10px' }} /> : <Box>Image Not Provided</Box>
                                }

                            </Paper>
                            <Paper elevation={16} sx={{ p: 2, mt: 2 }}>

                                <UserInfo sx={{ borderTop: '1px solid #f1f1f1' }}>
                                    <TextLevel variant='body' >First Name</TextLevel>
                                    <Typography sx={{ color: '#757575', ml: 2 }}>
                                        {patientInfo ? patientInfo.firstName : "Not Provided"}
                                    </Typography>
                                </UserInfo>

                                <UserInfo>
                                    <TextLevel variant='body' >Last Name</TextLevel>
                                    <Typography sx={{ color: '#757575', ml: 2 }}>
                                        {patientInfo ? patientInfo.lastName : "Not Provided"}
                                    </Typography>
                                </UserInfo>

                                <UserInfo>
                                    <TextLevel variant='body' >Email</TextLevel>
                                    <Typography sx={{ color: '#757575', ml: 2 }}> {user?.email}</Typography>
                                </UserInfo>

                                <UserInfo>
                                    <TextLevel variant='body' >Phone Number</TextLevel>
                                    <Typography sx={{ color: '#757575', ml: 2 }}>
                                        {patientInfo ? patientInfo.phone : "Not Provided"}
                                    </Typography>
                                </UserInfo>

                                <UserInfo>
                                    <TextLevel variant='body'>Gender</TextLevel>
                                    <Typography sx={{ color: '#757575', ml: 2 }}>
                                        {patientInfo ? patientInfo.gender : "Not Provided"}
                                    </Typography>
                                </UserInfo>

                                <UserInfo>
                                    <TextLevel variant='body'>Date Of Birth</TextLevel>
                                    <Typography sx={{ color: '#757575', ml: 2 }}>
                                        {patientInfo ? patientInfo.birth : "Not Provided"}
                                    </Typography>
                                </UserInfo>

                                <UserInfo>
                                    <TextLevel variant='body' >Blood Group</TextLevel>
                                    <Typography sx={{ color: '#757575', ml: 2 }}>
                                        {patientInfo ? patientInfo.blood : "Not Provided"}
                                    </Typography>
                                </UserInfo>

                                <UserInfo>
                                    <TextLevel variant='body'>City</TextLevel>
                                    <Typography sx={{ color: '#757575', ml: 2 }}>
                                        {patientInfo ? patientInfo.city : "Not Provided"}
                                    </Typography>
                                </UserInfo>

                                <UserInfo>
                                    <TextLevel variant='body'>Address</TextLevel>
                                    <Typography sx={{ color: '#757575', ml: 2 }}>
                                        {patientInfo ? patientInfo.address : "Not Provided"}
                                    </Typography>
                                </UserInfo>

                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </LayoutContiner >
        </>
    );
};

export default PatientProfileSetting;