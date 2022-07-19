import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DoctorInfo = ({ doctorId }) => {

    return (
        <Box>
            <Typography variant='body' sx={{ display: 'block' }}> {doctor?.firstName} {doctor?.lastName}</Typography>
            <Typography variant='body' sx={{ color: '#20C0F3' }}>Medicine </Typography>
        </Box>
    );
};

export default DoctorInfo;