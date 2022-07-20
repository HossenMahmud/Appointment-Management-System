import React from 'react';
import styled from '@emotion/styled';
import { Avatar, Button, Grid, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import PrintIcon from '@mui/icons-material/Print';

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

const ApptContent = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}));

const ViewButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#f0f0f0",
    borderColor: '#f0f0f0',
    textTransform: 'capitalize',
    color: '#26af48',
    padding: '0px 3px',
    '&:hover': {
        backgroundColor: '#52CBF3',
        borderColor: '#52CBF3',
        boxShadow: 'none',
        color: '#fff',
    }
}));
const PrintButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#f0f0f0",
    borderColor: '#f0f0f0',
    textTransform: 'capitalize',
    color: '#1409e8',
    padding: '0px 3px',
    [theme.breakpoints.only('xs')]: {
        marginTop: '10px'
    },
    '&:hover': {
        backgroundColor: '#52CBF3',
        borderColor: '#52CBF3',
        boxShadow: 'none',
        color: '#fff',
    }
}));

const MyAppointmentTable = ({ apptData }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >

                <TableCell align="left" sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar alt="Remy Sharp" src={apptData?.doctorImg} sx={{ mr: 1 }} />
                    <Box>
                        <Typography variant='body' sx={{ display: 'block' }}>{apptData?.doctorName}</Typography>
                        <Typography variant='body' sx={{ color: '#20C0F3' }}>  {apptData.specialist}</Typography>
                    </Box>
                </TableCell>


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
                    <Link to={`/AppointmentDownload/${apptData?.id}`} style={{ textDecoration: 'none' }}>
                        <PrintButton size='small' startIcon={<PrintIcon />}>
                            Print
                        </PrintButton>
                    </Link>
                </TableCell>

            </TableRow>

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
                                <Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Avatar alt="Remy Sharp" src={apptData?.doctorImg} sx={{ width: 100, height: 100 }} />
                                    </Box>
                                    <ApptContent>
                                        <Typography sx={{ mr: 1 }}>Doctor Name:</Typography>
                                        <Typography sx={{ color: '#14287E' }}>Dr. {apptData?.doctorName}</Typography>
                                    </ApptContent>
                                    <ApptContent>
                                        <Typography sx={{ mr: 1 }}>Specialist:</Typography>
                                        <Typography sx={{ color: '#14287E' }}>{apptData?.specialist}</Typography>
                                    </ApptContent>
                                </Box>

                                <Box sx={{ mt: 2 }}>
                                    <TableContainer component={Paper}>
                                        <Table sx={{ maxWidth: { xs: '300', sm: '400' } }} aria-label="simple table" >
                                            <TableBody sx={{ '&:last-child td, &:last-child th': { border: '1px solid #f1f1f1' } }}>
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
export default MyAppointmentTable;