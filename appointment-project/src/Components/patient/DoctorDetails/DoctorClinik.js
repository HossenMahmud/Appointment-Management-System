import { Box } from '@mui/system';
import React, { useState } from 'react';
import DoctorClinikItem from './DoctorClinikItem';

const DoctorClinik = () => {
    const [clinic, setClinic] = useState([1, 2])
    return (
        <Box>
            {
                clinic.map((cl, index) => (
                    <DoctorClinikItem key={index} data={cl}></DoctorClinikItem>
                ))
            }
        </Box>
    );
};

export default DoctorClinik;