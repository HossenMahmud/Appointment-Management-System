import { Stack, Typography } from '@mui/material';
import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const ServiceItem = ({ value }) => {
    return (
        <Stack
            direction="row"
            alignItems="center"
            spacing={1}
        >
            <ArrowRightAltIcon />
            <Typography variant='body' sx={{ fontSize: '14px' }}>{value} </Typography>
        </Stack>
    );
};

export default ServiceItem;