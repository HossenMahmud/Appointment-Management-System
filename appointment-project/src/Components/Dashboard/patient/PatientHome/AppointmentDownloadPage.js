import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { LayoutContiner } from '../../../../styles/MetarialStyles';
import { Box } from '@mui/system';
import axios from 'axios';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import styled from '@emotion/styled';
import DownloadIcon from '@mui/icons-material/Download';
import ReactToPrint from 'react-to-print';

const DownloadButton = styled(Button)(({ theme }) => ({
    backgroundColor: "blue",
    borderColor: 'blue',
    textTransform: 'capitalize',
    color: '#fff',
    padding: '8px 25px',
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
const BackHome = styled(Button)(({ theme }) => ({
    backgroundColor: "green",
    borderColor: 'green',
    textTransform: 'capitalize',
    color: '#fff',
    padding: '8px 25px',
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


const AppointmentDownloadPage = () => {
    const { id } = useParams();
    const componentRef = useRef();


    const [apptData, setApptData] = useState([]);
    useEffect(() => {
        axios.get(`https://doctor-appointment-server.rpi.gov.bd/singleAppointment/${id}`).then((res) => {
            setApptData(res.data[0]);
        });
    }, [id]);

    return (
        <>
            <LayoutContiner>
                <Box>
                    <Box sx={{ ml: 5 }}>
                        <Link to='/Dashboard' style={{ textDecoration: 'none' }}>
                            <BackHome sx={{ mr: 2 }}>Back Home</BackHome>
                        </Link>
                        <ReactToPrint
                            trigger={() => <DownloadButton startIcon={<DownloadIcon />}>Download</DownloadButton>}
                            content={() => componentRef.current}
                        />
                    </Box>


                    <Box ref={componentRef} style={{ width: '90%', mx: 'auto', height: 'window.innerHeight', padding: '50px 30px' }}>
                        <Box sx={{ border: '3px solid blue', py: 2 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <img src={apptData?.doctorImg} alt="" style={{ width: '110px', borderRadius: '10px' }} />
                            </Box>
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography sx={{ color: 'blue', fontSize: '20px' }}>Dr. {apptData?.doctorName}</Typography>
                                <Typography sx={{ color: 'blue', fontSize: '20px' }}>{apptData?.specialist} Specialist</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ mt: 2 }}>
                            <TableContainer component={Paper}>
                                <Table sx={{ maxWidth: { xs: '300', sm: '400' }, border: '3px solid blue' }} aria-label="simple table" >
                                    <TableBody>
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
                                        <TableRow >
                                            <TableCell align="left">Patient Name</TableCell>
                                            <TableCell align="right">{apptData?.patientName}</TableCell>
                                        </TableRow>
                                        <TableRow >
                                            <TableCell align="left">Age</TableCell>
                                            <TableCell align="right">{apptData?.patientAge}</TableCell>
                                        </TableRow>
                                        <TableRow >
                                            <TableCell align="left">Phone Number</TableCell>
                                            <TableCell align="right">{apptData?.patientPhone}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Box>

                </Box>
            </LayoutContiner>
        </>
    );
};

export default AppointmentDownloadPage;



