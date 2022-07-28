import { Button, Grid, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import styled from '@emotion/styled';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';
import axios from 'axios';


const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));


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
const AcceptButton = styled(Button)(({ theme }) => ({
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
const CencelButton = styled(Button)(({ theme }) => ({
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



const DoctorAppointmentTable = ({ apptData, condition, setCondition }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleAccept = (id, e) => {
        const newData = {
            status: 'Accepted',
        }
        axios.put(`https://doctor-appointment-server.rpi.gov.bd/acceptAppointment/${id}`, newData)
            .then((res) => {
                if (res.status === 200) {
                    setCondition(!condition);
                }
            });
        e.preventDefault();
    };

    const handleCancel = (id, e) => {
        const newData = {
            status: 'Cancel',
        }
        axios.put(`https://doctor-appointment-server.rpi.gov.bd/acceptAppointment/${id}`, newData)
            .then((res) => {
                if (res.status === 200) {
                    setCondition(!condition);
                }
            });
        e.preventDefault();
    };

    return (
        <>
            <StyledTableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >

                <TableCell align="left">{apptData?.patientName}</TableCell>
                <TableCell align="left">{apptData?.patientAge}</TableCell>
                <TableCell align="left">{apptData?.patientPhone}</TableCell>


                <TableCell align="left">
                    <Typography variant='body' sx={{ display: 'block' }}>{apptData?.apptDate} </Typography>
                    <Typography variant='body' sx={{ color: '#20C0F3' }}>{apptData?.startTime} - {apptData?.endTime}</Typography>
                </TableCell>
                <TableCell align="left">{apptData?.bookingDate}</TableCell>

                <TableCell align="left">
                    <Box sx={{ width: '70px', height: '20p', backgroundColor: 'rgba(15, 183, 107,0.12)', textAlign: "center", borderRadius: '15px', color: '#26af48' }}>
                        {apptData?.status}
                    </Box>
                </TableCell>
                <TableCell>
                    <ViewButton onClick={handleOpen} sx={{ mr: 1, }} size='small' startIcon={<VisibilityIcon />}>
                        View
                    </ViewButton>

                    {
                        (apptData.status === 'pendding' || apptData.status === 'Cancel') && <AcceptButton onClick={() => handleAccept(`${apptData.id}`)} sx={{ mr: 1, }} size='small' startIcon={<CheckIcon />}>
                            Accept
                        </AcceptButton>
                    }
                    {
                        (apptData.status === 'pendding' || apptData.status === 'Accepted') && <CencelButton onClick={() => handleCancel(`${apptData.id}`)} size='small' startIcon={<CancelIcon />}>
                            Cancel
                        </CencelButton>

                    }


                </TableCell>

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
                                                    <TableCell align="right">{apptData?.patientName}</TableCell>
                                                </TableRow>
                                                <TableRow >
                                                    <TableCell align="left">Patient Age</TableCell>
                                                    <TableCell align="right">{apptData?.patientAge}</TableCell>
                                                </TableRow>
                                                <TableRow >
                                                    <TableCell align="left">Phone Number</TableCell>
                                                    <TableCell align="right">{apptData?.patientPhone}</TableCell>
                                                </TableRow>
                                                <TableRow >
                                                    <TableCell align="left">Email</TableCell>
                                                    <TableCell align="right">{apptData?.patientEmail}</TableCell>
                                                </TableRow>
                                                <TableRow >
                                                    <TableCell align="left">Hospital Name</TableCell>
                                                    <TableCell align="right">{apptData?.hospitalName}</TableCell>
                                                </TableRow>
                                                <TableRow >
                                                    <TableCell align="left">Hospital Address</TableCell>
                                                    <TableCell align="right">{apptData?.location}</TableCell>
                                                </TableRow>
                                                <TableRow >
                                                    <TableCell align="left">Appoint Date</TableCell>
                                                    <TableCell align="right">{apptData?.apptDate}</TableCell>
                                                </TableRow>
                                                <TableRow >
                                                    <TableCell align="left">Time</TableCell>
                                                    <TableCell align="right">{apptData?.startTime} - {apptData?.endTime}</TableCell>
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

export default DoctorAppointmentTable;