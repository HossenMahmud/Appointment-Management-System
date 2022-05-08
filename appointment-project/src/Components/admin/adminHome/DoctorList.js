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
import StarRateIcon from '@mui/icons-material/StarRate';

function createData(name, speciality, earned) {
    return { name, speciality, earned };
}

const rows = [
    createData('Dr Rubby Prrrin', 'Dental', 3524),
    createData('Dr Darren Eider', 'Cardiology', 7829),
    createData('Dr Robina', 'Urology', 4544),
    createData('Dr shathu', 'Orthopaedics', 5527),
    createData('Dr Sofik Raj', 'Medicine', 10027),
];

const DoctorList = () => {
    return (
        <TableBox>
            <Box sx={{ borderBottom: "1px solid #eaeaea", py: 1 }}>
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
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left" sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar alt="Remy Sharp" src={Img} sx={{ mr: 1 }} />
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.speciality}</TableCell>
                                <TableCell align="left">${row.earned}</TableCell>
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