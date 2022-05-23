import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, Box, Button, Typography } from '@mui/material';
import { TableBox, TableHeading } from '../../../styles/MetarialStyles';
import Img from '../../../assets/images/profile.jpg'
import VisibilityIcon from '@mui/icons-material/Visibility';
import PrintIcon from '@mui/icons-material/Print';
import styled from '@emotion/styled';
// import './doctorTable.css';

function createData(doctorName, speciality, appDate, time, bookingDate, amount) {
    return { doctorName, speciality, appDate, time, bookingDate, amount };
}

const rows = [
    createData('Dr Rubby Prrrin', 'Dental', '14 Nov 2022', '10.00 PM', '12 Nov 2022', 160),
    createData('Dr Rubby Prrrin', 'Dental', '14 Nov 2022', '10.00 PM', '12 Nov 2022', 160),
    createData('Dr Rubby Prrrin', 'Dental', '14 Nov 2022', '10.00 PM', '12 Nov 2022', 160),
    createData('Dr Rubby Prrrin', 'Dental', '14 Nov 2022', '10.00 PM', '12 Nov 2022', 160),
    createData('Dr Rubby Prrrin', 'Dental', '14 Nov 2022', '10.00 PM', '12 Nov 2022', 160),
];

const MyAppointment = () => {
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
    return (
        <TableBox>
            {/* <Box sx={{ borderBottom: "1px solid #eaeaea", py: 1 }}>
                <Typography variant='h6' sx={{ ml: 2 }}>Doctors List</Typography>
            </Box> */}
            <TableContainer component={Paper} sx={{ borderRadius: 'none' }}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableHeading>
                            <TableCell>Doctor Name</TableCell>
                            <TableCell align="left">Appt Date</TableCell>
                            <TableCell align="left">Booking Date</TableCell>
                            <TableCell align="left">Amount</TableCell>
                            <TableCell align="left">Status</TableCell>
                            <TableCell align="left">Action</TableCell>
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
                                    <Box>
                                        <Typography variant='body' sx={{ display: 'block' }}>    {row.doctorName}</Typography>
                                        <Typography variant='body' sx={{ color: '#20C0F3' }}>  {row.speciality}</Typography>
                                    </Box>
                                </TableCell>
                                <TableCell align="left">

                                    <Typography variant='body' sx={{ display: 'block' }}>     {row.appDate}</Typography>
                                    <Typography variant='body' sx={{ color: '#20C0F3' }}>  {row.time}</Typography>
                                </TableCell>
                                <TableCell align="left">{row.bookingDate}</TableCell>
                                <TableCell align="left">${row.amount}</TableCell>
                                <TableCell align="left">
                                    <Box sx={{ width: '70px', height: '20p', backgroundColor: 'rgba(15, 183, 107,0.12)', textAlign: "center", borderRadius: '15px', color: '#26af48' }}>
                                        Confrim
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <ViewButton sx={{ mr: 1, }} size='small' startIcon={<VisibilityIcon />}>
                                        View
                                    </ViewButton>
                                    <PrintButton size='small' startIcon={<PrintIcon />}>
                                        Print
                                    </PrintButton>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </TableBox>
    );
};
export default MyAppointment;