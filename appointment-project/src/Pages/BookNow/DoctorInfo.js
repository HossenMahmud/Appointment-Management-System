import { Box, Typography } from '@mui/material';
import React from 'react';

const DoctorInfo = ({ doctor }) => {
    return (
        <Box sx={{ backgroundColor: "#ADE7F7", mb: 3, p: 2, textAlign: 'center', borderRadius: '10px' }}>
            <img src={doctor?.image} alt="" width='150px' style={{ borderRadius: '20px' }} />
            <Typography>Dr. {doctor?.firstName} {doctor?.lastName}</Typography>
            <Typography> {doctor?.specialist}</Typography>
        </Box>
    );
};

export default DoctorInfo;