import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, Box, Typography } from '@mui/material';
import { TableBox, TableHeading } from '../../../styles/MetarialStyles';
import Img from '../../../assets/images/profile.jpg'
import './doctorTable.css';

function createData(doctorName, speciality, patientName, date, time, ammount) {
    return { doctorName, speciality, patientName, date, time, ammount };
}

const rows = [
    createData('Dr Rubby Prrrin', 'Urology', 'Rabin Malik', '22 Sept 2022', '11:00 AM - 11:15 AM', 50),
    createData('Dr Rubby Prrrin', 'Dental', 'Rabin Malik', '22 Sept 2022', '11:00 AM - 11:15 AM', 50),
    createData('Dr Rubby Prrrin', 'Cardiology', 'Rabin Malik', '22 Sept 2022', '11:00 AM - 11:15 AM', 50),
    createData('Dr Rubby Prrrin', 'Orthopaedics', 'Rabin Malik', '22 Sept 2022', '11:00 AM - 11:15 AM', 50),
];


const AppointmentList = () => {
    return (
        <TableBox sx={{ mt: 5 }}>
            <Box sx={{ borderBottom: "1px solid #eaeaea", py: 1 }}>
                <Typography variant='h6' sx={{ ml: 2 }}>Appointment List</Typography>
            </Box>
            <TableContainer component={Paper} sx={{ borderRadius: 'none' }}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableHeading>
                            <TableCell>Doctor Name</TableCell>
                            <TableCell align="left">Speciality</TableCell>
                            <TableCell align="left">Patient Name</TableCell>
                            <TableCell align="left">Appointment Time</TableCell>
                            <TableCell align="left">Ammount</TableCell>
                        </TableHeading>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left" sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar alt="Remy Sharp" src={Img} sx={{ mr: 1 }} />
                                    {row.doctorName}
                                </TableCell>
                                <TableCell align="left">{row.speciality}</TableCell>
                                <TableCell align="left" sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar alt="Remy Sharp" src={Img} sx={{ mr: 1 }} />
                                    {row.patientName}
                                </TableCell>
                                <TableCell align="left">
                                    {row.date}
                                    <Typography variant='h6' sx={{ fontSize: '12px', fontWeight: 'normal', color: '#00D0F1' }}>  {row.time}</Typography>
                                </TableCell>
                                <TableCell align="left">${row.ammount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </TableBox >
    );
};

export default AppointmentList;