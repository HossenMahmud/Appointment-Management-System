import styled from '@emotion/styled';
import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';


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



const DoctorClinic = ({ clinic }) => {
    return (
        <Box sx={{ border: '1px dotted #f1f1f1', mb: 2, p: 2, borderRadius: '10px' }}>
            <UserInfo>
                <TextLevel variant='body' >Clinic Name</TextLevel>
                <Typography sx={{ color: '#757575', ml: 2, fontSize: '14px', }}>
                    {clinic.clinicName}
                </Typography>
            </UserInfo>
            <UserInfo>
                <TextLevel variant='body' >Clinic Address</TextLevel>
                <Typography sx={{ color: '#757575', ml: 2, fontSize: '14px', }}>
                    {clinic.clinicAddress}
                </Typography>
            </UserInfo>
        </Box>
    );
};

export default DoctorClinic;