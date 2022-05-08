import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const DorctorCardItem = ({ value }) => {
    return (

        <Box
            sx={{
                border: "1px solid #f0f0f0",
                borderRadius: "5px",
                p: 3,
                backgroundColor: `${value.backgroundcolor}`
            }}
        >
            <Stack
                direction="row"
                alignItems="center"
                sx={{ mb: 1 }}
            >
                <Box sx={{ width: 80, height: 80, border: `5px solid ${value.Circlecolor}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 2 }}>
                    <img src={value.img} alt="" />
                </Box>
                <Box>
                    <Typography variant='body' sx={{ color: "#272b41", fontSize: '14px', fontWeight: 'bold' }}>{value.name}</Typography>
                    <Typography variant='h5' sx={{ color: "#272b41", fontSize: '22px', fontWeight: 'bold' }}>{value.patient}</Typography>
                    <Typography variant='body' sx={{ color: '#272b41', fontSize: '14px', fontWeight: 'normal' }}>{value.date}</Typography>
                </Box>
            </Stack>

        </Box >
    );
};

export default DorctorCardItem;