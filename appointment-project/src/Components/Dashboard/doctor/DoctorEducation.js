import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

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


const DoctorEducation = ({ education }) => {
    return (
        <Box sx={{ border: '1px dotted #f1f1f1', mb: 2, p: 2, borderRadius: '10px' }}>
            <UserInfo>
                <TextLevel variant='body' >Degree</TextLevel>
                <Typography sx={{ color: '#757575', ml: 2, fontSize: '14px', }}>
                    {education.degree}
                </Typography>
            </UserInfo>
            <UserInfo>
                <TextLevel variant='body' >Insitude</TextLevel>
                <Typography sx={{ color: '#757575', ml: 2, fontSize: '14px', }}>
                    {education.institude}
                </Typography>
            </UserInfo>
            <UserInfo>
                <TextLevel variant='body' >Passing Year</TextLevel>
                <Typography sx={{ color: '#757575', ml: 2, fontSize: '14px', }}>
                    {education.passingYear}
                </Typography>
            </UserInfo>

        </Box>
    );
};

export default DoctorEducation;