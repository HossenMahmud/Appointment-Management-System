import { Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import DoctorAppointmentTable from './DoctorAppointmentTable';
import axios from 'axios';
import { TableBox, TableHeading } from '../../../styles/MetarialStyles';
import styled from '@emotion/styled';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#ADE7F7",
        color: "black",
        border: "none",
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        border: "none",
        color: "gray",
    },
}));

const DoctorAppointmentList = ({ doctor }) => {
    const doctorId = doctor.id;
    const [apptData, setApptData] = useState([]);
    const [condition, setCondition] = useState(true);
    useEffect(() => {
        axios.get(`http://localhost:5000/doctorAppointment/${doctorId}`).then((res) => {
            setApptData(res.data);
        });
    }, [doctorId, condition]);


    return (
        <Box>
            <TableBox>
                <TableContainer component={Paper} sx={{ borderRadius: 'none' }}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableHeading>
                                <StyledTableCell>Patient Name</StyledTableCell>
                                <StyledTableCell>Age</StyledTableCell>
                                <StyledTableCell>Phone Number</StyledTableCell>
                                <StyledTableCell align="left">Appt Date</StyledTableCell>
                                <StyledTableCell align="left">Booking Date</StyledTableCell>
                                <StyledTableCell align="left">Status</StyledTableCell>
                                <StyledTableCell align="left">Action</StyledTableCell>
                            </TableHeading>
                        </TableHead>
                        <TableBody>

                            {
                                apptData?.map(appdata => <DoctorAppointmentTable
                                    key={appdata?.id}
                                    apptData={appdata}
                                    condition={condition} setCondition={setCondition}
                                >
                                </DoctorAppointmentTable>)
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </TableBox>
        </Box>
    );
};

export default DoctorAppointmentList;