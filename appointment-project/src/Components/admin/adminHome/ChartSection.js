import { Grid } from '@mui/material';
import React from 'react';
import RevenueChart from './RevenueChart';
import StatusChart from './StatusChart';

const ChartSection = () => {
    return (
        <Grid container spacing={2} sx={{ mt: 5 }}>
            <Grid item xs={12} sm={6}>
                <RevenueChart></RevenueChart>
            </Grid>
            <Grid item xs={12} sm={6}>
                <StatusChart></StatusChart>
            </Grid>
        </Grid>
    );
};

export default ChartSection;