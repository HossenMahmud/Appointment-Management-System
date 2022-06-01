import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const PatientCardItem = ({ value }) => {
    return (
        <Box
            sx={{
                border: "1px solid #f0f0f0",
                borderRadius: "5px",
                p: 3,
                backgroundColor: `${value.backgroundcolor}`,
                textAlign: 'center'
            }}
        >
            <img src={value.img} alt="" />
            <Typography variant='h6' sx={{ color: '#666' }}>{value.title}</Typography>
            <Typography variant='body' sx={{ color: '#666' }}>{value.number}</Typography>

        </Box>
    );
};

export default PatientCardItem;