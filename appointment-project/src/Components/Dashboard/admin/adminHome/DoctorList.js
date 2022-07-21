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
import StarRateIcon from '@mui/icons-material/StarRate';

const DoctorList = ({ doctors }) => {
    return (
        <TableBox>
            <Box sx={{ borderBottom: "1px solid #eaeaea", py: 1, backgroundColor: '#D4FACD', textAlign: 'center' }}>
                <Typography variant='h6' sx={{ ml: 2 }}>Doctors List</Typography>
            </Box>
            <TableContainer component={Paper} sx={{ borderRadius: 'none' }}>
                <Table sx={{ maxWidth: 650, }} aria-label="simple table">
                    <TableHead>
                        <TableHeading>
                            <TableCell>Doctor Name</TableCell>
                            <TableCell align="left">Speciality</TableCell>
                            <TableCell align="left">Earned</TableCell>
                            <TableCell align="left">Reviews</TableCell>
                        </TableHeading>
                    </TableHead>
                    <TableBody>
                        {doctors.slice(0, 5).map((doctor) => (
                            <TableRow
                                key={doctor.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left" sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar alt="Remy Sharp" src={doctor.image} sx={{ mr: 1 }} />
                                    {doctor.firstName}  {doctor.lastName}
                                </TableCell>
                                <TableCell align="left">{doctor.specialist}</TableCell>
                                <TableCell align="left">$</TableCell>
                                <TableCell align="left">
                                    <StarRateIcon sx={{ color: '#ffbc34', fontSize: '12px' }} />
                                    <StarRateIcon sx={{ color: '#ffbc34', fontSize: '12px' }} />
                                    <StarRateIcon sx={{ color: '#ffbc34', fontSize: '12px' }} />
                                    <StarRateIcon sx={{ color: '#ffbc34', fontSize: '12px' }} />
                                    <StarRateIcon sx={{ color: '#ffbc34', fontSize: '12px' }} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </TableBox>
    );
};

export default DoctorList;