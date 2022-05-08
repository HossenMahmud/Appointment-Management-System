import { Button, Grid, Paper, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import appointmentImg from '../../assets/images/appointment.jpg';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styled from '@emotion/styled';
import MailIcon from '@mui/icons-material/Mail';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';
import { CancelButton } from '../../styles/MetarialStyles';

import './Doctor.css';


const DoctorAppointmentCard = () => {

    const FlexContainer = styled(Box)(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        color: '#757575'
    }));


    const ViewButton = styled(Button)(({ theme }) => ({
        backgroundColor: "#f0f0f0",
        borderColor: '#f0f0f0',
        textTransform: 'capitalize',
        color: '#84fa05',
        padding: '0px 3px',
        '&:hover': {
            backgroundColor: '#52CBF3',
            borderColor: '#52CBF3',
            boxShadow: 'none',
            color: '#fff',
        }
    }));
    const AcceptButton = styled(Button)(({ theme }) => ({
        backgroundColor: "#f0f0f0",
        borderColor: '#f0f0f0',
        textTransform: 'capitalize',
        color: '#1409e8',
        padding: '0px 3px',
        '&:hover': {
            backgroundColor: '#52CBF3',
            borderColor: '#52CBF3',
            boxShadow: 'none',
            color: '#fff',
        }
    }));



    return (
        <Grid item xs={12} sm={4}>
            <Paper elevation={3} sx={{ p: 2 }} className="docorCard">
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                >
                    <img src={appointmentImg} alt="" style={{ width: '80px', height: '80px', borderRadius: "5%" }} />
                    <Box>
                        <Typography className='doctorCardName' variant='body' sx={{ color: '#2E3842', fontSize: '16px', fontWeight: 'bold' }}>Richard Wilson</Typography>
                        <FlexContainer>
                            <LocationOnIcon sx={{ fontSize: '12px' }} />
                            <Typography sx={{ fontSize: '12px', ml: 1 }}> California, USA</Typography>
                        </FlexContainer>
                        <FlexContainer>
                            <MailIcon sx={{ fontSize: '12px' }} />
                            <Typography sx={{ fontSize: '12px', ml: 1 }}>example@gmail.com</Typography>
                        </FlexContainer>
                        <FlexContainer >
                            <AddIcCallIcon sx={{ fontSize: '12px' }} />
                            <Typography sx={{ fontSize: '12px', ml: 1 }}>+8801786502485</Typography>
                        </FlexContainer>

                    </Box>
                </Stack>
                <Box sx={{ mt: 2 }}>
                    <ViewButton sx={{ mr: 1 }} size='small' startIcon={<VisibilityIcon />}>
                        View
                    </ViewButton>
                    <AcceptButton sx={{ mr: 1 }} size='small' startIcon={<CheckIcon />}>
                        Accept
                    </AcceptButton>
                    <CancelButton size='small' startIcon={<CancelIcon fontSize='large' />}>
                        Cancel
                    </CancelButton>
                </Box>
            </Paper>
        </Grid>
    );
};

export default DoctorAppointmentCard;