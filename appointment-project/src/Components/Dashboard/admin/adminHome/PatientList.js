import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, Box, Typography } from '@mui/material';
import { TableBox, TableHeading } from '../../../../styles/MetarialStyles';
import './doctorTable.css';

const PatientList = ({ patients }) => {
    return (
        <TableBox>
            <Box sx={{ borderBottom: "1px solid #eaeaea", py: 1, backgroundColor: '#D4FACD', textAlign: 'center' }}>
                <Typography variant='h6' sx={{ ml: 2 }}>Patient List</Typography>
            </Box>
            <TableContainer component={Paper} sx={{ borderRadius: 'none' }}>
                <Table sx={{ maxWidth: 650, }} aria-label="simple table">
                    <TableHead>
                        <TableHeading>
                            <TableCell>Doctor Name</TableCell>
                            <TableCell align="left">Phone</TableCell>
                            <TableCell align="left">Last Visit</TableCell>
                            <TableCell align="left">Paid</TableCell>
                        </TableHeading>
                    </TableHead>
                    <TableBody>
                        {patients.slice(0, 5).map((patient) => (
                            <TableRow
                                key={patient.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left" sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar alt="Remy Sharp" src={patient.image} sx={{ mr: 1 }} />
                                    {patient.firstName}{patient.lastName}
                                </TableCell>
                                <TableCell align="left">{patient.phone}</TableCell>
                                <TableCell align="left">$</TableCell>
                                <TableCell align="left">$</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </TableBox>
    );
};

export default PatientList;