import styled from '@emotion/styled';
import { Button, Grid, Modal, Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: {
        xs: '300px',
        sm: '400px'
    },
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
    borderRadius: '2px',
};

const ViewButton = styled(Button)(({ theme }) => ({
    backgroundColor: "green",
    borderColor: 'green',
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

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#ccc",
        color: "black",
        border: "none",
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        border: "none",
        color: "gray",
    },
}));


const TodayPatientListRow = ({ data, index }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <StyledTableRow key={index}>
                <StyledTableCell align="left">{data?.patientId}</StyledTableCell>
                <StyledTableCell align="left">{data?.patientName}</StyledTableCell>
                <StyledTableCell align="left">{data?.patientAge}</StyledTableCell>
                <StyledTableCell align="left">{data?.patientPhone}</StyledTableCell>
                <StyledTableCell align="left">
                    {data?.apptDate}
                    <Typography sx={{ color: 'blue' }}>{data?.startTime} - {data?.endTime}</Typography>
                </StyledTableCell>
                <StyledTableCell align="left">{data?.bookingDate}</StyledTableCell>
                <StyledTableCell align="left">
                    <ViewButton onClick={handleOpen} size='small' startIcon={<VisibilityIcon />}>
                        View
                    </ViewButton>
                </StyledTableCell>

            </StyledTableRow>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box id="modal-modal-description" sx={{ mt: 2 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Box sx={{ mt: 2 }}>
                                    <Box sx={{ textAlign: "center", py: 2, backgroundColor: 'blue', color: '#fff' }}>
                                        <Typography>Patient Details</Typography>
                                    </Box>
                                    <TableContainer component={Paper}>
                                        <Table sx={{ maxWidth: { xs: '300', sm: '400' } }} aria-label="simple table" >
                                            <TableBody sx={{ '&:last-child td, &:last-child th': { border: '1px solid #f1f1f1' } }}>
                                                <TableRow >
                                                    <TableCell align="left">Patient Name</TableCell>
                                                    <TableCell align="right">{data?.patientName}</TableCell>
                                                </TableRow>
                                                <TableRow >
                                                    <TableCell align="left">Patient Age</TableCell>
                                                    <TableCell align="right">{data?.patientAge}</TableCell>
                                                </TableRow>
                                                <TableRow >
                                                    <TableCell align="left">Phone Number</TableCell>
                                                    <TableCell align="right">{data?.patientPhone}</TableCell>
                                                </TableRow>
                                                <TableRow >
                                                    <TableCell align="left">Email</TableCell>
                                                    <TableCell align="right">{data?.patientEmail}</TableCell>
                                                </TableRow>
                                                <TableRow >
                                                    <TableCell align="left">Hospital Name</TableCell>
                                                    <TableCell align="right">{data?.hospitalName}</TableCell>
                                                </TableRow>
                                                <TableRow >
                                                    <TableCell align="left">Hospital Address</TableCell>
                                                    <TableCell align="right">{data?.location}</TableCell>
                                                </TableRow>
                                                <TableRow >
                                                    <TableCell align="left">Appoint Date</TableCell>
                                                    <TableCell align="right">{data?.apptDate}</TableCell>
                                                </TableRow>
                                                <TableRow >
                                                    <TableCell align="left">Time</TableCell>
                                                    <TableCell align="right">{data?.startTime} - {data?.endTime}</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Box>
                            </Grid>
                        </Grid>

                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default TodayPatientListRow;