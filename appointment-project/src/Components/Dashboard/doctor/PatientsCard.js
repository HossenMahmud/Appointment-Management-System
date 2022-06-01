import { Grid, Paper, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import patientImg from '../../../assets/images/patient.jpg';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import styled from '@emotion/styled';
import './Doctor.css';

const PatientsCard = () => {
    const FlexContainer = styled(Box)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: "10px"
    }));

    return (
        <Grid item xs={12} sm={4} md={3} >
            <Paper elevation={3} sx={{ textAlign: 'center', p: 2 }} className='patientCartItem'>
                <Box>
                    <img src={patientImg} alt="" style={{ width: '100px', height: "100px", borderRadius: '50%' }} />
                </Box>
                <Box sx={{ py: 1, borderBottom: "1px solid #f1f1f1" }}>
                    <Typography className='patientName' variant='body' sx={{ color: "#2E3842", fontSize: '16px', fontWeight: "bold" }}>Charlene Reed</Typography>
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ color: "#757575", fontSize: '12px', fontWeight: "bold", mt: 1 }}
                    >
                        <AddLocationIcon />
                        <Typography variant='body'>
                            Mohammadpur,Dhaka
                        </Typography>
                    </Stack>
                </Box>
                <Box sx={{ mt: 2 }}>
                    <FlexContainer>
                        <Typography sx={{ color: "#272b41", fontSize: '13px' }}>Phone</Typography>
                        <Typography sx={{ color: "#757575", fontSize: '13px' }}>+8801786502485</Typography>
                    </FlexContainer>
                    <FlexContainer>
                        <Typography sx={{ color: "#272b41", fontSize: '13px' }}>Age</Typography>
                        <Typography sx={{ color: "#757575", fontSize: '13px' }}>28</Typography>
                    </FlexContainer>
                    <FlexContainer>
                        <Typography sx={{ color: "#272b41", fontSize: '13px' }}>Blood Group</Typography>
                        <Typography sx={{ color: "#757575", fontSize: '13px' }}>O+</Typography>
                    </FlexContainer>
                </Box>
            </Paper>
        </Grid >
    );
};

export default PatientsCard;