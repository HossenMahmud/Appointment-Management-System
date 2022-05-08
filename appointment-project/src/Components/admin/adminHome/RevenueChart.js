import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { Box, Typography } from '@mui/material';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
);

export const options = {
    responsive: true,
    plugins: {
        title: {
            display: false,
            text: 'Revenue',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Revenue',
            data: labels.map(() => faker.datatype.number({ min: 100, max: 1100 })),
            // backgroundColor: 'rgba(255, 99, 132, 0.5)',
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
            ],
        },

    ],
};


const RevenueChart = () => {
    return (
        <Box sx={{ border: '1px solid #f0f0f0', borderRadius: '2px' }}>
            <Box sx={{ py: 1, borderBottom: '1px solid #f0f0f0' }}>
                <Typography variant='h6' sx={{ ml: 2 }}>Revenue</Typography>
            </Box>
            <Box sx={{ p: 2 }}>
                <Bar options={options} data={data} />
            </Box>
        </Box>
    );
};

export default RevenueChart;