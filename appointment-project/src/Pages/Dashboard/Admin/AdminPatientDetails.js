import styled from '@emotion/styled';
import { Box, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LayoutContiner } from '../../../styles/MetarialStyles';

const AdminPatientDetails = () => {
    const { id } = useParams();
    const [patients, setPatients] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/singlePatient/${id}`)
            .then(res => res.json())
            .then(data => setPatients(data[0]))
    }, [id]);

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
        <LayoutContiner>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={8} sx={{ mx: 'auto' }}>
                        <Paper elevation={16} sx={{ p: 2, textAlign: 'center' }}>
                            {
                                patients?.image ? <img src={patients?.image} alt="" style={{ width: "200px", borderRadius: '10px' }} /> : <Box>Image Not Provided</Box>
                            }

                        </Paper>
                        <Paper elevation={16} sx={{ p: 2, mt: 2 }}>

                            <UserInfo sx={{ borderTop: '1px solid #f1f1f1' }}>
                                <TextLevel variant='body' >First Name</TextLevel>
                                <Typography sx={{ color: '#757575', ml: 2 }}>
                                    {patients ? patients.firstName : "Not Provided"}
                                </Typography>
                            </UserInfo>

                            <UserInfo>
                                <TextLevel variant='body' >Last Name</TextLevel>
                                <Typography sx={{ color: '#757575', ml: 2 }}>
                                    {patients ? patients.lastName : "Not Provided"}
                                </Typography>
                            </UserInfo>

                            <UserInfo>
                                <TextLevel variant='body' >Phone Number</TextLevel>
                                <Typography sx={{ color: '#757575', ml: 2 }}>
                                    {patients ? patients.phone : "Not Provided"}
                                </Typography>
                            </UserInfo>

                            <UserInfo>
                                <TextLevel variant='body'>Gender</TextLevel>
                                <Typography sx={{ color: '#757575', ml: 2 }}>
                                    {patients ? patients.gender : "Not Provided"}
                                </Typography>
                            </UserInfo>

                            <UserInfo>
                                <TextLevel variant='body'>Date Of Birth</TextLevel>
                                <Typography sx={{ color: '#757575', ml: 2 }}>
                                    {patients ? patients.birth : "Not Provided"}
                                </Typography>
                            </UserInfo>

                            <UserInfo>
                                <TextLevel variant='body' >Blood Group</TextLevel>
                                <Typography sx={{ color: '#757575', ml: 2 }}>
                                    {patients ? patients.blood : "Not Provided"}
                                </Typography>
                            </UserInfo>

                            <UserInfo>
                                <TextLevel variant='body'>City</TextLevel>
                                <Typography sx={{ color: '#757575', ml: 2 }}>
                                    {patients ? patients.city : "Not Provided"}
                                </Typography>
                            </UserInfo>

                            <UserInfo>
                                <TextLevel variant='body'>Address</TextLevel>
                                <Typography sx={{ color: '#757575', ml: 2 }}>
                                    {patients ? patients.address : "Not Provided"}
                                </Typography>
                            </UserInfo>

                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </LayoutContiner >
    );
};

export default AdminPatientDetails;