import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, Box, Button, Typography } from '@mui/material';
import { TableBox, TableHeading } from '../../../../styles/MetarialStyles';
import './doctorTable.css';
import styled from '@emotion/styled';

const StatusBtnPendding = styled(Button)(({ theme }) => ({
    backgroundColor: "red",
    borderColor: 'red',
    textTransform: 'capitalize',
    color: '#fff',
    padding: '0px 3px',
    '&:hover': {
        backgroundColor: '#52CBF3',
        borderColor: '#52CBF3',
        boxShadow: 'none',
        color: '#fff',
    }
}));

const StatusBtnAccept = styled(Button)(({ theme }) => ({
    backgroundColor: "blue",
    borderColor: 'blue',
    textTransform: 'capitalize',
    color: '#fff',
    padding: '0px 3px',
    '&:hover': {
        backgroundColor: '#52CBF3',
        borderColor: '#52CBF3',
        boxShadow: 'none',
        color: '#fff',
    }
}));

const AppointmentList = ({ allAppointment }) => {
    return (
        <TableBox sx={{ mt: 5 }}>
            <Box sx={{ borderBottom: "1px solid #eaeaea", py: 1, backgroundColor: '#D4FACD', textAlign: 'center' }}>
                <Typography variant='h6' sx={{ ml: 2 }}>Appointment List</Typography>
            </Box>
            <TableContainer component={Paper} sx={{ borderRadius: 'none' }}>
                <Table aria-label="simple table">
                    <TableHead >
                        <TableHeading>
                            <TableCell>Doctor Name</TableCell>
                            <TableCell align="left">Speciality</TableCell>
                            <TableCell align="left">Patient Name</TableCell>
                            <TableCell align="left">Appt Date</TableCell>
                            <TableCell align="left">Booking Date</TableCell>
                            <TableCell align="left">status</TableCell>
                        </TableHeading>
                    </TableHead>
                    <TableBody>
                        {allAppointment.slice(0, 5).map((apptData) => (
                            <TableRow
                                key={apptData.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left" sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar alt="Remy Sharp" src={apptData.doctorImg} sx={{ mr: 1 }} />
                                    {apptData.doctorName}
                                </TableCell>
                                <TableCell align="left">{apptData.specialist}</TableCell>
                                <TableCell align="left" sx={{ display: 'flex', alignItems: 'center' }}>
                                    {apptData.patientName}
                                </TableCell>
                                <TableCell align="left">
                                    {apptData.apptDate}
                                    <Typography variant='h6' sx={{ fontSize: '12px', fontWeight: 'normal', color: '#00D0F1' }}>
                                        {apptData.startTime} -  {apptData.endTime}
                                    </Typography>
                                </TableCell>
                                <TableCell>{apptData.bookingDate}</TableCell>
                                <TableCell align="left">
                                    {
                                        (apptData.status === 'pendding' || apptData.status === 'Cancel') && <StatusBtnPendding> {apptData.status}</StatusBtnPendding>
                                    }
                                    {
                                        (apptData.status === 'Accepted') && <StatusBtnAccept> {apptData.status}</StatusBtnAccept>
                                    }

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </TableBox >
    );
};

export default AppointmentList;