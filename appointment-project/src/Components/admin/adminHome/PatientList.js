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
function createData(name, phone, lastVisit, paid) {
    return { name, phone, lastVisit, paid };
}
const rows = [
    createData('Rubby Prrrin', '01786520485', '17 Nev 2019', 100),
    createData('Darren Eider', '01786520485', '17 Nev 2019', 100),
    createData('Dobina', '01786520485', '17 Nev 2019', 100),
    createData('shathu', '01786520485', '17 Nev 2019', 100),
    createData('Sofik Raj', '01786520485', '17 Nev 2019', 100),
];

const PatientList = () => {
    return (
        <TableBox>
            <Box sx={{ borderBottom: "1px solid #eaeaea", py: 1 }}>
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
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left" sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar alt="Remy Sharp" src={Img} sx={{ mr: 1 }} />
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.phone}</TableCell>
                                <TableCell align="left">${row.lastVisit}</TableCell>
                                <TableCell align="left">${row.paid}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </TableBox>
    );
};

export default PatientList;